---
Titel: LoRA-Vorbereitung Regina – Datensatz prüfen und dokumentieren
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Bildererzeugungs-Agent
Erstellt: 2026-11-04
Fälligkeit: 2026-11-18
Abhängigkeiten: Bildererzeugung/Trainingsdaten/Regina/ (7 PNG); Extern/EasyDiffusion/INBOX/2026-11-04-Aufgabe-LoRA-Regina-Training.md; Character-Development/Regina.md
---

## Ziel

Den Trainingsdatensatz für Regina prüfen, dokumentieren und die Vorbereitung für ein LoRA-Training vorlegen. **Das Training selbst führt der Stakeholder EasyDiffusion aus**, nicht dieser Agent (siehe Abgrenzung in `BRIEFING.md`).

## Datensatz

Ablage: `Bildererzeugung/Trainingsdaten/Regina/` (7 PNG, ca. 2,6 MB, vom Koordinator bereitgestellt):

| Datei | Beobachtung (vorläufig, bitte prüfen) |
|---|---|
| `Regina-initial.png` | Monochrome Zeichnung/Manga-Stil, Headset, Brille, Halbprofil |
| `regina-3d-front-tpose.png` | 3D-Referenz, Frontansicht, T-Pose |
| `regina-3d-from-left-side-tpose.png` | 3D-Referenz, Seitenansicht links, T-Pose |
| `regina-3d-running.png` | 3D-Referenz, Laufpose |
| `Meshy_AI_*.png` (3 Dateien) | Herkunft: vermutlich Meshy-AI-Generierung |

## Umfang

1. **Bestandsaufnahme:** Auflösung, Format, Stil, Pose und Hintergrund je Bild in einer Tabelle erfassen.
2. **Stil-Konsistenz prüfen:** Die Bilder wirken uneinheitlich (Zeichnung vs. 3D-Referenz). Bewerten, ob das für einen gemeinsamen LoRA-Stil problematisch ist.
3. **Herkunft klären:** Bei den Meshy-Bildern und den 3D-Referenzen prüfen, ob sie für Training genutzt werden dürfen. Ergebnis dokumentieren, ohne Rechtsberatung zu ersetzen.
4. **Captions vorschlagen:** Je Bild eine kurze Beschreibungszeile für das Training (Trigger-Wort-Vorschlag, z. B. `regina_first_response`, bitte als Vorschlag kennzeichnen).
5. **Konsistenz mit Character-Development:** Abgleichen, was aus `Character-Development/Regina.md` über Erscheinung bekannt ist. Erscheinungsmerkmale, die dort fehlen, nicht erfinden, sondern als Lücke melden.
6. **Datensatz-Empfehlung:** Ist der Umfang (7 Bilder) für einen ersten LoRA-Test ausreichend? Wenn nein, welche Bildtypen fehlen (z. B. Gesicht Nahaufnahme, Halbtotale, Kleidung, verschiedene Lichtsituationen)?

## Regeln

- **Keine Training-Ausführung** und kein Eingriff in das EasyDiffusion-Tool.
- API-Nutzung nur für Testrenders nach dem API-Vertrag (Healthcheck vorher, Server nicht selbst starten).
- Bilder im Trainingsordner nicht verändern oder umbenennen.
- Ergebnis als Bericht in der OUTBOX (`Bildererzeugung/OUTBOX/2026-11-04-Review-LoRA-Regina-Datensatz.md`), Status `erledigt`.

## Ergebnis (Definition of Done)

- [ ] Bestandsaufnahme-Tabelle aller 7 Bilder
- [ ] Stil-Bewertung und Herkunftsklärung dokumentiert
- [ ] Caption-Vorschläge mit Trigger-Wort-Vorschlag
- [ ] Lücken gegenüber Character-Development gemeldet
- [ ] Empfehlung zum Datensatzumfang
- [ ] Bericht in der OUTBOX, Status `erledigt`
