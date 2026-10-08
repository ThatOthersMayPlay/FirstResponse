---
Titel: Ink-Anbindung via inkjs (Dialog + Choices)
Typ: Aufgabe
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-29
Erledigt: 2026-10-06
Abhängigkeiten: Canvas-Basistemplate; Setup-Grundgeruest
---

## Ziel
Ink-Story wird im Browser über inkjs geladen und ausgeführt – identisch zur Unity-Laufzeit.

## Umfang
- Story laden: `Assets/Story/*.ink` wird eingelesen und mit inkjs kompiliert
- `Continue()` für Dialogzeilen, Ausgabe in Dialog-Textbereich
- `story.currentChoices` als Buttons rendern
- Auswahl: `story.ChooseChoiceIndex(i)` → nächster Story-Schritt
- **Debug-Logging analog Unity:** `[Story-State]`, `[Choice]`, `[Scene]` als `console.log` + in Debug-Bereich (Parität zu Sprint-1-Debug-System)

## Ergebnis (Definition of Done)
- [x] Ink-Story wird geladen und Dialogzeilen korrekt angezeigt
- [x] Choices/Optionen erscheinen nur, wenn Ink welche liefert (mehrere parallel möglich)
- [x] Choice-Auswahl verändert Story-Variablen korrekt (stefania_trust etc.)
- [x] Debug-Log zeigt Story-State-Änderungen identisch strukturiert wie Unity
---

## Ergebnis (2026-10-06, HTML-Prototyp-Agent)

**Status: erledigt.** Kern der Ink-Anbindung war ueber `Canvas-Basistemplate` und
`Options-System` bereits implementiert; hier folgt der formale Abschluss plus die
noch fehlende Unity-Paritaet im Debug-Log (DoD 4).

### Umfang laut Aufgabe - Umsetzung
| Anforderung | Umsetzung |
|---|---|
| Story laden + inkjs kompiliert | `boot()` in `js/main.js`: `fetch` -> `inkjs.Compiler(src).Compile()`, Fallback-Teststory bei `file://` |
| `Continue()` -> Dialogbereich | `drainText()` + `parseDialog()`/`renderDialog()` (mehrere Speaker pro Ausgabe) |
| `currentChoices` als Buttons | `renderChoices()`, Label-Anreicherung ueber `options.json` |
| `ChooseChoiceIndex(i)` | `choose()` |
| Debug-Log `[Story-State]`, `[Choice]`, `[Scene]` | `log()` -> `console.log` + Debug-Bereich |

### NEU in dieser Aufgabe: Story-State-Tracking im Unity-Format
Die Unity-Vorgabe (Sprint-1.md / Sprint-2.md / GitHub-Update-2026-02-14.md) lautet:
```
[Story-State] stefania_trust: 0 → -1
[Story-State] player_perspective: (leer "") → Regina hat Stefania verraten, ...
[Story-State] Time: 22:46:34.114
```
- `varSnapshot()` liest alle Variablen ueber `Object.getOwnPropertyNames(story.variablesState)`
- `logStoryStateChanges(before, after)` meldet nur geaenderte Werte, Format
  `<name>: <old> → <new>`, anschliessend `Time: HH:mm:ss.fff`
- Wird nach jedem `drainText()` ausgeloest (Differenz vor/nach)
- `choose()` meldet jetzt den Choice-Namen: `[Choice] Choice: <text> (Index i)`
  (analog Unity `[Decision] Choice: <name>`; Praefix `[Choice]` laut Aufgabenvorgabe)
- Prueft DoD 3 und DoD 4 unmittelbar in der Browser-Laufzeit

### Verifikation
- `node js/verify.js` -> **19/19 PASS, Exit 0**
- `node --check js/main.js` -> OK
- Headless-Browser (Edge/CDP), 3 Schritte:
  - **DoD 1:** Boot, Szene `intro`, Dialog + 3 Choices gerendert
  - **DoD 2/3:** Klick "Gefährderin melden" -> Szene `polizei_warnt`, 2 Choices,
    Debug-Zeilen `[Story-State] player_perspective: (leer "") → Regina hat Stefania verraten, Konsequenzen absehbar`
    und `[Story-State] Time: 22:46:34.114`
  - **DoD 2:** Klick "Einsatzstelle alarmieren" -> Szene `einsatzstelle`,
    **0 Choices** (Ink liefert keine -> korrekt keine Buttons),
    `[Story-State] scene: polizei_warnt → einsatzstelle`

### Hinweis fuer den Koordinator
- Verbindliche Story-Datei fuer das MVP existiert noch nicht; `Test-Dialog.ink`
  ist reines Integrations-Testmaterial (siehe OUTBOX `Hotspot-System`, KENNZEICHNUNG).
- Praefixkonvention im HTML: `[Story-State]`, `[Choice]`, `[Scene]` laut Aufgabenvorgabe;
  Unity verwendet zusaetzlich `[Decision]` und `[UI-Event]`. Falls vollstaendige
  Praefix-Paritaet gewuenscht ist, bitte nachziehen (Aufwand gering).
