---
Titel: Info: Szenen-Bilder werden über lokale Stable-Diffusion-API erzeugt
Typ: Info
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-15
Abhängigkeiten: Asset-Generierung-StableDiffusion.md
---

## Information

Die Szenen-Bilder für den Prototyp werden **nicht** extern beschafft, sondern über eine **lokal installierte Stable-Diffusion-Instanz per API** erzeugt.

### Was das für deine Arbeit bedeutet
- **Bild-Erzeugung:** Beim Bedarf an Szenen-Bildern (z. B. Aufgabe `Beispielszene-Szene1`) generierst du sie per API-Aufruf statt sie manuell zu erstellen oder aus externen Quellen zu holen.
- **API:** `POST http://localhost:9000/render` (Easy Diffusion, Legacy-Feldnamen `use_stable_diffusion_model`/`use_vae_model`), Bild abholen via `GET /image/stream/{task_id}`.
- **Format:** 1920×1080 (16:9), PNG, Ablage in `Assets/HTML-Prototype/scenes/`. Bei 6 GB VRAM bevorzugt 960×540 generieren + via `/filter` (RealESRGAN) hochskalieren.
- **Prompts:** Szenen-Beschreibungen kommen aus dem Szenen-Konzept des Story-Development-Agenten (nicht improvisieren). Prompt-Struktur siehe Pipeline-Doku.
- **Kein externer Dienst:** ausschließlich die lokale SD-API.
- **⚠️ Modellpfad-Schutz:** Modellfelder (`use_stable_diffusion_model`, `use_vae_model`) im Request IMMER mitsenden – sonst kann die `config.yaml` geleert werden; nach jedem Aufruf prüfen.

### Referenz
- Vollständige Anleitung: **`Asset-Generierung-StableDiffusion.md`** (API-Endpunkt bestätigt 2026-08-15, Parameter, Regeln)
- Verknüpfte Aufgabe: `2026-08-15-Aufgabe-Beispielszene-Szene1.md`