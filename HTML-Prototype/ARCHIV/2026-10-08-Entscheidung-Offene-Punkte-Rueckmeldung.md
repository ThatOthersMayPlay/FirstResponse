---
Titel: Rückmeldung HTML-Prototyp – offene Punkte, Rückfragen & Blockaden an den Koordinator
Typ: Entscheidung
Status: abgeschlossen
Abgeschlossen: 2026-10-09
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-10-08
Fälligkeit: 2026-10-15
Abhängigkeiten: Agenten-Workflow.md; HTML-Ink-Schnittstelle.md; Info-StableDiffusion-Bilder.md
---

## Zweck

Sammeldokument für den Koordinator beim Abholen der OUTBOX. Enthält **alle**
Rückfragen, Änderungen und Blockaden des HTML-Prototyp-Agenten an einer Stelle,
damit beim Übergabeprozess nichts verloren geht (Agenten-Workflow.md §7.1:
Kommunikation nur über INBOX/OUTBOX).

Begleitdateien in dieser OUTBOX: `Aufgabe-Hotspot-System`, `Aufgabe-Ink-Anbindung`,
`Aufgabe-Szenenwechsel`, `Aufgabe-Hover-Feedback` (je `erledigt`).
**Blockiert** liegt in der INBOX: `Aufgabe-Beispielszene-Szene1`.

---

## 1. Blockaden (2)

### B1 – `Beispielszene-Szene1` ist `blockiert`
Datei: `INBOX/2026-08-15-Aufgabe-Beispielszene-Szene1.md` (bleibt in der INBOX,
laut §5.3 mit Hinweis im Text). Drei Gründe:

| Kürzel | Blockade |
|---|---|
| B1a | Aufgabe verlangt `options.json` passend zu **`ReginaStefania.ink`** + Optionen „Gefährderin"/„Beruhigen" – aber diese Datei wurde 2026-10-06 als **reine Beispieldatei, nicht MVP** gekennzeichnet und ist zudem **nicht spielbar** (toter Code, `stefania_trust` bleibt 0, ohne Ink-Warnung). Der Prototyp läuft auf `Test-Dialog.ink`. |
| B1b | SD-Szenen-**Prompts** fehlen. `Info-StableDiffusion-Bilder.md` verlangt Prompts aus dem Szenen-Konzept des **Story-Development-Agenten** („nicht improvisieren"). Liegen nicht vor. SD-API selbst ist erreichbar (HTTP 200, geprüft 2026-10-08). |
| B1c | **Audio-Assets** fehlen (`assets/audio/` leer). DoD verlangt Musik + Klick-Sound; Umfang liegt in der separaten Aufgabe `Audio-Musik-Klicksound` (jetzt ebenfalls `blockiert`, s. B2). |

### B2 – `Audio-Musik-Klicksound` ist `blockiert`
Datei: `INBOX/2026-08-15-Aufgabe-Audio-Musik-Klicksound.md` (bleibt in der INBOX).

| Kürzel | Blockade |
|---|---|
| B2a | Umfang verlangt **MP3/OGG lokal, keine CDN**, aber es gibt keinen Encoder: `ffmpeg`, `lame`, `sox`, `avconv` fehlen. Browser kann in Edge/Chromium nur `audio/webm;codecs=opus` kodieren (geprüft 2026-10-08) – auch das erfüllt die Vorgabe nicht. |
| B2b | Koordinator-Entscheidung 2026-10-08: **„Encoder bereitstellen"** (kein Format-Kompromiss) und **„Erst auf Entscheidung warten"** – die Audio-Engine wird erst nach dem Encoder gebaut. **Offener Punkt R9.** |

---

## 2. Rückfragen / Entscheidungsbedarf (9)

| # | Frage | Empfehlung |
|---|---|---|
| R1 | **Welche Ink-Datei ist MVP-Grundlage für Szene 1?** `ReginaStefania.ink` ist Nicht-MVP und nicht spielbar; `Test-Dialog.ink` ist reines Testmaterial. | Echte Story von der Story-Seite anfordern. Bis dahin ggf. ausdrücklich gegen `Test-Dialog.ink` als Scaffolding freigeben. |
| R2 | **Wer liefert die SD-Szenen-Prompts** für „Unfall-Schock & Führung"? | Story-Development-Agent brieft; danach B1b entfällt. |
| R3 | **Reihenfolge Audio:** Beispielszene-DoD verlangt Audio, Umfang liegt in `Audio-Musik-Klicksound`. | `Audio-Musik-Klicksound` zuerst abarbeiten. |
| R4 | **Aufgabentext `Beispielszene-Szene1` aktualisieren** (Story-Verweis + Optionen basieren auf der Nicht-MVP-Datei). | Koordinator passt den Text an. |
| R5 | **`VAR scene` je Knoten als Szene-Konvention** in `HTML-Ink-Schnittstelle.md` aufnehmen. | Aufnehmen – ist jetzt verbindlich implementiert (Pfad-Auswertung funktioniert in inkjs nicht, s. Bug 2 in `Aufgabe-Hotspot-System`). |
| R6 | **Präfix-Parität HTML ↔ Unity?** HTML nutzt `[Story-State]`, `[Choice]`, `[Scene]` (laut Aufgabenvorgabe); Unity zusätzlich `[Decision]`, `[UI-Event]`. | Bestätigen, dass 3 Präfixe genügen, oder nachziehen (Aufwand gering). |
| R7 | **Szenen-PNGs** (`scenes/*.png`) existieren nicht, Ladeweg ist geprüft, Platzhalter greift. | Bestätigen, dass Erzeugung über die SD-Pipeline läuft (siehe R2) und erst danach zählt. |
| R8 | **`Info-StableDiffusion-Bilder.md` hat noch Status `offen`.** | Bitte übernehmen/archivieren (war eine Info-Übergabe). |
| R9 | **Audio-Encoder fehlt:** Umfang verlangt MP3/OGG lokal, aber `ffmpeg`/`lame`/`sox` sind nicht installiert; Browser kann nur `audio/webm;codecs=opus` kodieren (geprüft 2026-10-08). | Koordinator stellt einen MP3-/OGG-Encoder bereit (eigene Entscheidung 2026-10-08: „Encoder bereitstellen", kein Format-Kompromiss). Aufgabe `Audio-Musik-Klicksound` ist daraufhin **`blockiert`**; die Audio-Engine wird ausdrücklich erst danach gebaut (2. Entscheidung: „Erst auf Entscheidung warten"). |

---

## 3. Änderungen, die in die Projektdokumente gehören

Zur Übernahme in `LatestChanges.md`, `Backlog.md`, `HTML-Ink-Schnittstelle.md`:

1. **Kennzeichnung Story-Dateien:** `Assets/Story/ReginaStefania.ink` = reine
   Beispieldatei, **gehoert nicht zum MVP**. Vollständige Kennzeichnung in
   OUTBOX `Aufgabe-Hotspot-System`, Abschnitt **KENNZEICHNUNG**.
   *Auch die dortige alte Zeile „Teststory … ist für die Entwicklung nutzbar"
   wurde durchgestrichen und berichtigt.*
2. **Neue Datei `Assets/Story/Test-Dialog.ink`** – saubere Test-/Integrations-INK
   (5 Szenen, `[Label]`-Choices, `VAR scene` je Knoten). **Ebenfalls nicht MVP-Inhalt.**
   `config.js` → `story.path` zeigt jetzt dorthin (`startKnot`/`startScene` = `intro`).
3. **Szenen-Konvention:** jeder Ink-Knoten setzt `~ scene = "…"`,
   das HTML liest `story.variablesState["scene"]`.
   Grund: inkjs `currentPathString` ist an Choice-Punkten `null`.
4. **Dialog-Parser** (`js/main.js`): mehrere Speaker pro Ausgabe + Choice-Echo
   wird nicht mehr als Sprecherfehlertext dargestellt.
5. **Debug-Log im Unity-Format** (Parität Sprint-1/2):
   `[Story-State] <var>: <old> → <new>` sowie `[Story-State] Time: HH:mm:ss.fff`.
6. **`js/verify.js` jetzt 19 Checks** (inkjs, Kompilierung, Choices, Variablen,
   State-Restore, config, Ordner **+** Szenen-Variable, kein Echo, mehrere
   Speaker, Szenenwechsel, `trust == -1`). Ausführen: `node js/verify.js`.
7. **Neu im Prototyp:** `hotspots/` mit `options.json` je Szene +
   `hotspots/README.md` (Basis-Schema **und** optionales Geometrie-Schema
   `spot: x/y/width/height/type`, nicht MVP-verpflichtend).
8. **Fünf `options.json`** für `intro`, `nachfragen`, `polizei_warnt`,
   `stefania_beruhigt`, `einsatzstelle`.
9. **Hover-/Fokus-Feedback** in `index.html` als einheitlicher Regelblock für
   `button` / `.interactive` / `.choice`: leuchtender Rahmen (`box-shadow`),
   Pointer-Cursor, `:active`, `:focus-visible`-Ring, `prefers-reduced-motion`
   und explizit **kein** Effekt auf `#scene-stage`, `#dialog-panel`,
   `#debug-panel`, `#scene-image`, `header`, `#choice-panel`.
   `.interactive` ist die spätere Anschlussstelle für Geometrie-Hotspots.

---

## 4. Verifikationsstand (2026-10-08)

- `node js/verify.js` → **19/19 PASS, Exit 0**
- `node --check js/main.js` → OK
- Headless-Browser (Edge/CDP) je Aufgabe geprüft:
  - Options-System: 3 Choices mit Labels, Szenenwechsel über `options.json`
  - Ink-Anbindung: Story-State-Änderungen im Unity-Format, 0 Choices wenn Ink keine liefert
  - Szenenwechsel: harter Wechsel (`transitionDuration = 0s`), fehlende
    `options.json` → `[WARN] … HTTP 404 …`, `errorLines: []`, kein Absturz
  - Hover-Feedback: **13/13 PASS**, 0 JS-Konsolenfehler (CDP
    `CSS.forcePseudoState` erzwingt echte `:hover`/`:focus-visible`-Zustände)

---

## 5. Empfohlene nächste Schritte (Koordinator)

1. Diese OUTBOX übernehmen, betroffene Dateien auf `abgeschlossen` → `ARCHIV`.
2. R1–R4 im Interview klären – danach ist `Beispielszene-Szene1` entblockierbar.
3. R5/R6/R8 dokumentarisch abarbeiten.
4. **Aktuell keine freie Aufgabe mehr im Bereich:** `Hover-Feedback` ist
   abgeschlossen. `Beispielszene-Szene1` (B1) und `Audio-Musik-Klicksound`
   (B2) sind `blockiert`; `GitHub-Pages-Deployment` hängt an
   `Beispielszene-Szene1`. Der Agent setzt nach Klärung von **R1/R2** (Story)
   und **R9** (Encoder) sofort fort.

---

*Verfasst: 2026-10-08 · HTML-Prototyp-Agent · Rückmeldekanal laut Agenten-Workflow.md §3/§7*