---
Titel: Prototyp spielbar machen – Szenen-Hintergründe und Platzhalter
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-11-06
Fälligkeit: 2026-11-20
Abhängigkeiten: HTML-Prototype/OUTBOX/2026-08-15-Aufgabe-Beispielszene-Szene1.md; HTML-Prototype/scenes/ (Platzhalter-PNGs vorhanden); Spielmechanik/OUTBOX/2026-11-04-Info-Gedanken-Agenda-Konzept.md
---

## Ziel

Der Prototyp soll spielbar sein. Aktuell sind die Szenen-Bilder Platzhalter. Es fehlt mindestens eine Möglichkeit, Hintergrundbilder einzubinden, und die vorhandenen Platzhalter sollen als echte Hintergründe angezeigt werden.

## Umfang

1. **Szenen-Hintergründe einbinden:** Die vorhandenen Platzhalter-PNGs in `scenes/` als Hintergrundbilder für die jeweiligen Szenen (intro, nachfragen, polizei_warnt, stefania_beruhigt, einsatzstelle) einbinden. Die Hintergründe sollen beim Szenenwechsel wechseln.
2. **Hybrid-Ansatz (neu):** Der Koordinator hat den Hybrid-Ansatz bestätigt (2D-Hintergründe via EasyDiffusion + 3D-Modelle im Vordergrund via Blender). Die technischen Anforderungen für das Compositing (CSS-Overlay, Canvas, WebGL) sind noch offen. Vorerst: transparente PNG-Overlays über Hintergrundbild als Ansatz prüfen.
3. **Gedanken-Agenda-Leiste:** Die Testversion wurde committet und dann revertet. Neu implementieren (siehe `INBOX/2026-11-05-Aufgabe-Gedanken-Agenda-Anzeige.md`).
4. **Durchspiel-Test:** Der Prototyp muss ohne Absturz spielbar sein, mit sichtbaren Hintergründen und funktionierenden Optionen.

## Regeln

- Keine Story-Logik im HTML (`HTML-Ink-Schnittstelle.md` §5).
- Ergebnis in der OUTBOX, Status `erledigt`. Nicht selbst archivieren.

## Ergebnis (Definition of Done)

- [ ] Szenen-Hintergründe werden beim Szenenwechsel angezeigt
- [ ] Platzhalter-Bilder als echte Hintergründe eingebunden
- [ ] Prototyp ist ohne Absturz spielbar
- [ ] Gedanken-Agenda-Leiste implementiert (Testversion)
- [ ] Bericht in der OUTBOX, Status `erledigt`
