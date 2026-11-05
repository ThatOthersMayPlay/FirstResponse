---
Titel: Gedanken-/Agenda-Leiste im HTML-Prototyp umsetzen (technische Anforderungen)
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-11-05
Fälligkeit: 2026-11-19
Abhängigkeiten: Spielmechanik/OUTBOX/2026-11-04-Info-Gedanken-Agenda-Konzept.md (Mechanik); Spielmechanik/OUTBOX/2026-11-04-Info-Delegation-Gedanken-UI-HTML-Prototype.md (Quelle dieser Aufgabe); HTML-Ink-Schnittstelle.md §5
---

## Ziel

Die Gedanken-Anzeige (Agenda-Leiste) des Charakters im HTML-Prototyp umsetzen. Die Mechanik ist konzeptionell festgelegt, die Werte sind noch offen. Die Anzeige ist rein technisch und liest nur aus Ink.

## Anforderungen

1. **Gedanken-Zeile:** kurze Zeile je Gedanke. Ist sie zu lang (vor allem mobil), am Ende abschneiden und mit „…" ergänzen.
2. **Farbcodierung je Agenda:**
   - Strategie: Hellblau
   - Akut: Hell-Violett
   - Beziehung: Hell-Grün
   - Routine: Grau
3. **Aufklappen beim Tippen:** Tippen auf eine Zeile öffnet darüber eine Info mit zwei klein geschriebenen Zeilen zum Ziel. Schließt sich nach 5 Sekunden oder bei anderer Aktivität (Tippen woanders, neue Entscheidung).
4. **Mehrere Gedanken:** maximal 3 gleichzeitig sichtbar. Ein neuer Gedanke schiebt den aktuellen nach unten und stellt ihn halbtransparent dar. Ein vierter Gedanke lässt den ältesten verschwinden. Die Leiste ist scrollbar (wischen/scrollen).
5. **Fälligkeits-Strich:** schmaler Strich am unteren Rand jeder Zeile, zeigt Fortschritt (Verkürzung). Ob Beats oder Zeit, ist noch offen (Konzept O-1).
6. **Keine Overlays:** kein schwebendes Fenster über dem Szenenbild. Die aufgeklappte Info liegt im Fuß-Bereich, nicht als Modal. Gilt auch für Konsequenz-Meldungen.
7. **Mobil funktionsfähig.**

## Schnittstelle zu Ink

- Die Anzeige **liest nur**. Keine Story-Logik im HTML (`HTML-Ink-Schnittstelle.md` §5).
- Gedanken kommen aus Ink. Vorschlag für das Datenformat: Liste mit `agenda`, `text`, `detail`, `due`. Das Format wird mit Story-Development abgestimmt (Konzept O-6). Bis dahin mit einem Testdatensatz arbeiten, nicht das Format im HTML festlegen.
- Agenda-Gewichtung und Entstehung passieren in Ink, nicht im HTML.

## Abgrenzung

- Inhalt der Gedanken-Texte: Story-Development.
- Mechanik (Entstehung, Fälligkeit-Folgen, Gewichtung): Spielmechanik.
- Anzeige: diese Aufgabe.

## Ergebnis (Definition of Done)

- [ ] Gedanken-Leiste im Fuß, mobil, mit Abschneiden und „…"
- [ ] Farbcodierung der vier Agenden
- [ ] Aufklappen mit zwei Zeilen, Auto-Schließen nach 5 Sekunden oder bei anderer Aktivität
- [ ] Maximal 3 Gedanken, neuer schiebt aktuellen nach unten (halbtransparent), ältester verschwindet, scrollbar
- [ ] Fälligkeits-Strich am unteren Rand
- [ ] Keine Overlays, nur Lesen aus Ink
- [ ] Testdatensatz für die Anzeige, Format als Vorschlag dokumentiert
- [ ] Ergebnis in der OUTBOX, Status `erledigt`
