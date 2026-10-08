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
- Szenen-Bilder (Platzhalter, PNG) für Intro / Hauptteil / Outro erstellen oder beschaffen (Prompts kommen vom Story-Development-Agenten, siehe Koordinator-Antwort)
- `options.json` für die Szenenteile anlegen (mehrere Optionen parallel, passend zur Ink-Story – **Grundlage: `unity/Assets/Story/Test-Dialog.ink` als freigegebenes Scaffolding**, Wechsel auf die echte MVP-Story, sobald der Story-Development-Agent sie liefert)
- Ink-Knoten auf Szenenteile mappen
- Entscheidungs-Optionen auf die Ink-Choices verdrahten (die Ink-Choices der freigegebenen Grundlage, z. B. „Polizei warnen" / „Stefania beruhigen" / „Nachfragen")
- Audio: Hintergrundmusik + Klick-Sound für die Szene (Aufgabe `Audio-Musik-Klicksound` ist seit 2026-10-08 wieder `offen`)
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
   → **beantwortet 2026-10-08**, siehe Koordinator-Antwort unten.
2. **Wer liefert die SD-Szenen-Prompts?** → **beantwortet 2026-10-08**: der
   Story-Development-Agent, Aufgabe liegt in dessen INBOX.
3. **Reihenfolge Audio:** → **beantwortet 2026-10-08**: Audio laeuft frei
   parallel, ist nicht mehr blockiert.
4. Aufgabentext angepasst → **erledigt 2026-10-08** (siehe „Umfang" oben).

### Koordinator-Antwort (2026-10-08)

**B1 – entblockiert (Arbeitsfreigabe):**
- `unity/Assets/Story/Test-Dialog.ink` wird **voruebergehend als Scaffolding
  freigegeben** – der Prototyp arbeitet bis auf Weiteres darauf.
- `ReginaStefania.ink` bleibt ausdruecklich ** Nicht-MVP** und wird nicht als
  Grundlage verwendet.
- Aufgabentext oben entsprechend aktualisiert (Story-Verweis + Optionen).
- **Zugleich angestoessen:** Der Story-Development-Agent liefert die echte
  MVP-Szene-1-Ink-Datei (Aufgabe
  `Story-Development/INBOX/2026-10-08-Aufgabe-MVP-Szene1-Ink-Und-SD-Prompts.md`).
  Bei Lieferung ist der Verweis in dieser Aufgabe dort gegen die echte Story
  auszutauschen.

**B2 – bleibt offen (einzige verbleibende Blockade):**
- SD-Szenen-Prompts „Unfall-Schock & Fuehrung" kommen laut
  `Info-StableDiffusion-Bilder.md` verbindlich vom Story-Development-Agenten,
  nicht improvisieren.
- Ausloeser ist die neue Story-Aufgabe; bis zur Lieferung bleibt diese Aufgabe
  `blockiert`. Szenen-PNGs duerfen vorher nur als Platzhalter stehen.

**B3 – entblockiert:**
- `Audio-Musik-Klicksound` ist seit 2026-10-08 wieder `offen`
  (ffmpeg 9.0.2 bereitgestellt). Audio-DoD dieser Aufgabe ist damit erfuellbar.

### Empfehlung
B2 ist die letzte externe Abhaengigkeit. Bis zur Lieferung der Prompts kann an
`options.json`-Verdrahtung, Ink-Mapping und Durchspiel-Test gegen
`Test-Dialog.ink` gearbeitet werden.

### Parallel ohne Blockade machbar
`Hover-Feedback` (abgeschlossen) und `Audio-Musik-Klicksound` (seit 2026-10-08
wieder `offen`) – beide betreffen nicht diese Blockade.
