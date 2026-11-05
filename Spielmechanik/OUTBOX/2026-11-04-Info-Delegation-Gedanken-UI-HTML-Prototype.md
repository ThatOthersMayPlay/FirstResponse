---
Titel: DELEGATION – Anzeige des Gedanken-/Agenda-Systems (muss an HTML-Prototyp weitergegeben werden)
Typ: Info
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Spielmechanik-Agent
Erstellt: 2026-11-04
Fälligkeit: -
Abhängigkeiten: 2026-11-04-Info-Gedanken-Agenda-Konzept.md (OUTBOX)
---

# DELEGATION – Anzeige der Gedanken (Agenda-Leiste)

**Hinweis an den Koordinator:** Dieser Inhalt ist rein technisch und **muss an den HTML-Prototyp-Agenten delegiert werden** (Ablage in `HTML-Prototype/INBOX/`). Die Spielmechanik legt ihn hier nur ab, damit er nicht verloren geht.

---

## Ziel

Im Fuß des Bildschirms zeigt eine **Agenda-Leiste** die aktuellen Gedanken des Charakters. Die Anzeige muss auf mobilen Geräten funktionieren und ein einheitliches Interface für alle Charaktere bieten, das sich durch Farbe und Gewichtung unterscheidet.

## Anforderungen

### 1. Gedanken-Zeile (Kurzform)
- Jeder Gedanke ist eine **kurze Zeile** (wenige Worte, z. B. „Beruhige die Kinder", „Halte den Kontakt", „Folge dem Fahrplan").
- Ist die Zeile zu lang für das Display (vor allem mobil), wird sie **am Ende abgeschnitten** und mit „…" ergänzt.
- **Farbe** je Agenda:
  - Strategie: **Hellblau**
  - Akut: **Hell-Violett**
  - Beziehung: **Hell-Grün**
  - Routine: **Grau**

### 2. Aufklappen beim Tippen
- Tippen auf eine Zeile öffnet **darüber** eine aufgeklappte Info mit **zwei klein geschriebenen Zeilen**, die das Ziel genauer erläutern.
- Die Info **schließt sich nach 5 Sekunden** oder **bei einer anderen Aktivität** (Tippen woanders, neue Entscheidung).

### 3. Mehrere Gedanken
- **Maximal 3 Gedanken** gleichzeitig sichtbar.
- Kommt ein **neuer Gedanke** hinzu, wird der **aktuelle nach unten verschoben** und **halbtransparent** dargestellt (bleibt sichtbar).
- Kommt ein **vierter Gedanke**, verschwindet der **älteste**.
- Die Gedanken sind **scrollbar** (durch die Leiste wischen/scrollen).

### 4. Fälligkeits-Strich
- Ein **schmaler Strich am unteren Rand** jeder Gedanken-Zeile zeigt die verbleibende Fälligkeit an.
- Der Strich muss **Fortschritt** anzeigen (Verkürzung), noch nicht festgelegt, ob in Beats oder Zeit (siehe Konzept, O-1).

### 5. Keine Overlays
- Kein schwebendes Fenster über dem Szenenbild. Die aufgeklappte Info liegt im Fuß-Bereich, nicht als Modal.
- Gilt auch für Konsequenz-Meldungen (siehe Konzept, Abschnitt 8).

## Schnittstelle zu Ink

- Die Anzeige **liest nur**. Keine Story-Logik im HTML (`HTML-Ink-Schnittstelle.md`, §5).
- Gedanken-Daten kommen aus Ink (Vorschlag: eine Liste von Gedanken mit `agenda`, `text`, `detail`, `due`). Das Format muss mit Story-Development abgestimmt werden (O-6 im Konzept).
- Die Agenda-Gewichtung und Entstehung passieren **in Ink**, nicht im HTML.

## Abgrenzung

- Inhalt der Gedanken-Texte: **Story-Development**.
- Mechanik (Entstehung, Fälligkeit-Folgen, Agenda-Gewichtung): **Spielmechanik** (Konzept).
- Anzeige (diese Delegation): **HTML-Prototyp**.

## Ergebnis

- [ ] Gedanken-Leiste im Fuß umgesetzt (mobil, mit Abschneiden und „…")
- [ ] Farbcodierung der 4 Agenden
- [ ] Aufklappen mit zwei Zeilen, Auto-Schließen nach 5 Sekunden oder bei anderer Aktivität
- [ ] Maximal 3 Gedanken, neuer schiebt aktuellen nach unten (halbtransparent), ältester verschwindet, scrollbar
- [ ] Fälligkeits-Strich am unteren Rand
- [ ] Keine Overlays, nur Lesen aus Ink

*Verfasst: 2026-11-04 · Spielmechanik-Agent*
