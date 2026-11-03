---
Titel: Rollen-Reframing Story-Development – Eckdaten & Orientierungspunkte statt Ausarbeitung (Closure-oriented Story)
Typ: Entscheidung
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Story-Development-Agent
Erstellt: 2026-11-03
Fälligkeit: vor Wiederaufnahme der Szene-1-Arbeit
Abhängigkeiten: BRIEFING.md; ProjectManagement/Agenten-Workflow.md; INBOX/2026-08-15-Aufgabe-Szene1-Ziele-Rahmenbedingungen.md; Notizen-Story-Rahmen-Schauplaetze-2026-08-17.md; Spielmechanik/INBOX/2026-08-17-Aufgabe-CoreGameLoop-AhaEffekt.md; ProjectManagement/PlayerExperienceLog.md
---

# Rollen-Reframing: Story-Development liefert Eckdaten und Orientierungspunkte

## 1. Anlass

Im Interview zur Szene-1-Aufgabe wurden Regina-Auftakt-Modelle als **A oder B** formuliert. Das war eine Fehlformulierung: Die Modelle schließen sich nicht aus. Sie sind **Dialogoptionen** innerhalb derselben Szene und können in einer Szene nebeneinander stehen.

Daraus folgt eine Präzisierung der Rolle von Story-Development. Der Agent soll **keine einzelnen Ausprägungen festlegen**, sondern den **Rahmen**, in dem sich die Story entfalten kann.

## 2. Rollenpräzisierung

| Story-Development legt fest | Story-Development legt **nicht** fest |
|---|---|
| **Eckdaten / Voraussetzungen:** Orte, Beziehungen, Ereignisse, Ausgangslagen | Lineare Handlungsabfolge |
| **Handlungsstränge** (welche Stränge existieren) | Konkrete Dialogtexte und Ink-Ausarbeitung |
| **Orientierungspunkte / Skripte**, die einen Strang **öffnen** oder **schließen** | Welche Option der Spieler wählt |
| Welche Auflösungen eines Strangs **möglich** sind (als Menge, nicht als Pfad) | Welche Auflösung **tatsächlich** eintritt (entsteht im Spiel) |

Die **konkrete Ausarbeitung** (Beats, Dialoge, Ink-Syntax in `unity/Assets/Story/*.ink`, Dialogoptionen als Varianten) übernimmt der Agent **„Scene-Development"**.

## 3. Story-Agenda: Closure-oriented Play

Nach Brian Upton (*The Aesthetics of Play*) liegt der Reiz einer Story im **Schließen offener Fragen** (closure-oriented play): Der Spieler will Stränge abgeschlossen sehen und trifft dafür Entscheidungen.

Daraus folgt für die Story-Arbeit:

- Ein **Orientierungspunkt** ist ein Skript-Baustein mit **Typ** `öffnet`, `schließt` oder `öffnet + schließt`.
- Er beschreibt **Voraussetzungen** (Ort, Beziehung, Ereignis, Variablenstand), die **Wirkung** auf Stränge und die **Menge möglicher Auflösungen**.
- Er legt **keinen Pfad** fest. Die Reihenfolge entsteht aus Spielerentscheidungen und der Ausarbeitung durch Scene-Development.

## 4. Eckdaten (Voraussetzungen, aus Notizen 2026-08-17)

**Orte**
- Schwarzwald; Tunnel mündet direkt auf eine hohe Brücke, Brücke einsturzgefährdet
- Umleitung in ein gesperrtes Gebiet (Beschilderung temporär falsch) → Charaktere vom Rest der Welt abgeschnitten
- Plattform rechts nach dem Tunnelausgang (Stefania, Panoramablick)
- Temporäre Baustellen-Notrufsäule (GSM) als Kontaktquelle
- Rettungsschacht (Handyempfang reicht bis dorthin nicht)

**Beziehungen**
- Regina ↔ Stefania: einzige telefonische Verbindung zu den Abgeschnittenen
- Milon ↔ Stefania: Konflikt auf dem Rastplatz vor dem Unfall (Schneiden, Hupen, Mittelfinger, Milon fährt nach)
- Lukas ↔ Kinder (inkl. Teenager-Sohn Jonas mit Drohne): gemeinsame Fahrt
- Kilian ↔ Viktor: Anhalter-Situation, eingeschlossen im Tunnel
- Norman ↔ Bauprojekt: Verantwortung für die Streckensperrung

**Ereignisse (vor dem Spiel gesetzt)**
- Tanklastwagen (Milon) verursacht Unfall am Tunnelende, Stützen werden zerstört, Tunnel stürzt ein
- Lukas kommt durch Ablenkung von der Strecke ab (Fokuswechsel-Szene wird von Spielmechanik ausgestaltet)

## 5. Handlungsstränge (Vorschlag)

1. **Kontakt** – Herstellen, Halten und Verlieren der Verbindung (Säule, Handy, Schacht)
2. **Glaubwürdigkeit** – Ist der Anruf echt? (Ort, den es nicht geben kann; Kriminalitäts-Verdacht)
3. **Stefania** – Flucht vs. Hilfe; Angst vor erneuter Haft wegen unterlassener Hilfeleistung
4. **Tunnel-Insassen** – Ist noch jemand im Tunnel?
5. **Lukas & Kinder** – Ablenkung, Abkommen von der Fahrbahn, Weg zu Fuß
6. **Milon** – Vorgeschichte, ungeöffneter Brief der Tochter, Verletzung, Crash-Verhinderung
7. **Norman** – verzögerte Ankunft, Ursache der Katastrophe, falsche Fährten
8. **Kilian & Viktor** – Eingeschlossen, Weg an die Oberfläche, Viktors professionelles Vorgehen
9. **Brücke** – Einsturzgefahr als übergreifender Zeitdruck

## 6. Erste Orientierungspunkte (Entwurf, nicht festgelegt)

| ID | Strang | Typ | Voraussetzung | Wirkung / mögliche Auflösungen (Menge) |
|---|---|---|---|---|
| OP-01 | Glaubwürdigkeit | öffnet | Säule meldet unmöglichen Ort | Regina muss den Anruf einordnen. Mögliche Auflösungen: als echt bestätigt, als Streich verworfen, offen |
| OP-02 | Kontakt | öffnet + schließt | Stefania ruft über Säule an | Verbindung steht, bricht ab oder wechselt auf andere Quelle (Handy/Schacht) |
| OP-03 | Stefania | öffnet | Stefania erlebt Brücke/Tunnel als Zeugin | Fluchtimpuls und Haftangst werden gesetzt. Auflösung: bleibt, geht, zwischen beidem |
| OP-04 | Tunnel-Insassen | öffnet | Tunnel stürzt ein | Frage „Jemand noch drin?" offen. Auflösungen: ja, unklar, nein (alle drei als Menge) |
| OP-05 | Lukas & Kinder | öffnet | Ablenkung durch Handy/Kinder | Abkommen von der Fahrbahn; Ausgang hängt von Fokuswechsel-Mechanik ab |
| OP-06 | Milon | öffnet | Milon im Lkw, Brief auf Beifahrersitz | Brief wird unterbrochen. Auflösungen: Crash verhindert oder nicht (Menge) |
| OP-07 | Norman | öffnet + schließt | Norman kommt verzögert an | Falsche Fährten werden gelegt, Ursache wird teilweise aufgedeckt. Schließung unbestimmt |
| OP-08 | Kilian & Viktor | öffnet | Eingeschlossen im Tunnel | Gemeinsamer Weg nach oben; Schließung über Viktors Vorgehen |
| OP-09 | Brücke | öffnet + schließt | Einsturzgefahr | Zeitdruck für alle Stränge; Schließung über Rettung oder Einsturz (Menge) |

**Offene Varianten, die nicht entschieden werden** (werden Scene-Development als Menge übergeben):
- Zeitliche Abfolge Stefania vor dem Unfall: leere Tankstelle vs. Tunnel-Durchfahrt
- Tunnel-Sequenz als Cutscene, die im Dunkeln endet (nur Idee)

## 7. Regina-Auftakt im neuen Rahmen

Die Modelle „kein Ernst" und „falsch verbunden" sind **Dialogoptionen eines gemeinsamen Auftakt-Skripts** (OP-01). Der Spieler kann beide Haltungen im Verlauf einnehmen. Das bleibt Aufgabe von Scene-Development.

> Hinweis zur Transparenz: Die Bezeichnungen und Inhalte der Modelle stammen aus der Interview-Formulierung. Im Repo sind sie nicht im Detail dokumentiert. Bitte bestätigen oder korrigieren.

## 8. Auswirkung auf die Spielmechanik-Abhängigkeit

Die Eckdaten und Orientierungspunkte sind **unabhängig** vom Aha-Effekt-Design. Die Mechanik bestimmt, **wie** eine Auflösung erlebbar wird. Sie bestimmt nicht, **welche** Stränge existieren. Die Blockade durch `Spielmechanik/INBOX/2026-08-17-Aufgabe-CoreGameLoop-AhaEffekt.md` betrifft daher nur die Ausarbeitung durch Scene-Development, nicht die Eckdaten.

## 9. Vorschlag zur Anpassung der Rollen (zur Freigabe)

1. **BRIEFING.md (Story-Development):** Ink-Ausarbeitung und Dialogbeats werden an Scene-Development übergeben. Story-Development liefert Eckdaten, Stränge und Orientierungspunkte. Pfade auf `unity/Assets/Story/` anpassen.
2. **Scene-Development:** neuer Bereich mit `INBOX/`, `OUTBOX/`, `ARCHIV/`, `BRIEFING.md` (gemäß Agenten-Workflow §9). Im Projekt ist dafür noch kein Ordner angelegt.
3. **Szenen-Konzept.md (12.02.2026):** veraltet. Wird nach Freigabe von Scene-Development auf Basis der Orientierungspunkte neu geschrieben.

## 10. Rückfragen an den Koordinator

1. Freigabe des Reframings (Abschnitt 2 und 3)?
2. Anlage des Bereichs `Scene-Development` (Ordner, BRIEFING, INBOX/OUTBOX/ARCHIV) und Freigabe der BRIEFING-Anpassung (Abschnitt 9)?
3. Bestätigung der Eckdaten (Abschnitt 4) und des Strang-Vorschlags (Abschnitt 5)?
4. Bestätigung oder Korrektur der ersten Orientierungspunkte OP-01 bis OP-09 (Abschnitt 6)?

## Ergebnis

- [x] Reframing dokumentiert (A/B als Dialogoptionen, nicht als Alternativen)
- [x] Rollenpräzisierung Story-Development vs. Scene-Development formuliert
- [x] Eckdaten, Handlungsstränge und erste Orientierungspunkte als Entwurf vorgelegt
- [ ] Freigabe durch Koordinator (siehe Rückfragen)
