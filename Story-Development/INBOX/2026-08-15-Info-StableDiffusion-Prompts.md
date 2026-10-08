---
Titel: Info: Szenen-Bilder via Stable-Diffusion-API – Prompts aus Szenen-Konzept
Typ: Info
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Story-Development-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-15
Abhängigkeiten: Asset-Generierung-StableDiffusion.md
---

## Information

Szenen-Bilder werden über eine **lokale Stable-Diffusion-API** erzeugt. Für dich bedeutet das: **Dein Szenen-Konzept liefert die Bild-Beschreibungen/Prompts.**

### Was das für deine Arbeit bedeutet
- **Im Szenen-Konzept** (z. B. Aufgabe `Szene1-Ziele-Rahmenbedingungen`) ergänzt du je Szene/Beat eine **visuelle Beschreibung** (Setting, Licht, Charaktere, Stimmung) – die Basis für den SD-Prompt.
- Der HTML-Prototyp-Agent erzeugt daraus die Bilder per API (1920×1080, PNG).
- **Kein Story-Content in Prompts nötig:** Beschreibungen sind atmosphärisch/visuell, keine Dialoge.

### Prompt-Struktur (Referenz für deine Beschreibungen)
1. Szene/Setting (Ort, Zeit, Licht)
2. Charakter/Personen (gemäß Character-Development)
3. Stimmung/Atmosphäre (filmisch, emotional)
4. 16:9

### Referenz
- Vollständige Anleitung: **`Asset-Generierung-StableDiffusion.md`** (API-Endpunkt bestätigt: Easy Diffusion `http://localhost:9000`, Parameter, Regeln)
- Verknüpfte Aufgabe: `2026-08-15-Aufgabe-Szene1-Ziele-Rahmenbedingungen.md`

> **Hinweis:** Ergänze die visuellen Beschreibungen bei der Szenen-Diskussion Schritt für Schritt mit dem Koordinator – passend zu den Entscheidungspunkten und Beats.