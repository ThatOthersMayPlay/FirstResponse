---
Titel: Szenenwechsel-Mechanik
Typ: Aufgabe
Status: erledigt
Priorität: mittel
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-09-05
Erledigt: 2026-10-06
Abhängigkeiten: Ink-Anbindung; Hotspot-System
---

## Ziel
Szenenwechsel wird von Ink gesteuert und im HTML-Prototyp umgesetzt (Knoten = Szene).

## Umfang
- Erkennung des aktuellen Ink-Knotens (Szene) nach Story-Schritten
- Mapping Knoten → Szene-Daten (`config.js` bzw. `options.json` + Hintergrundbild)
- Beim Szenenwechsel: Hintergrundbild + Optionen + Kontext laden
- **Keine Überblendeffekte/Fades** – harter Wechsel ist im MVP gewünscht
- Fallback: unbekannter Knoten → Hinweis im Debug-Bereich, kein Absturz

## Ergebnis (Definition of Done)
- [x] Wechsel zwischen Szene-Intro/Hauptteil/Outro funktioniert über Ink
- [x] Zu jeder Szene werden passendes Bild und Optionen geladen *(Bild-Ladeweg geprüft: korrekter Szenen-Pfad; PNG-Assets selbst ausstehend → `Info-StableDiffusion-Bilder`)*
- [x] Wechsel erfolgt hart (ohne Fade/Überblendung)
- [x] Unbekannte Knoten führen zu klarer Meldung, nicht zu Fehlern
---

## Ergebnis (2026-10-06, HTML-Prototyp-Agent)

**Status: erledigt.** Szenenwechsel laeuft ueber die Ink-Szenen-Variable,
es gibt keine Fades, unbekannte Szenen werden sauber abgefangen.

### Umfang - Umsetzung
| Anforderung | Umsetzung |
|---|---|
| Erkennung des Ink-Knotens | `currentScene()` liest `story.variablesState["scene"]` (jeder Knoten setzt `~ scene = "..."`) |
| Mapping Knoten -> Szene-Daten | `hotspots/<Szene>.json` (`image`, `options`), Fallback `scenes/<szene>.png` aus `config.js` |
| Bild + Optionen + Kontext laden | `updateScene()` (Bild), `loadSceneOptions()` (Optionen), `[Scene]`-Log + Statuszeile |
| Kein Fade | Bild wird direkt gesetzt, `transitionDuration = 0s` |
| Fallback unbekannter Knoten | `warnOnce()` meldet klar, kein Absturz |

**Warum Szenen-Variable statt Pfad-Auswertung:** `inkjs` liefert
`state.currentPathString` an Choice-Punkten als `null`; der aktuelle Knoten war
daraus nicht zuverlaessig ableitbar (siehe OUTBOX `Hotspot-System`, Bug 2).

### Verifikation (Headless-Browser, Edge/CDP)
| DoD | Ergebnis |
|---|---|
| Wechsel ueber Ink | `intro` -> `polizei_warnt` -> `einsatzstelle`, je `[Scene] Wechsel zu Szene ...` |
| Bild + Optionen pro Szene | `imageSrc` je Szene korrekt (`scenes/intro.png`, `scenes/polizei_warnt.png`, `scenes/einsatzstelle.png`); Optionen 3 -> 2 -> 0 |
| Harter Wechsel | `transitionDuration = "0s"`, `errorLines: []` |
| Unbekannter Knoten | Bei absichtlich entfernter `einsatzstelle.json`: `[WARN] Keine options.json fuer Szene 'einsatzstelle' (HTTP 404) - Fallback auf story.currentChoices.` - keine Fehler, kein Absturz |

Zusaetzlich ergaenzt:
- `[WARN] Szenen-Bild nicht gefunden: <pfad> - Szenenflaeche bleibt Platzhalter`
  (nur einmal pro Pfad, kein Log-Spam)
- `[WARN] Unbekannter Knoten: Szenen-Variable 'scene' fehlt oder ist leer - Fallback auf '<x>'`

`node js/verify.js` -> **19/19 PASS, Exit 0**; `node --check js/main.js` -> OK

### Offener Punkt (extern, nicht hier loesbar)
- **PNG-Szenen-Bilder existieren noch nicht.** Ladeweg + Pfad-Mapping sind geprueft,
  die Bilder selbst erzeugt die Stable-Diffusion-Pipeline
  (`Info-StableDiffusion-Bilder.md`, Prompts kommen vom Story-Development-Agenten,
  dort ausdruecklich "nicht improvisieren"). Bis dahin greift der Platzhalter.
