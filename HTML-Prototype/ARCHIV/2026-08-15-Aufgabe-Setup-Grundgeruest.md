---
Titel: Setup Grundgerüst & inkjs lokal einbinden
Typ: Aufgabe
Status: abgeschlossen
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-22
Abhängigkeiten: HTML-Ink-Schnittstelle.md
---

## Ziel
Lauffähige Projektstruktur für den HTML-Point&Click-Prototyp in `Assets/HTML-Prototype/` mit lokal eingebundener Ink-Engine (inkjs).

## Umfang
- Ordnerstruktur anlegen: `scenes/`, `hotspots/`, `assets/audio/`, `js/`
- `inkjs.min.js` herunterladen und lokal in `js/` ablegen (keine CDN-Abhängigkeit, offline-fähig)
- Version der inkjs-Bibliothek dokumentieren (Datei `js/README.md` mit Quellenangabe)
- Basis-Konfigurationsdatei `config.js` (Pfade, Start-Szene, Start-Knoten)

## Ergebnis (Definition of Done)
- [x] `Assets/HTML-Prototype/` enthält die definierte Ordnerstruktur
- [x] `inkjs.min.js` liegt lokal vor und wird ohne Internet geladen
- [x] `config.js` definiert Start-Szene und Start-Knoten
- [x] Bibliotheks-Version und Quelle sind dokumentiert

## Ergebnis (Agent)
**Erledigt am:** 2026-08-17

### Angelegt (in `Assets/HTML-Prototype/`)
- `scenes/`, `hotspots/`, `assets/audio/`, `js/` (Ordnerstruktur gemäß Aufgabe)
- `js/ink-full.min.js` – **inkjs 2.4.0**, Full-Build inkl. Compiler (kompiliert `.ink` im Browser), 249 KB, lokal
- `js/README.md` – Version, Quelle (npm `inkjs@2.4.0` via jsdelivr), Lizenz (MIT), Update-Hinweis
- `config.js` – Pfade (`story/scenes/hotspots/audio`), Start-Szene `Szene1_Intro`, Start-Knoten `Szene1_Intro`

### Hinweise / Entscheidungen
- **Full-Build statt Runtime-only:** Da die Story als `.ink`-Text zur Laufzeit kompiliert wird, ist der Build mit Compiler (`ink-full.min.js`) nötig – `ink.js` (Runtime) wäre nur für JSON-Stories nutzbar.
- **Ablage-Standort:** Code liegt in `Assets/HTML-Prototype/` (laut Development-Workflow + Backlog Epic 18); `Assets/ProjectManagement/HTML-Prototype/` bleibt reiner INBOX/OUTBOX-Kanal.
- **Story-Pfad:** `config.js` verweist auf `../Story/ReginaStefania.ink` (Single Source of Truth). Datei existiert noch nicht → Abhängigkeit an Story-Development-Agent; wird in Aufgabe „Beispielszene Szene1" benötigt.
- **Offener Punkt für Deployment (Aufgabe GitHub-Pages):** Der relative Story-Pfad `../Story/...` muss nach dem Pages-Deployment auflösbar sein – Verifikation dort.

### Status
- `erledigt` – Datei in OUTBOX verschoben, zur Übernahme durch den Koordinator bereit.

### Stand heute (2026-08-17) – Story-Status
- **`Assets/Story/ReginaStefania.ink` ist eine TESTVERSION, keine Live-Version und auch nicht annähernd final.**
- Aktuelle Testversion: Knoten `intro`, `regina_warnt_polizei`, `regina_beruhigt_stefania`; Variablen `stefania_trust`, `player_perspective`; 2 Choices („Gefährderin"/„Beruhigen"). Ende via `-> DONE`.
- Kompiliert und läuft bereits mit inkjs 2.4.0 (verifiziert).
- `config.js` ist auf die Testversion ausgerichtet (`startKnot`/`startScene` = `intro`) und wird angepasst, sobald die echte Story vom Story-Development-Agent eintrifft.
- Für spätere Aufgaben (Ink-Anbindung, Beispielszene Szene1) gilt: Story-Daten sind noch nicht stabil, Tests müssen mit Testversion arbeiten.

### Verifikation (2026-08-17, automatisiert)
- Neu: `js/verify.js` – wiederverwendbares Smoke-Test-Skript (Ausführung: `node js/verify.js`).
- Ergebnis: **11/11 Checks bestanden** (Exit-Code 0):
  - inkjs Full-Build lädt (Compiler + Story)
  - `.ink`-Quelle wird kompiliert, `Continue()` liefert Dialogtext
  - Mehrere Choices parallel (Basis des Options-Systems)
  - Choice-Wahl verändert `stefania_trust` korrekt (beide Pfade)
  - State-Serialisierung/`state.LoadJson`-Restore funktioniert (Basis für localStorage-Persistenz)
  - `config.js` gültig (Start-Szene/Start-Knoten), Ordnerstruktur vollständig
- **Erkenntnis inkjs 2.4.0:** Der `Story`-Konstruktor akzeptiert nur Story-JSON (mit `inkVersion`), NICHT State-JSON. Save/Load erfolgt über `story.state.ToJson()` + `restored.state.LoadJson(saved)` (frische Story aus derselben Quelle). Wichtig für Aufgabe „Ink-Anbindung" und spätere Persistenz.