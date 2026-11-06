---
Titel: Info – Regina-Modell wird manuell mit Mixamo-Animationen gefüttert
Typ: Info
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Modeling-Agent
Erstellt: 2026-11-06
Abhängigkeiten: Modeling/OUTBOX/2026-11-05-Bericht-Regina-3D-Datensatz-Test.md; Bildererzeugung/Trainingsdaten/Regina_3D/
---

## Information

Der Koordinator füttert das aktuelle Regina-Modell (`Regina_Meshy_Vorlage.blend`) manuell mit Standardanimationen über **Mixamo**. Die animierten Modelle werden anschließend als Grundlage für weitere Renders und Trainingsdaten verwendet.

## Konsequenzen für den Modeling-Agenten

1. **Keine eigenen Animationen erstellen** – die Animationen kommen aus Mixamo.
2. **Retargeting:** Falls das Modell Rigging-Probleme mit Mixamo-Animationen hat, meldet der Agent das als Rückfrage.
3. **Weitere Renders:** Nach der Mixamo-Fütterung können animierte Renders (Lauf, Gehen, Stehen, Gesten) erzeugt werden. Diese ergänzen den bestehenden Datensatz (24 statische + 4 Ausdrücke).
4. **Datensatz-Erweiterung:** Die animierten Frames können als zusätzliche Trainingsbilder dienen (z. B. für Bewegungs-/Pose-Vielfalt im LoRA-Datensatz).

## Bitte

- Warten, bis der Koordinator die Mixamo-Animationen geliefert hat.
- Dann: animierte Renders erzeugen und in `Bildererzeugung/Trainingsdaten/Regina_3D/` ablegen.
- Caption-Vorschläge für die animierten Frames liefern (Trigger-Wort `regina_first_response`).

## Offene Punkte

- Welche Mixamo-Animationen werden verwendet? (Koordinator liefert Liste)
- Wie viele Frames pro Animation? (Vorschlag: 3–5 Keyframes pro Animation)
- Soll das Hybrid-Ansatz-Setup (transparenter Hintergrund) auch für animierte Renders gelten?

*Erstellt: 2026-11-06 – Koordinator*
