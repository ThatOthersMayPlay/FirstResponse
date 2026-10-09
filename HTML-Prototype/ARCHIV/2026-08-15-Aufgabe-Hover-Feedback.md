---
Titel: Hover-Feedback für Hotspots
Typ: Aufgabe
Status: abgeschlossen
Abgeschlossen: 2026-10-09
Priorität: mittel
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-29
Erledigt: 2026-10-08
Abhängigkeiten: Hotspot-System
---

## Ziel
Klares visuelles Feedback beim Hovern über interaktive Hotspots (entspricht Unity-Hover-Effekt: leuchtender Rahmen).

## Umfang
- CSS-`:hover`-Effekt: leuchtender/blinkender Outline-Rahmen auf Optionen/Buttons
- Cursor-Feedback (Pointer) für klickbare Flächen
- Einheitliches Hover-Verhalten für alle Optionen (Basis-Level, ohne Geometrie)
- Fokus-Zustand für Tastatur-Bedienung (Accessibility, optional)

## Ergebnis (Definition of Done)
- [x] Hover über Option zeigt leuchtenden Rahmen
- [x] Pointer-Cursor signalisiert Klickbarkeit
- [x] Effekt funktioniert konsistent für alle Optionen
- [x] Kein störender Effekt auf nicht-interaktiven Flächen

## Koordinator-Hinweis (2026-08-17)
- **Startbar:** Diese Aufgabe ist **storyunabhängig** – kann parallel zur Mechanik-/Story-Klärung laufen.
- Basis: `index.html` (Canvas-Basistemplate, abgeschlossen) ist vorhanden.
---

## Ergebnis (2026-10-08)

**Datei:** `Assets/HTML-Prototype/index.html` (Stylesheet im `<head>`; es gibt keine
externe .css-Datei im Prototyp).

### Umfang

**1. Einheitlicher Hover-/Fokus-Block fuer ALLE interaktiven Flaechen**
Ein gemeinsamer Regelblock gilt fuer `button`, die Klasse `.interactive`
(zukuenftige Buttons/Geometrie-Hotspots) und `#choice-panel .choice`:

| Zustand | Wirkung |
|---|---|
| `:hover` | `border-color` = Akzent, **leuchtender Rahmen** (`box-shadow: 0 0 0 1px` + `0 0 14px` Glow, 55 % Deckkraft), hellerer Hintergrund |
| `:active` | gedrueckter Zustand (inset-Ring + abgedunkelter Hintergrund) |
| `:focus-visible` | `outline: 2px solid` Akzent, `outline-offset: 2px` |
| normal | `cursor: pointer`, `transition: border-color .1s, box-shadow .1s, background .1s` |

Dadurch ist die Wirkung fuer **alle Optionen identisch** (DoD 3) – unabhaengig
davon, ob die Option aus `story.currentChoices` oder aus `options.json` stammt,
da beide dieselbe `.choice`-Klasse erhalten (`js/main.js`, `renderChoices()`).

**2. Pointer-Cursor**
`cursor: pointer` fuer `button`, `.interactive` und `.choice` (DoD 2).
Zusaetzlich `button:focus:not(:focus-visible)` unterdrueckt das Standard-Outline
bei Mausklick, damit nur die Tastaturnavigation leuchtet.

**3. Kein Effekt auf nicht-interaktiven Flaechen (DoD 4)**
Explizite Gegenregel fuer `header`, `#scene-stage`, `#scene-image`,
`#choice-panel`, `#dialog-panel`, `#debug-panel`:
`cursor: default`, `outline: none`, `:hover { box-shadow: none }`.

**4. Accessibility**
- `:focus-visible`-Ring fuer Tastaturbedienung (Tab/Shift+Tab erreicht jede Option,
  da es native `<button type="button">`-Elemente sind).
- `@media (prefers-reduced-motion: reduce)` schaltet alle Uebergaenge ab.
- Hinweis: Es wurde bewusst **kein Dauer-Blinken** eingebaut, obwohl der Umfang
  „leuchtender/blinkender" zulaesst – DoD verlangt „leuchtenden Rahmen", und
  Dauer-Blinken gilt als stoerend. Die Glow-Variante erfuellt das.

**5. Basis-Level, ohne Geometrie (wie im Aufgabenumfang)**
Geometrie-Hotspots (`spot`) werden weiterhin nicht gerendert – es gilt der
bestehende WARN-Hinweis in `loadSceneOptions()`. Sollten sie ergaenzt werden,
tragen sie einfach die Klasse `.interactive` und erhalten dasselbe Verhalten.

### Definition of Done

| DoD | Status | Nachweis |
|---|---|---|
| Hover ueber Option zeigt leuchtenden Rahmen | erfuellt | CDP: `box-shadow` wechselt von `none` auf `rgb(79,209,197) 0 0 0 1px, rgba(79,209,197,.55) 0 0 14px 0` |
| Pointer-Cursor signalisiert Klickbarkeit | erfuellt | CDP: `cursor = pointer` (normal und unter Hover) |
| Effekt konsistent fuer alle Optionen | erfuellt | einheitlicher Regelnblock + identische `.choice`-Klasse; 2 gerenderte Optionen geprueft |
| Kein stoerender Effekt auf nicht-interaktiven Flaechen | erfuellt | CDP: forciertes `:hover` **und** `:focus-visible` auf `#scene-stage`/`#dialog-panel` ergeben `box-shadow: none`, `outline: none`, `cursor: default` |
| Fokus-Zustand fuer Tastaturbedienung (optional) | erfuellt | CDP: `:focus-visible` → `outline-style: solid` |

### Verifikation

- `node js/verify.js` → **19/19 PASS, Exit 0** (Regression, unveraendert)
- Headless-Browser (Edge/CDP, `CSS.forcePseudoState` erzwingt echte
  Pseudoklassen) → **13/13 PASS, Exit 0**, 0 JS-Konsolenfehler.
  Pruefungen: Hover-Glow, Akzentfarbe, Cursor, kein Glow ohne Hover,
  kein Effekt auf Szenenflaeche/Dialogfeld (Hover + Fokus),
  sichtbarer Focus-Ring, keine Konsolenfehler.

### Hinweise fuer den Koordinator
- Keine Story- und keine Audio-Abhaengigkeit betroffen (Koordinator-Hinweis
  2026-08-17 „storyunabhaengig" bestaetigt).
- `.interactive` ist die kuenftige Anschlussstelle fuer Geometrie-Hotspots und
  weitere Buttons (z. B. Audio-Toggle) – ohne zusaetzliche CSS-Arbeit.
- Siehe zusaetzlich OUTBOX `2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md`
  (offene Punkte R1–R8).
