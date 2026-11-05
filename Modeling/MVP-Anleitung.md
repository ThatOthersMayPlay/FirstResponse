# MVP-Schnittstelle – Modeling-Agent (Blender 4.5)

**Status:** Testphase. Primäre Schnittstelle ist **Blender MCP** (interaktive Steuerung von Blender über MCP-Tools). Zusätzlich gibt es eine CLI/File-Fallback-Variante (Abschnitt 9).

Blender MCP ist eingerichtet:
- uv 0.13.7 in `C:\Users\achim\.local\bin\`
- OpenCode MCP-Server `blender` → `C:\Users\achim\.local\bin\uvx.exe mcp-for-blender`
- Addon "Interface: MCP for Blender" installiert & aktiviert in Blender 4.5
- Blender muss geöffnet sein (Addon auto-startet den Server auf Port 9876)

---

## 0. Blender MCP (primäre Schnittstelle)

Der Agent steuert ein **laufendes Blender** über MCP-Tools (`tools.blender.*`), insbesondere `execute_blender_code` (beliebiger Python/bpy-Code) und `look` (Viewport-Screenshot). Blender muss geöffnet sein; das Addon startet den Server beim Laden automatisch.

**Ablauf:**
1. Bediener (oder Agent) öffnet Blender (GUI). Addon auto-startet Server auf `localhost:9876`.
2. Agent prüft Verbindung: `get_addon_status`.
3. Agent führt Modellierungsoperationen aus via `execute_blender_code` (bpy-API).
4. Ergebnisse: Speichern `.blend` in `Modeling/` (Testphase), Exporte/Renders nach `OUTBOX/`, Bericht in `OUTBOX/`.
5. Agent dokumentiert Aufgabe in INBOX/OUTBOX gemäß `Agenten-Workflow.md`.

**Wichtige MCP-Tools:**
- `get_addon_status` – Verbindung & Version prüfen
- `get_scene_info` / `get_object_info` – Szene inspizieren
- `execute_blender_code` – bpy-Code ausführen (Modellierung, Export, Render)
- `look` – Viewport-Screenshot zur Kontrolle

**Hinweise aus den MCP-Instructions:**
- Shader-Nodes nach Typ suchen, nie nach Name (lokalisierte Namen).
- Enum-IDs nicht hardcoden; aus `bl_rna` lesen.
- Materialfarben auf Shader-Node-Inputs setzen, nicht `diffuse_color`.
- `look` nutzen, um Ergebnisse zu kontrollieren; kleine `max_size` für lange Sitzungen.

**Grenzen:** Nur ein MCP-Server-Instance gleichzeitig (nicht parallel in Cursor und OpenCode). GUI-Blender nötig (headless startet keinen Server).

---

## 1. Grundprinzip (CLI/File-Fallback)

```
Koordinator/Bediener ──Aufgabe (INBOX)──▶ Agent bereitet Python-Skript vor
Agent ──Skript (.py)──▶ Bediener startet Blender (GUI oder headless)
Blender ──Ergebnisse──▶ Modeling/OUTBOX/  (Exporte, Render, Bericht)
Agent ──Status/Bericht──▶ INBOX → OUTBOX → (Koordinator archiviert)
```

- Der Agent **startet Blender nicht selbst** (siehe BRIEFING §2). Der Mensch startet Blender mit dem vorbereiteten Skript.
- Ergebnisse landen ausschließlich in `Modeling/OUTBOX/`.
- `.blend`-Arbeitsstände: in der Testphase direkt in `Modeling/`, später im im Auftrag festgelegten Arbeitsordner außerhalb des Repos.

## 2. Ordner & Dateien

| Pfad | Zweck |
|---|---|
| `Modeling/INBOX/` | Aufträge (Markdown, Format gemäß `ProjectManagement/Agenten-Workflow.md` §5) |
| `Modeling/OUTBOX/` | Ergebnisse: Exporte (`.glb`, `.fbx`), Renders (`.png`), Berichte (`.md`) |
| `Modeling/ARCHIV/` | Abgeschlossene Aufträge (nur Koordinator) |
| `Modeling/blender_common.py` | Gemeinsame Helfer (Pfade, Export, Render, Bericht) |
| `Modeling/*.py` | Aufgaben-/Tests-Skripte (eins pro Aufgabe) |
| `Modeling/run-blender-task.ps1` | Starter für headless-Aufrufe |

Namensschema für Ergebnisse: `YYYY-MM-DD-<Typ>-<Kurztitel>.<ext>` (z. B. `2026-11-05-Ergebnis-testprojekt-wuerfel.glb`).

## 3. Skript-Konvention

Jedes Aufgaben-Skript:

1. Ermittelt seinen Basisordner aus `__file__` (keine hart codierten Pfade).
2. Importiert `blender_common` (Pfad wird in `sys.path` eingefügt).
3. Ruft `bc.ensure_dirs()`, `bc.clear_scene()`.
4. Baut das Modell (Blender-Python-API).
5. Speichert `.blend` (Arbeitsstand) in `Modeling/` (Testphase).
6. Exportiert nach `OUTBOX/` (`.glb` + `.fbx`).
7. Optional: Render-Preview (`.png`).
8. Schreibt einen Bericht (`.md`) in `OUTBOX/`.

Das Skript läuft sowohl headless (`--background`) als auch im interaktiven Text-Editor (Alt+P).

## 4. Aufruf

### A) Headless (empfohlen für Tests/Exporte)

```powershell
cd "C:\Users\achim\.local\share\opencode\worktree\1082d6\eager-engine\Modeling"
.\run-blender-task.ps1 -Task testprojekt_wuerfel.py
```

Oder direkt:

```powershell
& "C:\Program Files\Blender Foundation\Blender 4.5\blender.exe" --background --python "C:\Users\achim\.local\share\opencode\worktree\1082d6\eager-engine\Modeling\testprojekt_wuerfel.py"
```

Mit bestehender `.blend`-Datei:

```powershell
& "C:\Program Files\Blender Foundation\Blender 4.5\blender.exe" "mein_modell.blend" --background --python "task.py"
```

### B) Interaktiv (GUI)

1. Blender starten.
2. `Text Editor` → `Open` → Skript wählen.
3. `Run Script` (Alt+P) oder Play-Button.
4. Ergebnisse erscheinen in `OUTBOX/`.

### C) Nur Export eines bestehenden Modells

Skript ohne Modellbau, nur `bc.export_gltf` / `bc.export_fbx` auf die aktive Szene – nützlich, wenn man in der GUI modelliert hat und exportieren will.

## 5. Plug-in / Addon

**Primär wird ein Addon genutzt: "Interface: MCP for Blender"** (Teil von *mcp-for-blender*). Es läuft in Blender und startet einen Socket-Server (Port 9876), über den der Agent Blender steuert.

- Installation erfolgte über `uvx mcp-for-blender setup` (uv 0.13.7).
- Addon-Pfad: `C:\Users\achim\AppData\Roaming\Blender Foundation\Blender\4.5\scripts\addons\blender_mcp.py`
- Aktivierung: Blender → Edit → Preferences → Add-ons → "Interface: MCP for Blender" (auto-aktiviert).
- Server startet beim Laden von Blender automatisch (Auto-Start = True).

Die CLI/File-Variante (Abschnitt 9) benötigt kein Addon und bleibt als Fallback.

## 6. Testprojekt (Validierung der Pipeline)

Skript: `Modeling/testprojekt_wuerfel.py`

Erzeugt einen 1 m-Würfel mit rotem Material, speichert `testprojekt_wuerfel.blend`, rendert ein Preview-PNG und exportiert GLB + FBX nach `OUTBOX/`. Dient als End-to-End-Test der Schnittstelle.

**Durchführung:**
1. Bediener führt `.\run-blender-task.ps1 -Task testprojekt_wuerfel.py` aus (oder Variante B).
2. Prüfen, dass in `OUTBOX/` vier Dateien entstanden sind: `.glb`, `.fbx`, `.png`, `-Bericht.md`.
3. Agent sichtet Ergebnis, setzt Aufgabenstatus und dokumentiert.

## 7. Grenzen / Regeln (aus BRIEFING)

- Keine Figurenfakten erfinden; Aussehen/Kleidung nur nach Vorgabe.
- Keine Installation/Konfigurationsänderung an Blender ohne Freigabe.
- Keine Eingriffe in `unity/`; Übernahme nur über Koordinator-Auftrag.
- `.meta`-Dateien ignorieren.
- Große Binärdateien vor Commit prüfen; im Zweifel fragen.

## 8. Offene Punkte (nach diesem Dokument)

- [ ] Erster echter Modellierungsauftrag (vom Koordinator).
- [ ] Arbeitsordner für `.blend`-Dateien außerhalb des Repos festlegen (für Produktion).
- [ ] Exportformat mit Unity-Pipeline abstimmen (GLB vs. FBX) – aktuell beide.
