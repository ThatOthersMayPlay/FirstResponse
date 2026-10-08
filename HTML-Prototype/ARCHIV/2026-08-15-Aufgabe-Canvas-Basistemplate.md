---
Titel: Point&Click-Canvas Basistemplate (index.html)
Typ: Aufgabe
Status: abgeschlossen
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-22
Abhängigkeiten: Setup-Grundgeruest
---

## Ziel
`index.html` als spielbares Basistemplate mit Spielfläche, Dialog-Textbereich und Choice-Bereich.

## Umfang
- Szenen-Fläche: `<div>` mit Hintergrundbild (Skalierung 16:9, responsive)
- Dialog-Textbereich: zeigt aktuellen Ink-Text (Sprecher + Zeile)
- Choice-Bereich: Container für Ink-Choices (Buttons)
- Grundlegendes CSS im Stil des Projekts (dunkel, atmosphärisch, mobile-fähig)
- Platzhalter-Bereich für Debug-Log-Ausgabe (sichtbar während Entwicklung)

## Ergebnis (Definition of Done)
- [x] `index.html` lädt im Browser ohne Fehler
- [x] Szenen-Fläche, Dialog-Bereich und Choice-Bereich sind sichtbar getrennt
- [x] Layout funktioniert auf Desktop und Mobile
- [x] Debug-Bereich zeigt Ausgaben an

## Ergebnis (Agent)
**Erledigt am:** 2026-08-17

### Angelegt (in `Assets/HTML-Prototype/`)
- `index.html` – Basistemplate mit 4 klar getrennten Bereichen:
  - Szenen-Fläche (`#scene-stage`, 16:9, responsive, Hintergrundbild mit CSS-Placeholder-Fallback)
  - Dialog-Bereich (`#dialog-panel`: Sprecher + Text)
  - Choice-Bereich (`#choice-panel`: Buttons, mehrere parallel)
  - Debug-Bereich (`#debug-panel`: sichtbar, monospace)
  - Dunkles, atmosphärisches CSS, mobile-fähig (Media Queries), Hover-/Fokus-Feedback
- `js/main.js` – Grundlogik des Templates:
  - Lädt Story über `fetch(CONFIG.story.path)` (echte `ReginaStefania.ink`), Compile via inkjs
  - `Continue()` → Dialog-Rendering (Sprecher aus `Name:`-Prefix), `story.currentChoices` → Buttons
  - Klick → `ChooseChoiceIndex(i)` → nächster Schritt
  - Szenen-Erkennung über Ink-Pfad (Knoten), harter Wechsel, Fallback auf Start-Szene bei leerem Pfad
  - Debug-Log mit Präfixen `[Story-State]`, `[Choice]`, `[Scene]` (console + Debug-Bereich) – Parität zu Sprint-1-Debug-System
  - Fallback-Teststory bei fetch-Fehler (file://-Modus), klar als WARN geloggt

### Verifikation (2026-08-17, automatisiert via Headless-Browser)
- **Laden:** Headless Edge (CDP) auf `http://localhost:8099/HTML-Prototype/index.html` – kein Fehler, Exit 0.
- **Initial:** Szene `intro` erkannt, Sprecher `Regina`, Dialogtext + 2 Choices (`Gefährderin`/`Beruhigen`) gerendert, vollständiges Debug-Log.
- **Interaktion:** Klick auf Choice 0 → Story-Pfad `regina_warnt_polizei` korrekt, Dialog `(funk) "Achtung, Person könnte gewaltbereit sein."`, Choices leer (Story-Ende), Debug-Log aktualisiert.
- **Encoding:** Umlaute („Gefährderin") werden korrekt UTF-8 ausgegeben.
- Story-Logik (Variablen, beide Pfade, Save/Load) bereits durch `js/verify.js` (11/11) abgedeckt.

### Hinweise / Entscheidungen
- **Scene-Erkennung:** `story.state.currentPathString` ist an Choice-Punkten leer → Fallback auf letzte/Start-Szene. Verfeinerung (Knoten→Szene-Mapping mit Bildern) erfolgt in Aufgabe „Szenenwechsel".
- **Story-Verhalten:** Testversion nutzt `+ Gefährderin -> ...` (ohne `[Label]`), daher wird der Choice-Text bei Auswahl mit ausgegeben – erwartetes Ink-Verhalten, kein Template-Bug.
- **Abhängigkeit:** Echte Szenen-Bilder fehlen (CSS-Placeholder aktiv); kommen mit Aufgabe „Beispielszene Szene1".

### Status
- `erledigt` – Datei in OUTBOX verschoben, zur Übernahme durch den Koordinator bereit.