---
Titel: Options-System mit mehreren Optionen (Hotspots optional)
Typ: Aufgabe
Status: abgeschlossen
Abgeschlossen: 2026-10-09
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-29
Erledigt: 2026-10-06
Abhängigkeiten: Canvas-Basistemplate; HTML-Ink-Schnittstelle.md
---

## KENNZEICHNUNG – Status der Ink-Dateien (bitte beachten)

**`Assets/Story/ReginaStefania.ink` ist ausschließlich eine BEISPIELDATEI.**

- Sie gehört **NICHT** zum fertigen Projekt und **NICHT** zum MVP.
- Sie ist ein Überbleibsel/Muster aus der frühen Story-Entwicklung und diente nur als
  spontanes Testmaterial, bevor echte Story-Inhalte vorlagen.
- Sie ist technisch **nicht spielbar** (toter Code, siehe Bug 1 unten) und wird vom
  Prototyp **nicht mehr geladen** (`config.js` zeigt auf `Test-Dialog.ink`).
- Sie darf **nicht** als MVP-Inhalt, Referenzstory oder Lieferbestandteil verstanden
  werden. Für eine Auslieferung des MVP ist sie **nicht vorgesehen**.

**Maßgeblich für den Prototyp:** `Assets/Story/Test-Dialog.ink`
– ebenso reines **Test-/Integrationsmaterial**, **nicht** finale Story des MVP.
Es ersetzt nur die Verwendung von `ReginaStefania.ink` im Prototyp.

Erst wenn die Story-Seite echte Inhalte liefert, gibt es eine verbindliche
Story-Datei für das MVP. Bis dahin gilt: **keine der vorhandenen .ink-Dateien
ist MVP-Inhalt.**

---

## Ziel
Für das Feeling der ersten Prototypen: **einfacher, choice-basierter Ansatz**, der pro Szene **mehrere Optionen parallel** anbietet. Geometrie-basierte Hotspots sind optional (später), zuerst genügen einfache Auswahl-Optionen.

## Umfang (Basis-Level)
- **Mehrere Optionen pro Szene/Step gleichzeitig anzeigen** (2–4 typisch, beliebig viele möglich)
- Optionen als Buttons/Choice-Karten im Choice-Bereich gerendert (aus `story.currentChoices` bzw. `options.json`)
- Jede Option = genau ein Ink-Choice (exakt zugeordnet)
- Einfacher Ansatz: KEINE Pixel-/Prozent-Geometrie, keine absoluten Positionen im Basis-Level
- Klick auf Option führt exakt den zugeordneten Story-Pfad aus

## Umfang (Erweiterung, optional/später)
- Geometrie-basierte Hotspots (`x/y/width/height`, Typ `image_text`/`outline`) als Option für einzelne Szenen
- Schemavalidierung mit Fehlermeldung im Debug-Bereich

## Ergebnis (Definition of Done)
- [x] Mehrere Optionen werden parallel angezeigt
- [x] Jede Option triggert den zugeordneten Ink-Choice
- [x] Basis-Level funktioniert ohne Geometrie/Positionierung
- [x] Erweiterung (Hotspots) ist dokumentiert, aber nicht MVP-verpflichtend

## Koordinator-Hinweis (2026-08-17)
- **Startbar:** Diese Aufgabe ist **storyunabhängig** – kann parallel zur Mechanik-/Story-Klärung laufen.
- Basis: `index.html` + `js/main.js` (Canvas-Basistemplate, abgeschlossen) sind vorhanden.
- ~~Teststory `ReginaStefania.ink` (Testversion) ist für die Entwicklung nutzbar.~~
  **Berichtigt 2026-10-06:** `ReginaStefania.ink` ist nur eine **Beispieldatei**
  und gehört nicht zum MVP (siehe KENNZEICHNUNG oben). Für den Prototyp wird
  `Test-Dialog.ink` verwendet – ebenfalls reines Testmaterial, kein MVP-Inhalt.

---

## Ergebnis (2026-10-06, HTML-Prototyp-Agent)

**Status: erledigt.** Basis-Level des Options-Systems umgesetzt und verifiziert.
Nebenbei wurden drei echte Integrations-Bugs gefunden und behoben (siehe unten).

### Umgesetzt

**Neu: `hotspots/` mit `options.json` pro Szene + `hotspots/README.md`**
- Pro Szene eine Datei `hotspots/<Szene>.json` (`scene`, `image`, `options[]`)
- Jede Option: `id`, `label` (Anzeige), `inkChoice` (Zuordnung zum Ink-Choice-Text)
- Basis-Schema **und** optionales Geometrie-Schema (`spot: x/y/width/height/type`)
  sind in `hotspots/README.md` dokumentiert; Erweiterung ausdrücklich nicht MVP-pflichtig
- Angelegt: `intro`, `nachfragen`, `polizei_warnt`, `stefania_beruhigt`, `einsatzstelle`

**`js/main.js`**
- `validateOptions()` prüft das Schema, meldet Fehler als `[FEHLER]` im Debug-Bereich,
  verwirft die Datei und fällt sauber auf `story.currentChoices` zurück
- `loadSceneOptions()` lädt die Datei beim Szenenwechsel; fehlt sie → `[WARN]` + Fallback
- `choiceLabel()` mappt `story.currentChoices[].text` → `options[].label`
- Szenen-Bild kommt bevorzugt aus `options.image`, sonst `scenes/<szene>.png`

**`config.js`**
- `hotspots.sceneOptionsFile: "<scene>.json"` statt mehrdeutigem `optionsFile`
- `story.path` → neue Test-INK `../Story/Test-Dialog.ink`

### Drei gefundene und behobene Integrations-Bugs

**1. Test-INK `ReginaStefania.ink` war nicht spielbar (toter Code)**
```
+ Gefährderin -> regina_warnt_polizei   ← divert auf der Choice-Zeile
    ~ stefania_trust -= 1                ← wurde NIE ausgeführt
```
`stefania_trust` blieb `0`, `player_perspective` `""` – bei **0 Warnungen und
0 Errors** von inkjs. Das alte `verify.js` prüfte nur Choice-Texte und sah das nicht.
→ Korrekt ist der Divert **nach** den Anweisungen im Choice-Body.

**2. Szenen-Erkennung war unbrauchbar**
`inkjs` liefert `state.currentPathString` an Choice-Punkten als **`null`** und nach
`-> DONE` ebenfalls; nach `ChooseChoiceIndex` zeigt er den **alten** Knoten
(`intro.0.c-0.0`). Damit war die aktuelle Szene nie zuverlässig lesbar – es griff
nur der Config-Fallback `startScene` (zufällig korrekt bei `intro`).
→ Gelöst über **`VAR scene`**, das jeder Knoten zu Beginn setzt; `currentScene()`
liest diesen Wert. Keine Story-Logik im HTML.

**3. Choice-Echo zerstörte den Speaker-Parsing**
Ink schreibt den gewählten Choice-Text in den Ausgabe-Stream. Der Parser nahm nur
**einen** Speaker pro Ausgabe, lieferte also `Gefährderin Regina` bzw. `Erzähler`
statt `Regina`.
→ Choice-Syntax `[Label]` unterdrückt den Echo, **und** `parseDialog()`/`renderDialog()`
unterstützen jetzt mehrere Speaker pro Ausgabe (jede Redezeile mit Label).

### Neue Test-INK: `Assets/Story/Test-Dialog.ink`
Da die Story-Entwicklung noch keine finalen .ink-Dateien liefert (Koordinator-Entscheid
2026-10-06: **eigene saubere Test-INK**), wurde eine neue Datei angelegt;
`ReginaStefania.ink` bleibt unangetastet, ist aber nur eine **Beispieldatei**
(siehe KENNZEICHNUNG oben) und gehört nicht zum MVP.
- Korrekte Ink-Struktur, `[Label]`-Choices, `VAR scene` je Knoten
- 5 Szenen (`intro`, `nachfragen`, `polizei_warnt`, `stefania_beruhigt`, `einsatzstelle`),
  1–3 Choices pro Szene → testet das Options-System mehrstufig
- Variablen `stefania_trust`, `player_perspective` wirken nun nachweislich

### Verifikation
- `node js/verify.js` → **19/19 PASS, Exit 0** (neu u. a.: Szenen-Variable an
  Choice-Punkt, kein Choice-Echo, mehrere Speaker, Szenenwechsel, `trust == -1`)
- Headless-Browser (Edge/CDP), 3 Schritte:
  - Boot: Szene `intro`, Speaker `Regina`, Text mit **beiden** Redezeilen,
    **3** Choices mit angereicherten Labels (`Gefährderin melden` …),
    `options.json` für `intro` geladen
  - Klick „Erst nachfragen" → Szene `nachfragen`, 2 Choices, eigene `options.json`
  - Klick „Gefährderin melden" → Szene `polizei_warnt`, 2 Choices, eigene `options.json`
- `node --check js/main.js` → OK

### Hinweise für den Koordinator
- **`ReginaStefania.ink` ist nur eine Beispieldatei und gehört NICHT zum MVP**
  (siehe KENNZEICHNUNG oben). Sie ist zudem technisch nicht spielbar (Bug 1) und
  wird vom Prototyp nicht geladen. **Keine Klärung/Referenz nötig** – sofern die
  Datei keinem anderen Zweck dient, kann sie als Beispiel markiert oder später
  entfernt werden. Sie darf nicht als MVP-Bestandteil verstanden werden.
- **Für das MVP gibt es aktuell noch keine verbindliche Story-Datei.**
  `Test-Dialog.ink` ist reines Integrations-Testmaterial.
- Szenen-Konvention ist nun: **`VAR scene` je Knoten** statt Pfad-Auswertung.
  Das gehört in `HTML-Ink-Schnittstelle.md` als verbindlich aufgenommen.
- `scenes/*.png` existieren weiterhin nicht (Platzhalter-Logik greift).
- Es fehlen noch die Aufgaben „Ink-Anbindung" und „Szenenwechsel" formal in der
  OUTBOX – deren Kern wurde hier mit erledigt (Ink-Rendering, Szenenwechsel hart).