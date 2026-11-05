---
Titel: LoRA-Vorbereitung Regina – Datensatz-Prüfung und Dokumentation
Typ: Review
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Bildererzeugungs-Agent
Erstellt: 2026-11-04
Fälligkeit: 2026-11-18
Abhängigkeiten: Bildererzeugung/Trainingsdaten/Regina/ (7 PNG); Character-Development/Regina.md
---

# LoRA-Vorbereitung Regina – Datensatz-Prüfung

Agent hat keinen Bild-Eingang (keine Vision); technische Daten per PIL ermittelt, visuelle Details (Haarfarbe, Kleidung etc.) aus Dateinamen/Aufgabenbeobachtung übernommen bzw. als Lücke gemeldet. Trainingsdaten wurden nicht verändert.

## 1. Bestandsaufnahme

| # | Datei | Auflösung | Format/Modus | Hintergrund (technisch) | Stil (aus Name/Aufgabe) | Pose |
|---|---|---|---|---|---|---|
| 1 | `Regina-initial.png` | 357×505 | PNG/RGBA (voll opak) | hell (Ø-Lum. 100, Schwarz/Weiß) | Monochrome Zeichnung/Manga, Headset, Brille, Halbprofil | Halbprofil, sitzend/Leitstelle |
| 2 | `regina-3d-front-tpose.png` | 615×652 | PNG/RGBA (voll opak) | grau (Ø-Lum. 65) | 3D-Referenz | Front, T-Pose |
| 3 | `regina-3d-from-left-side-tpose.png` | 435×677 | PNG/RGBA (voll opak) | grau (Ø-Lum. 65) | 3D-Referenz | Seitenansicht links, T-Pose |
| 4 | `regina-3d-running.png` | 416×677 | PNG/RGBA (voll opak) | grau (Ø-Lum. 67) | 3D-Referenz | Laufpose |
| 5 | `Meshy_AI_7253…3622.png` | 1024×1024 | PNG/RGB | dunkel (Ø-Lum. 29) | Meshy-AI-Generierung | (visuell nicht prüfbar) |
| 6 | `Meshy_AI_ccbdee…61c6a.png` | 1024×1024 | PNG/RGB | dunkel (Ø-Lum. 21) | Meshy-AI-Generierung | (visuell nicht prüfbar) |
| 7 | `Meshy_AI_da2e5…9cdc69.png` | 1024×1024 | PNG/RGB | dunkel (Ø-Lum. 28) | Meshy-AI-Generierung | (visuell nicht prüfbar) |

Hinweis: Alle RGBA-Bilder sind voll opak (Alpha min=max=255) – keine echte Transparenz.

## 2. Stil-Konsistenz

**Uneinheitlich.** Drei deutlich verschiedene Stile/Quellen:
- monochrome Manga-Zeichnung (Regina-initial)
- graue 3D-Referenz-Renderings (T-Pose, Laufpose)
- dunkle Meshy-AI-Renderings (1024×1024)

Für einen gemeinsamen LoRA-Stil ist das problematisch: das Modell kann Identität mit Stil vermischen. Empfehlung:
- Entweder einen dominanten Stil wählen und die anderen als Hilfsreferenzen nutzen, oder
- Stile getrennt trainieren (z. B. „Regina-3D" vs. „Regina-Zeichnung"),
- Hintergründe normalisieren (grau/neutral) für konsistente Conditioning,
- Meshy-Bilder auf Eignung prüfen (können Stil-Artefakte einbringen).

## 3. Herkunft

- `Meshy_AI_*.png` (3 Dateien): Herkunft Meshy AI, vom Koordinator mit Pro-Version zur weiteren Verwendung erzeugt (laut Aufgabe). Nutzungsrechte nicht bewertet (Aufgabe des Koordinators).
- `regina-3d-*.png` (3 Dateien): 3D-Referenz-Renderings (vermutlich aus einem 3D-Modell), T-Pose/laufend.
- `Regina-initial.png`: monochrome Zeichnung/Manga-Stil.

## 4. Caption-Vorschläge (Trigger-Wort-Vorschlag: `regina_first_response`)

| Datei | Vorschlag |
|---|---|
| Regina-initial.png | `regina_first_response, young woman, 28 years old, emergency dispatcher, headset, glasses, half profile, monochrome illustration, office` |
| regina-3d-front-tpose.png | `regina_first_response, young woman, 28 years old, emergency dispatcher, front view, t-pose, 3d render, gray background` |
| regina-3d-from-left-side-tpose.png | `regina_first_response, young woman, 28 years old, emergency dispatcher, side view from left, t-pose, 3d render, gray background` |
| regina-3d-running.png | `regina_first_response, young woman, 28 years old, emergency dispatcher, running pose, 3d render, gray background` |
| Meshy_AI_*.png (×3) | `regina_first_response, young woman, 28 years old, emergency dispatcher, [pose/angle beschreiben], 3d render, dark background` (visuell zu ergänzen) |

Trigger-Wort `regina_first_response` ist Vorschlag; finale Wahl durch Koordinator/Stakeholder.

## 5. Lücken gegenüber Character-Development

`Character-Development/Regina.md` enthält **keine Erscheinungsbeschreibung** (Haarfarbe/-stil, Augenfarbe, Hautton, Kleidung, Accessoires). Bekannt nur: Alter 28, Leitstellendisponentin, Headset/Brille aus `Regina-initial.png`. Nicht erfunden – als Lücke gemeldet:
- Haarfarbe und Frisur
- Augenfarbe
- Hautton
- typische Kleidung/Uniform der Leitstelle
- Körperbau/Größe
- Ausdruck/Emotion in verschiedenen Phasen (Arc Phase 1–4)

Empfehlung: Erscheinungsmerkmale in `Regina.md` ergänzen, bevor das Training startet, damit Captions konsistent sind.

## 6. Empfehlung Datensatzumfang

7 Bilder sind für einen ersten LoRA-Test **knapp, aber nutzbar** als Pilot. Fehlende Bildtypen:
- Gesicht-Nahaufnahme (Front, 3/4, Profil)
- Halbtotale (Hüfte aufwärts) mit Kleidung
- Verschiedene Lichtsituationen (Leitstelle, warm/kalt)
- Verschiedene Ausdrücke (professionell, besorgt, warm)
- Konsistente Hintergründe

Empfehlung: Datensatz auf 15–30 Bilder erweitern und Stil vereinheitlichen, dann Training. Training selbst führt der EasyDiffusion-Stakeholder aus (nicht dieser Agent).

*Erledigt: 2026-11-04 – Bildererzeugungs-Agent*
