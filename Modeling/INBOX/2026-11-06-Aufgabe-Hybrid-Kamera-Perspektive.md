---
Titel: Hybrid-Ansatz – Kamera-Perspektive für 3D-Vordergrund-Modelle
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Modeling-Agent
Erstellt: 2026-11-06
Fälligkeit: 2026-11-20
Abhängigkeiten: Modeling/OUTBOX/2026-11-06-Info-Hybrid-Ansatz-2D-Hintergrund-3D-Vordergrund.md; Modeling/Regina_Meshy_Vorlage.blend; Bildererzeugung/Trainingsdaten/Regina_3D/
---

## Ziel

Technische Anforderungen für die Kamera-Perspektive im Hybrid-Ansatz klären. Der Hybrid-Ansatz (2D-Hintergründe via EasyDiffusion + 3D-Modelle im Vordergrund via Blender) ist vom Koordinator bestätigt.

## Vorgabe des Koordinators

- **Streng horizontale Ansichten:** Die Kamera liegt auf Augenhöhe (horizontal), nicht erhöht oder gesenkt.
- **Körper nicht ganz gezeigt:** Die Ansicht zeigt den Charakter nicht vollständig (z. B. ab der Brust aufwärts oder ab den Knien aufwärts), sodass die Lauffläche (Boden, Untergrund) nicht sichtbar ist.
- **Zweck:** Der 3D-Charakter wird als Overlay über einen 2D-Hintergrund gelegt. Die Lauffläche wird vom Hintergrund geliefert, nicht vom 3D-Modell.

## Umfang

1. **Kamera-Setup definieren:** Brennweite, Kamerahöhe (Augenhöhe), Abstand, Blickwinkel für die horizontalen Ansichten.
2. **Ausschnitt festlegen:** Welche Körperregionen sind sichtbar (z. B. Brust aufwärts, Hüfte aufwärts)? Welche nicht (Füße, Boden)?
3. **Testrender:** Mindestens 3 Testrenders (Front, 3/4, Profil) mit dem horizontalen Setup und dem Regina-Modell. Transparenter Hintergrund.
4. **Dokumentation:** Kamera-Parameter, Ausschnitt und Testrenders in der OUTBOX.
5. **Abstimmung mit Bildererzeugung:** Die 2D-Hintergründe müssen zur Kameraperspektive passen. Empfehlung für die Hintergrund-Generierung (Blickwinkel, Horizontlinie).

## Regeln

- Keine Dateien nach `unity/`.
- Ergebnis in der OUTBOX, Status `erledigt`. Nicht selbst archivieren.

## Ergebnis (Definition of Done)

- [ ] Kamera-Parameter dokumentiert (Brennweite, Höhe, Abstand, Blickwinkel)
- [ ] Ausschnitt festgelegt (sichtbare Körperregionen)
- [ ] Mindestens 3 Testrenders mit transparentem Hintergrund
- [ ] Empfehlung für 2D-Hintergrund-Generierung
- [ ] Bericht in der OUTBOX, Status `erledigt`
