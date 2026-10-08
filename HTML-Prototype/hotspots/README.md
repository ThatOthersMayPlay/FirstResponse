# Options-Definitionen (Basis-Level)

Pro Szene liegt eine JSON-Datei in diesem Ordner: `hotspots/<Szene>.json`.

Der HTML-Prototyp lädt sie beim Szenenwechsel (Knoten = Szene) und reichert die
Choice-Anzeige damit an. **Die Ink-Story bleibt die einzige Story-Quelle** – die
Menge der Choice-Buttons kommt immer aus `story.currentChoices`. `options.json`
liefert nur Anzeige-Informationen (Label, Szenen-Bild) und dokumentiert die
Zuordnung jeder Option zu ihrem Ink-Choice.

---

## Schema (Basis-Level, MVP-verpflichtend)

```json
{
  "scene": "intro",
  "image": "scenes/intro.png",
  "options": [
    { "id": "gefaehrderin", "label": "Gefährderin melden", "inkChoice": "Gefährderin" },
    { "id": "beruhigen", "label": "Stefania beruhigen", "inkChoice": "Beruhigen" }
  ]
}
```

| Feld | Typ | Pflicht | Bedeutung |
|---|---|---|---|
| `scene` | String | ja | Name der Szene (muss zum Ink-Knoten passen) |
| `image` | String | nein | Hintergrundbild relativ zum Prototyp-Root; fehlt es, wird `scenes/<szene>.png` versucht |
| `options[]` | Array | nein | Optionen, die auf `story.currentChoices` gemappt werden |
| `options[].id` | String | ja | Eindeutige Option-Kennung (Anzeige/Debug) |
| `options[].label` | String | ja | Anzeigetext des Buttons |
| `options[].inkChoice` | String | ja | Text des zugehörigen Ink-Choice (Zuordnung via `choice.text`) |

**Regeln (Basis-Level):**
- Mehrere Optionen pro Szene parallel (2–4 typisch, beliebig viele möglich).
- Keine Geometrie: KEINE Pixel-/Prozent-Positionierung, keine absoluten Koordinaten.
- Jede Option = genau ein Ink-Choice (`inkChoice`). Klick führt exakt den Story-Pfad aus.
- Choice ohne passende `inkChoice`-Zuordnung wird unverändert mit seinem Originaltext gerendert (Fallback).
- Fehlt die Datei oder ist sie ungültig, wird das per Debug-Log gemeldet und auf `story.currentChoices` zurückgefallen.

---

## Erweiterung: Geometrie-basierte Hotspots (OPTIONAL, NICHT MVP-verpflichtend)

Für einzelne Szenen können Hotspots als absolut positionierte Flächen auf dem
Hintergrundbild definiert werden (entspricht Unity `image_text`/`outline`-Hotspots).
**Im Basis-Level wird `spot` validiert, aber noch NICHT gerendert** (nur
Debug-Warnung). Umsetzung folgt, wenn die Basis stabil ist.

```json
{
  "scene": "Szene1_Hauptteil",
  "image": "scenes/szene1_hauptteil.png",
  "options": [
    {
      "id": "handy",
      "label": "Handy checken",
      "inkChoice": "Handy",
      "spot": { "type": "image_text", "x": 120, "y": 90, "width": 180, "height": 220 }
    },
    {
      "id": "strasse",
      "label": "Auf die Straße achten",
      "inkChoice": "Straße",
      "spot": { "type": "outline", "x": 60, "y": 300, "width": 640, "height": 120 }
    }
  ]
}
```

| Feld | Typ | Pflicht | Bedeutung |
|---|---|---|---|
| `options[].spot.type` | String | nein | `image_text` (Bild+Text) oder `outline` (nur Rahmen) |
| `options[].spot.x` | Number | ja | X-Position (px oder % der Szene) |
| `options[].spot.y` | Number | ja | Y-Position |
| `options[].spot.width` | Number | ja | Breite |
| `options[].spot.height` | Number | ja | Höhe |

---

## Validierung

`js/main.js` (Funktion `validateOptions`) prüft das Schema bei jedem Laden und
meldet Fehler als `[FEHLER]` im Debug-Bereich. Ungültige Dateien werden verworfen,
es greift der `story.currentChoices`-Fallback.