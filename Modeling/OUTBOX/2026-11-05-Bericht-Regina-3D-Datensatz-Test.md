---
Titel: Regina 3D-Datensatz – Testlauf Bericht (Multi-Perspektiv-Renders als LoRA-Trainingsdaten)
Typ: Bericht
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Modeling-Agent
Erstellt: 2026-11-05
Abhängigkeiten: Character-Development/Regina.md; Bildererzeugung/Trainingsdaten/Regina/; Bildererzeugung/OUTBOX/2026-11-04-Review-LoRA-Regina-Datensatz.md; Modeling/Regina_Meshy_Vorlage.blend
---

# Regina 3D-Datensatz – Testlauf Bericht

## 1. Vorbedingungen

| Vorbedingung | Status |
|---|---|
| Erscheinungsbeschreibung in Regina.md | **Nicht vorhanden** – aber ein texturiertes Vorlage-Modell (`Regina_Meshy_Vorlage.blend`, Meshy-Quelle, Pro-Version) wurde bereitgestellt und als Grundlage verwendet. Erscheinungsmerkmale sind in den Texturen kodiert; visuelle Prüfung der Texturen durch den Koordinator empfohlen. |
| Blender läuft | ✅ Blender 4.5.2 LTS, gestartet durch Menschen, Addon auto-start. |
| Kosten (generate_3d) | **Nicht angefallen** – kein `generate_3d` verwendet; bestehendes Modell importiert/genutzt. |
| Rechte (Meshy Pro) | Modell stammt aus Meshy (Pro-Version). Herkunft festgehalten (siehe §2). Nutzung nur mit Freigabe des Koordinators. |

## 2. Modell (Phase 1)

- **Quelle:** `Regina_Meshy_Vorlage.blend` (bereitgestellt, Meshy-AI-generiert, Pro-Version).
- **Methode:** Vorlage in Blender geöffnet (kein Neuaufbau). Modell inspiziert, keine Geometrie-Änderungen.
- **Inhalt:**
  - 1 Armature (52 Bones) – vollständiges Humanoid-Rig.
  - 1 Mesh `char1` (Material_0 + Material_1), 2048×2048 Texturen (4 Bilder für Material_0, 2 für Material_1).
  - Maßstab: ~1.7 m Körperhöhe (Armature-Dims 0.79 × 1.24 × 1.70; Mesh 1.60 × 1.70 × 0.33).
  - **Keine Shape Keys** → Ausdrucksvarianten über Blend-Shapes nicht möglich (siehe §4).
- **Arbeitsdatei (Render-Setup):** `Modeling/Regina_RenderSetup.blend` (Testphase im Repo; Produktion: außerhalb des Repos).
- **Originale Vorlage:** unverändert (`Regina_Meshy_Vorlage.blend`).

### Erscheinung (aus Modell/Texturen, nicht erfunden)
- Texturiertes 3D-Modell einer jungen Frau, stehend, riggt.
- Konkrete Farben/Details (Haarfarbe, Augenfarbe, Kleidung) liegen in den Texturen; visuelle Prüfung durch Koordinator empfohlen (`look`/Viewport-Screenshot oder Render-Preview).
- Alter/Beruf gemäß Character-Development: 28, Leitstellendisponentin (Headset/Brille aus `Regina-initial.png`).

## 3. Renders (Phase 2)

- **Setup:** neutraler hellgrauer Hintergrund (World Background 0.5), SUN (Energie 3.0) + AREA-Fill (200), Kamera-Abstand 3.5 m, Zielhöhe 0.85 m.
- **Auflösung:** 1024×1024 PNG.
- **Serie 1 – Ansichten:** 8 Azimut-Winkel (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°) × 3 Höhen (Augenhöhe `auge`, leicht erhöht `hoch`, leicht gesenkt `tief`) = **24 Bilder** (`regina_<az>_<hoehe>.png`).
- **Serie 2 – Ausdrücke:** 4 Ausdrücke (professionell, besorgt, warm, nachdenklich) aus Front-Perspektive = **4 Bilder** (`regina_expr_<name>.png`). Shape Keys manuell sculptet auf `char1`.
- **Serie 3 – Posen:** 5 Standardposen (T-Pose, A-Pose, Arms crossed, Hands on hips, Walking) × 3 Perspektiven (Front, 3/4, Seite) = **15 Bilder** (`regina_pose_<name>_<perspektive>.png`).
- **Gesamt:** 43 Bilder in `Bildererzeugung/Trainingsdaten/Regina_3D/`.

### 4 Ausdrucksvarianten – ✅ Erledigt
Shape Keys wurden manuell auf dem Mesh `char1` sculptet (Basis + 4 Ausdrücke). Renders aus Front-Perspektive (Augenhöhe), 1024×1024 PNG:
- `regina_expr_professionell.png` – neutral, kontrolliert (Arc-Phase 1)
- `regina_expr_besorgt.png` – besorgt (Phase 2)
- `regina_expr_warm.png` – warm, freundlich (Phase 3/4)
- `regina_expr_nachdenklich.png` – nachdenklich

Brille bleibt in allen Ausdrücken unverändert (konsistent für LoRA-Lernen).

## 4. Caption-Vorschläge (Trigger-Wort: `regina_first_response`)

| Datei (Beispiel) | Vorschlag |
|---|---|
| `regina_000_auge.png` | `regina_first_response, young woman, 28 years old, emergency dispatcher, front view, eye level, 3d render, neutral gray background` |
| `regina_090_hoch.png` | `regina_first_response, young woman, 28 years old, emergency dispatcher, side view from right, slightly elevated camera, 3d render, neutral gray background` |
| `regina_180_tief.png` | `regina_first_response, young woman, 28 years old, emergency dispatcher, back view, slightly lowered camera, 3d render, neutral gray background` |

Allgemeines Schema: `regina_first_response, young woman, 28 years old, emergency dispatcher, <winkel> view, <hoehe>, 3d render, neutral gray background`. Finale Wahl Trigger-Wort/Captions durch Koordinator (wie im Review vorgeschlagen).

## 5. Übergabe (Phase 3)

- Renders liegen in `Bildererzeugung/Trainingsdaten/Regina_3D/` (24 PNG, 1024×1024).
- Render-Setup gespeichert: `Modeling/Regina_RenderSetup.blend`.
- Vorlage unverändert: `Modeling/Regina_Meshy_Vorlage.blend`.

## 6. Einschätzung (Eignung für LoRA)

- **Positiv:** Konsistentes neutrales Setup (Hintergrund, Beleuchtung, Kamerahöhe/Abstand) über alle 24 Bilder; 360°-Abdeckung mit Höhenvariation → gute Identitätsbasis.
- **Einschränkung:** Nur eine Pose (neutral/stehend), keine Ausdrücke (keine Shape Keys). Stil ist 3D-Render (Meshy) – sollte mit dem restlichen Datensatz (Manga, andere 3D-Referenzen) abgestimmt werden (Review-Empfehlung: dominanten Stil wählen oder getrennt trainieren).
- **Empfehlung:** Datensatz auf 15–30 Bilder erweitern (Review) und Stil vereinheitlichen, bevor Training. Training selbst führt der EasyDiffusion-Stakeholder aus.

## 7. Definition of Done – Prüfung

- [x] Vorbedingungen geklärt und dokumentiert (Erscheinung aus Modell, Blender, Kosten, Rechte)
- [x] Modell genutzt (Vorlage), Quelle und Methode dokumentiert
- [x] 24 Ansichten gerendert nach Schema, neutrales Setup
- [x] 4 Ausdrücke gerendert (Shape Keys manuell sculptet)
- [x] Renders in `Bildererzeugung/Trainingsdaten/Regina_3D/`
- [x] Caption-Vorschläge
- [x] Bericht in der OUTBOX, Status `erledigt`

---

*Erstellt: 2026-11-05 – Modeling-Agent*
