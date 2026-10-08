---
Titel: Beispielszene Szene1-Regina als HTML-Prototyp
Typ: Aufgabe
Status: blockiert
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-09-12
Blockiert seit: 2026-10-08
Abhängigkeiten: Szenenwechsel; Hotspot-System; Ink-Anbindung
---

## Ziel
Die erste MVP-Szene „Unfall-Schock & Führung" (Regina) als spielbarer HTML-Point&Click-Prototyp.

## Umfang
- Szenen-Bilder (Platzhalter, PNG) für Intro / Hauptteil / Outro erstellen oder beschaffen
- `options.json` für die Szenenteile anlegen (mehrere Optionen parallel, passend zur Ink-Story `ReginaStefania.ink`)
- Ink-Knoten auf Szenenteile mappen
- Entscheidungs-Optionen auf die Ink-Choices verdrahten (z. B. „Gefährderin" / „Beruhigen")
- Audio: Hintergrundmusik + Klick-Sound für die Szene
- Manueller Durchspiel-Test inkl. Konsistenz-Check gegen Unity-Story-Pfade

## Ergebnis (Definition of Done)
- [ ] Szene 1 ist komplett im Browser spielbar
- [ ] Optionen führen zu den korrekten Ink-Verzweigungen
- [ ] Story-Variablen reagieren wie in Unity (stefania_trust etc.)
- [ ] Hintergrundmusik und Klick-Sound funktionieren in der Szene
- [ ] Durchspielen ohne Absturz, Debug-Log vollständig
- [ ] Protokoll des Konsistenz-Tests gegen Unity liegt bei
---

## BLOCKIERT – Rueckfrage an den Koordinator (2026-10-08)

**Status: `blockiert`** (wartet auf Input/Zusatzinfo des Koordinators, siehe
Agenten-Workflow.md 5.3). Die Datei bleibt bewusst in der INBOX.

### Warum blockiert
Die Aufgabe stuetzt sich auf einen veralteten Stand und kann so nicht
fertiggestellt werden:

**B1 – Story-Grundlage widerspricht der MVP-Klaerung**
- Umfang verlangt `options.json` passend zu **`ReginaStefania.ink`** und die
  Optionen „Gefaehrderin" / „Beruhigen".
- Gleichzeitig wurde 2026-10-06 festgelegt (OUTBOX `Hotspot-System`,
  Abschnitt KENNZEICHNUNG): **`ReginaStefania.ink` ist nur eine Beispieldatei
  und gehoert NICHT zum MVP.**
- Zusaetzlich ist diese Datei technisch nicht spielbar (toter Code:
  `+ Choice -> divert` laesst die `~`-Zeilen nie ausfuehren, `stefania_trust`
  bleibt 0, ohne Ink-Warnung).
- Der Prototyp laeuft inzwischen auf **`Assets/Story/Test-Dialog.ink`**
  (reines Integrations-Testmaterial, ebenfalls nicht MVP-Inhalt).

**B2 – Szenen-Prompts fehlen**
- `Info-StableDiffusion-Bilder.md`: Bilder werden ueber die lokale SD-API erzeugt,
  **Prompts kommen aus dem Szenen-Konzept des Story-Development-Agenten**,
  ausdruecklich „nicht improvisieren".
- Diese Konzepte liegen dem HTML-Prototyp-Agenten nicht vor.
- SD-API ist erreichbar (geprueft 2026-10-08, HTTP 200 auf localhost:9000).

**B3 – Audio-Assets fehlen**
- DoD verlangt Hintergrundmusik + Klick-Sound; `assets/audio/` ist leer.
- Das gehoert zur separaten Aufgabe `Audio-Musik-Klicksound` (noch `offen`).
- Ueberschneidung: Audio-DoD hier, Audio-Umfang dort.

### Entscheidungsbedarf / Rueckfragen
1. **Welche Ink-Datei ist die MVP-Grundlage fuer Szene 1?**
   Bitte durch die Story-Seite bereitstellen (echte Story), oder bestaetigen,
   dass vorerst gegen `Test-Dialog.ink` als Scaffolding gearbeitet wird.
2. **Wer liefert die SD-Szenen-Prompts?** Benoetigt wird das Szenen-Konzept
   „Unfall-Schock & Fuehrung" vom Story-Development-Agenten.
3. **Reihenfolge Audio:** Soll `Audio-Musik-Klicksound` zuerst abgeschlossen
   werden, damit hier die Audio-DoD erfuellbar ist?
4. Ggf. Anpassung des Aufgabentextes (Optionen/Story-Verweis), da er auf der
   nicht-MVP-Datei basiert.

### Empfehlung
Zuerst B1 klaeren (Story-Basis). Danach ist die Aufgabe ohne weitere externe
Abhaengigkeiten bearbeitbar – Web-Prototyp, `options.json`-Verdrahtung,
Ink-Mapping und Durchspiel-Test stehen bereits bereit.

### Parallel ohne Blockade machbar
`Hover-Feedback` (Abhaengigkeit Hotspot-System erfuellt) und
`Audio-Musik-Klicksound` sind frei und betreffen nicht diese Blockade.
