# HTML-Ink-Schnittstelle – Point&Click-Prototyp

**Schnittstellen-Design für den schnellspielbaren HTML-MVP von „First Response".**

---

## 1. Zweck

Dieses Dokument definiert die verbindliche Schnittstelle zwischen dem **HTML-Point&Click-Prototyp** (`Assets/HTML-Prototype/`) und dem bestehenden **Ink-Story-System**. Es beschreibt, wie Dialoge und Charakter-Entwicklungen aus dem Ink-Format im Browser lauffähig werden und wie das Point&Click-Prinzip in HTML umgesetzt wird.

**Grundsatz:** Das Ink-Format bleibt die **einzige Story-Quelle**. Diskutierte Dialoge und Charakter-Entwicklungen werden in Ink gespeichert und von beiden Laufzeiten (Unity + HTML) konsumiert.

---

## 2. Architektur-Überblick

```
Assets/Story/*.ink          ← Single Source of Truth (KI-authoring via JSON→Ink)
        │
        ├──▶ Unity (Ink-Plugin, DialogManager.cs)
        │
        └──▶ HTML-Prototype (inkjs)
                 ├── index.html            ← Spielfläche (Canvas für Point&Click)
                 ├── inkjs.min.js          ← Ink-Engine im Browser (lokal eingebunden)
                 ├── scenes/*.png          ← Szenen-Hintergründe (Platzhalter)
                 ├── hotspots.json         ← Hotspot-Definitionen pro Szene
                 └── assets/*.mp3|.ogg     ← Audio (optional)
```

---

## 3. Komponenten

### 3.1 Story-Runtime: inkjs
- **inkjs** ist der offizielle JavaScript-Port der Ink-Engine.
- Lädt die `.ink`-Quelldatei und kompiliert sie direkt im Browser.
- Liefert identische Story-Verzweigungen wie das Unity-Ink-Plugin.
- **Lokal einbinden:** `inkjs.min.js` liegt im Prototyp-Ordner (keine CDN-Abhängigkeit → offline-fähig, GDPR-konform).

### 3.2 Spielfläche: Point&Click-Canvas
Die HTML-Version bildet das Point&Click-Prinzip aus Unity (Epic 15) 1:1 nach:

| Konzept (Unity) | Umsetzung (HTML) |
|---|---|
| Statisches Szenen-Bild | `<div>` mit Hintergrundbild (`scenes/*.png`) |
| Interaktive Hotspots | Absolut positionierte `<div>`-Flächen mit Outline (optional) |
| Hover-Feedback | CSS-`:hover` + Outline-Effekt (leuchtender Rahmen) |
| Klick-Events | JavaScript-`click`-Handler |
| Choices aus Ink | Vom Ink-`story.currentChoices` gerendert |

> **⚠️ Hinweis (2026-08-15):** Für das Feeling der ersten Prototypen gilt ein **einfacherer, choice-basierter Ansatz**: Mehrere Optionen pro Szene werden parallel als Buttons/Karten im Choice-Bereich angezeigt (ohne Geometrie). Geometrie-basierte Hotspots bleiben eine optionale Erweiterung für einzelne Szenen. **Keine Überblendeffekte/Fades** – harter Szenenwechsel.

### 3.3 Optionen & Hotspots: `options.json` / `hotspots.json`
Im Basis-Level zeigt jede Szene **mehrere Optionen parallel** (einfacher choice-basierter Ansatz, keine Geometrie). Jede Option ist einem Ink-Choice zugeordnet.

```json
{
  "scene": "Szene1_Hauptteil",
  "image": "scenes/szene1_hauptteil.png",
  "options": [
    { "id": "gefaehrderin", "label": "Polizei warnen", "inkChoice": "Gefährderin" },
    { "id": "beruhigen", "label": "Stefania beruhigen", "inkChoice": "Beruhigen" }
  ]
}
```

**Regel:** Jede Option ist einem Ink-Choice zugeordnet (`inkChoice`). Die Auswahl führt exakt denselben Story-Pfad aus wie in Unity.

**Erweiterung (optional):** Geometrie-basierte Hotspots (absolut positionierte Flächen mit Outline) können für einzelne Szenen ergänzt werden (`hotspots.json`, Typ `image_text`/`outline`). Nicht MVP-verpflichtend.

---

## 4. Datenfluss

### 4.1 Start einer Szene
1. `index.html` lädt `scenes/<bild>.png` + `hotspots.json` für die aktuelle Szene.
2. `inkjs` lädt die Story (`.ink`-Datei) und setzt den Zustand auf die Szene.
3. Text (Dialogzeile) und Choices werden gerendert.

### 4.2 Spieler-Interaktion
```
Klick auf Hotspot
   → inkjs: story.ChooseChoiceIndex(i)
   → inkjs: story.Continue()
   → nächster Text + neue Choices / Szenenwechsel
```

### 4.3 Szenenwechsel
- Szenenwechsel wird in Ink selbst gesteuert (Knoten = Szene).
- Das HTML-Interface erkennt Szenenwechsel und lädt passendes Bild + Hotspots.

---

## 5. Story-States & Persistenz

- Ink-Variablen (z. B. `stefania_trust`) werden wie in Unity vom Ink-Runtime verwaltet.
- **Kein eigener Story-State im HTML-Code** – alle Zustände leben in Ink.
- Persistenz (Save/Load) optional über `localStorage` (Ink-State als JSON), analog zum Unity-Save-System.

---

## 6. Abgrenzung & Verantwortlichkeiten

### Ink-System (bestehend, unverändert)
- Story-Content in `Assets/Story/*.ink`
- KI-Authoring-Workflow: JSON → validieren → Ink generieren (`JsonInkConverter.cs`)
- Gilt für **beide** Laufzeiten gleichermaßen

### HTML-Prototyp (neu)
- **Nur Präsentation & Interaktion** – enthält **keine** Story-Logik
- Rendering, Hotspots, Hover/Klick-Events, Ink-Anbindung via inkjs
- Deployment über GitHub Pages (kostenlos, sofort spielbar)

### Klare Trennung
- Story-Daten liegen **immer** in Ink.
- Der HTML-Prototyp überschreibt nie Story-Logik; er konsumiert sie nur.

---

## 7. Abhängigkeiten

| Abhängigkeit | Status | Zweck |
|---|---|---|
| Ink-Story (`Assets/Story/*.ink`) | vorhanden | Story-Quelle |
| inkjs-Bibliothek | zu beschaffen (lokal) | Ink-Runtime im Browser |
| Szenen-Bilder (PNG) | **via Stable Diffusion (lokal, API)** | Szenen-Hintergründe – siehe [Asset-Generierung-StableDiffusion.md](Asset-Generierung-StableDiffusion.md) |
| options.json-Definitionen | zu erstellen | Optionen pro Szene (Basis-Level) |
| Audio-Dateien (MP3/OGG) | zu beschaffen | Hintergrundmusik + Klick-Sound |
| GitHub Pages | konfiguriert (StrategyInterface) | Deployment |

---

## 8. Nächste Schritte (Input für Agenten-Bereich HTML-Prototype)

1. inkjs-Bibliothek herunterladen und lokal ablegen
2. Basistemplate `index.html` mit Spielfläche, Hover-Effekten und Choice-Rendering
3. Options-System: mehrere Optionen pro Szene (`options.json` + Renderer, einfacher Ansatz)
4. Szenen-Bilder über Stable-Diffusion-API generieren (siehe [Asset-Generierung-StableDiffusion.md](Asset-Generierung-StableDiffusion.md))
5. Erste Beispielszene (Szene1 Regina) als HTML-Prototyp verbinden
6. GitHub-Pages-Deployment für den Prototyp einrichten
7. Szenenwechsel (harter Wechsel) & Story-State-Verhalten gegen Unity validieren
8. Audio: Hintergrundmusik + Klick-Sound (lokal, Mute-Schalter)

---

*Schnittstellen-Dokument erstellt: 2026-08-15*
*Geltungsbereich: Assets/HTML-Prototype/ + Assets/Story/*.ink*