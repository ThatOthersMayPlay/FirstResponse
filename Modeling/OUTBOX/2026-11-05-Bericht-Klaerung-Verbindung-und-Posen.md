---
Titel: Klärung – Verbindung LLM/MCP/Blender, OpenCode-Anbindung und optimale Render-Posen für LoRA
Typ: Bericht
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Modeling-Agent
Erstellt: 2026-11-05
Abhängigkeiten: Modeling/BRIEFING.md; Bildererzeugung/OUTBOX/2026-11-04-Review-LoRA-Regina-Datensatz.md; Character-Development/Regina.md
---

# Klärung – Verbindung LLM/MCP/Blender, OpenCode-Anbindung und optimale Render-Posen für LoRA

## 1. Modell-Dokumentation (Testmodell)

### Methode & Werkzeug
- **Werkzeug:** Blender 4.5.2 LTS (`C:\Program Files\Blender Foundation\Blender 4.5`).
- **Schnittstelle:** Blender MCP (`mcp-for-blender` 1.8.x) – Steuerung über MCP-Tools aus OpenCode, insbesondere `execute_blender_code` (beliebiger Python/bpy-Code) und `look` (Viewport-Screenshot).
- **Erzeugung:** Vollautomatisch via `execute_blender_code`: Szene geleert, Würfel 1 m (`primitive_cube_add(size=1.0)`), rotes Principled-BSDF-Material (Base Color `(0.85, 0.15, 0.15, 1.0)`), SUN-Licht, Kamera mit Track-To-Constraint auf den Würfel, Render (EEVEE, 512×512 PNG), Export GLB + FBX, Speichern der `.blend`.

### Pfade
- **Blender-Arbeitsdatei:** `Modeling/testprojekt_wuerfel_mcp.blend` (Testphase im Repo; in Produktion außerhalb des Repos).
- **Exporte:** `Modeling/OUTBOX/2026-11-05-Ergebnis-testprojekt-wuerfel-mcp.glb`, `.fbx`
- **Render:** `Modeling/OUTBOX/2026-11-05-Render-testprojekt-wuerfel-mcp.png`
- **Bericht:** `Modeling/OUTBOX/2026-11-05-Bericht-testprojekt-wuerfel-mcp.md`

### Erscheinung des Modells
- Einziger Mesh: Würfel, 1 m Kantenlänge, zentriert im Ursprung, Material Rot (Principled BSDF).
- Maßstab 1:1 (Meter). Keine Textur, keine UV-Bearbeitung über Standard hinaus.
- Kamera: Position (3, −3, 2), ausgerichtet auf den Würfel (Track To).

### Referenzen
- Keine externen Referenzen für den Testwürfel. Der Test diente ausschließlich der Validierung der Schnittstelle (Modell → Render → Export → OUTBOX).

### Einschränkungen der Methode
- `generate_3d` (Meshy/Tripo/Hyper3D) erzeugt ein einzelnes texturiertes Objekt aus Text/Bild, dauert 1–3 Minuten und kann Credits kosten (Freigabe erforderlich). Nicht für ganze Szenen.
- Importierte/generierte Modelle kommen in beliebigem Maßstab → mit `world_bounding_box` skalieren und auf den Boden stellen.

## 2. Verbindung LLM / MCP / Blender

### Aufbau
- **LLM (OpenCode)** ↔ **MCP-Server `blender`** (lokal, stdio) ↔ **Blender-Addon "Interface: MCP for Blender"** (Socket, `localhost:9876`).
- MCP-Server-Befehl: `C:\Users\achim\.local\bin\uvx.exe mcp-for-blender` (uv 0.13.7).
- OpenCode-Konfiguration: `~/.config/opencode/opencode.jsonc` → `mcp.servers.blender` (V2-Form).
- Blender-Addon: `C:\Users\achim\AppData\Roaming\Blender Foundation\Blender\4.5\scripts\addons\blender_mcp.py`, Auto-Start aktiv (startet Server beim Laden von Blender).

### Verfügbare MCP-Tools (Auswahl)
- `get_addon_status` – Verbindung/Version/Capabilities prüfen
- `get_scene_info`, `get_object_info`, `list_scene_items` – Szene inspizieren
- `execute_blender_code` – beliebiger Python/bpy-Code (Modellierung, Material, Render, Export)
- `look` – Viewport-Screenshot (modi: viewport/camera/angles/frames; shading solid/material/rendered/wireframe/xray)
- `search_assets` / `import_asset` – Poly Haven / Sketchfab / Poly Pizza
- `generate_3d` – texturiertes Modell aus Text/Bild (kostenpflichtig, 1 Objekt)
- `disable_telemetry`, `record_trajectory_feedback`

### Einschränkungen
- **Blender muss als GUI laufen** (headless startet keinen MCP-Server – `bpy.app.background` bricht Auto-Start ab).
- **Nur eine MCP-Server-Instance gleichzeitig** (nicht parallel in Cursor und OpenCode).
- **Timeouts:** OpenCode-Defaults: Startup 30 s, Catalog 30 s, Execution 12 h. Für lange Operationen (Render, generate_3d) ausreichend; sehr große Exporte ggf. anpassen.
- **Dateisystem:** `execute_blender_code` läuft im Blender-Prozess; Dateipfade müssen für Blender erreichbar sein (lokale Windows-Pfade). Pfade mit Leerzeichen/Unicode funktionieren.
- **Lokalisierte Namen:** Shader-Nodes nach Typ suchen (`n.type == "BSDF_PRINCIPLED"`), nie nach Name. Enum-IDs aus `bl_rna` lesen, nicht hardcoden.
- **Materialfarben:** Auf Shader-Node-Inputs setzen, nicht `material.diffuse_color` (nur Viewport).
- **Engine-Wechsel:** `scene.render.engine` under-reports; Wert lesen und neuen Wert in try/except TypeError zuweisen (Fehlermeldung listet gültige Engines).

## 3. OpenCode-Anbindung

**Ja, OpenCode ist mit Blender verbunden – über MCP.** Die Anbindung erfolgte in dieser Testphase:
- Globale Config `~/.config/opencode/opencode.jsonc` mit `mcp.servers.blender` (V2-Form).
- uv als Paketmanager (offizieller Installer, stabiler Pfad `C:\Users\achim\.local\bin\uvx.exe`).
- Addon installiert & aktiviert; Server startet beim Öffnen von Blender automatisch.
- Verbindung verifiziert über `get_addon_status` (Blender 4.5.2 LTS, Protocol v15, Capabilities bestätigt).

**Was fehlt / Einschränkungen:**
- Blender muss vom Menschen gestartet werden (Agent startet Blender nicht selbst – BRIEFING §2).
- Kein headless-Betrieb für MCP (nur GUI).
- Für produktive `.blend`-Ablage ist ein Arbeitsordner außerhalb des Repos noch festzulegen.

## 4. Optimale Render-Posen für LoRA (Empfehlung)

### Abstimmung mit Bildererzeugung-Review
- Vorhandener Datensatz: 7 Bilder, **stilistisch uneinheitlich** (Manga-Zeichnung, graue 3D-Referenzen, dunkle Meshy-AI-Renderings). Empfehlung dort: dominanten Stil wählen oder Stile getrennt trainieren; Hintergründe normalisieren.
- Trigger-Wort-Vorschlag: `regina_first_response` (finale Wahl durch Koordinator).
- Captions: gleiche Struktur wie im Review (`regina_first_response, young woman, 28 years old, emergency dispatcher, ...`).

### Empfohlene Render-Serie (neutrales Setup)
- **Hintergrund:** hellgrau/neutral (einheitlich für alle Bilder).
- **Beleuchtung:** gleich, weich, schattenarm (z. B. 3-Punkt oder HDRI neutral).
- **Kamera:** fester Abstand und Höhe pro Serie, leicht erhöht (Augenhöhe ±15°).
- **Auflösung:** 1024×1024 PNG.
- **Pose:** neutral (T-Pose oder A-Pose) als Basis für Identitätslernen.

### Posenset (Minimum & Empfehlung)

| Gruppe | Anzahl | Beschreibung | Zweck |
|---|---|---|---|
| Basis-Identität | 8 | 8 Azimut-Winkel (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°) × Augenhöhe | Rundum-Identität |
| Höhenvariation | 16 | gleiche 8 Winkel × leicht erhöht + leicht gesenkt | Tiefen-/Perspektivrobustheit |
| Ausdrücke | 4 | professionell, besorgt, warm/freundlich, nachdenklich (wenn Modell Ausdruck zulässt) | Emotions-/Arc-Phasen (Phase 1–4) |
| **Empfohlen gesamt** | **28** | 24 Ansichten + 4 Ausdrücke | für stabilen LoRA-Datensatz |
| **Minimum (Pilot)** | **12** | 4 Winkel × 3 Höhen | erster Test, ob Pipeline funktioniert |

### Begründung je Pose
- **Front (0°):** Hauptidentität, Gesicht/Nase/Mund – zentral für Wiedererkennung.
- **3/4 (45°, 315°):** natürliches Porträt, typische Chat-/Dialog-Perspektive.
- **Profil (90°, 270°):** Silhouette, Kiefer, Haarvolumen.
- **Rückansicht (180°):** Haar, Schultern, Rückenkontur (Identität von hinten).
- **Erhöhte Kamera:** Deckt Kopfoberseite/Haar, wirkt „überlegen/professionell“ (passt zu Regina-Arc Phase 1).
- **Gesenkte Kamera:** wirkt „empfangend/warm“ (Arc Phase 3/4).
- **Ausdrücke:** verhindern, dass LoRA nur eine Emotion lernt; deckt Arc-Phasen (professionell → besorgt → warm) ab.

### Abstimmung mit 7 vorhandenen Bildern
- Die 7 Bilder (Manga, 3D-Referenzen, Meshy) sind für den Pilot nutzbar, aber stilistisch gemischt. Empfehlung: 3D-Renders (neutrales Setup) als dominanten Stil wählen und die übrigen als Hilfsreferenzen; oder Stile getrennt trainieren.
- Caption-Struktur aus Review übernehmen (`regina_first_response, young woman, 28 years old, emergency dispatcher, ...`).

## 5. Übergeordnete Anforderungen (für Koordinator)

Vor Start der Render-Serie müssen folgende Punkte erfüllt sein:

1. **Erscheinungsbeschreibung für Regina** in `Character-Development/Regina.md` ergänzen (Haarfarbe/-stil, Augenfarbe, Hautton, Kleidung/Uniform Leitstelle, Körperbau/Größe, Ausdrücke je Arc-Phase). **Ohne diese Angaben wird kein Modell erzeugt (keine Figurenfakten erfinden).** → Rückfrage an Koordinator (siehe `OUTBOX/2026-11-05-Rueckfrage-Regina-Erscheinung.md`).
2. **Blender läuft** – von einem Menschen gestartet (✅ in Testphase; für Produktion sicherstellen).
3. **Kostenfreigabe** für `generate_3d` (Meshy/Tripo/Hyper3D) – Credits können anfallen. Vor Modellerzeugung einholen.
4. **Rechte/Herkunft** des Modells klären (Meshy Pro-Quelle). Herkunft im Bericht festhalten.
5. **Arbeitsordner für `.blend`** außerhalb des Repos festlegen (Produktion).
6. **Exportformat** mit Unity-Pipeline abstimmen (GLB vs. FBX) – aktuell beide.
7. **Stilentscheidung** für LoRA (dominanter Stil vs. getrennte Stile) – mit Bildererzeugung abstimmen.
8. **Captions finalisieren** (Trigger-Wort `regina_first_response` – finale Wahl durch Koordinator/Stakeholder).
9. **Datensatzumfang** festlegen: Minimum 12 / Empfohlen 28 Bilder (Review empfiehlt 15–30).

## 6. Definition of Done – Prüfung

- [x] Modell dokumentiert (Methode, Pfad, Erscheinung, Referenzen)
- [x] Verbindung LLM/MCP/Blender dokumentiert
- [x] OpenCode-Anbindung geklärt (möglich, mit Begründung)
- [x] Empfohlene Render-Posen mit Begründung
- [x] Übergeordnete Anforderungen als Liste in der OUTBOX
- [x] Bericht in der OUTBOX

---

*Erstellt: 2026-11-05 – Modeling-Agent*
