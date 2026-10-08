# Asset-Generierung – Stable Diffusion (lokal, via API)

**Pipeline-Dokumentation für die Erzeugung der Szenen-Bilder des First-Response-Prototyps.**

---

## 1. Zweck

Die benötigten Szenen-Bilder für den HTML-Prototyp (und später Unity) werden direkt über eine **lokal installierte Stable-Diffusion-Instanz** per **API** erzeugt. Es ist kein externer Bilddienst nötig.

**Status:** Aktiv – Stable Diffusion (Easy Diffusion) ist vollständig funktionsfähig (CUDA/FP16).  
**Letzter API-Test:** erfolgreich – 3/3 Szenarien, 4 Bilder (Commit 2bd750f)  
**Letzte Aktualisierung:** 2026-08-15

---

## 2. Architektur & Datenfluss

```
Szenen-Beschreibung (Konzept/Prompt)
        │
        ▼
Stable Diffusion (Easy Diffusion, lokal, API)   ← http://localhost:9000
        │
        ▼
PNG-Datei (GET /image/stream/{task_id})
        │
        ▼
Assets/HTML-Prototype/scenes/<szene>.png   →  vom HTML-Prototyp geladen
```

### API-Endpunkt (bestätigt 2026-08-15)
- **Instanz:** Easy Diffusion v3.0.16 (Commit 19c805ee), Backend `ed_classic`
- **Stack:** FastAPI + sdkit 2.1.1 + torch 2.4.1+cu124
- **Base-URL:** `http://localhost:9000` (Konfig: `net.listen_port`, `listen_to_network`)
- **Texte-zu-Bild:** `POST /render` (JSON, Feldnamen im **Legacy-Format**: `use_stable_diffusion_model`, `use_vae_model`)
- **Bildabholung:** `GET /image/stream/{task_id}`
- **Modell:** `sd-v1-5.safetensors` + VAE `vae-ft-mse-840000-ema-pruned` (muss in config.yaml gesetzt bleiben)

---

## 3. Konfiguration & Prompt-Konventionen

### 3.1 API-Aufruf (Easy Diffusion, Legacy-Feldnamen)
```json
POST http://localhost:9000/render
{
  "prompt": "Leitstelle bei Nacht, Notruf-Disponentin Regina an der Konsole, kühles blaues Licht, filmisch, 16:9",
  "negative_prompt": "text, watermark, blurry, low quality",
  "width": 1920,
  "height": 1080,
  "steps": 28,
  "sampler": "ddim",
  "cfg_scale": 7.5,
  "batch_size": 1,
  "use_stable_diffusion_model": "sd-v1-5.safetensors",
  "use_vae_model": "vae-ft-mse-840000-ema-pruned"
}
```
→ Antwort enthält `task_id` → Bild per `GET /image/stream/{task_id}` abholen.

### 3.2 Standard-Parameter (bestätigt 2026-08-15)
| Parameter | Wert | Hinweis |
|---|---|---|
| Steps | 25–30 | Empfehlung: 28 |
| Sampler | `ddim` | `euler_a` = schneller |
| CFG | 7.5 | |
| Batch | 1–2 | Vorsicht bei detail-Preset |
| Auflösung | 1920×1080 direkt (VRAM: medium) | ODER 960×540 + Hochskalierung via `/filter` (RealESRGAN) – **empfohlen bei 6 GB VRAM** |
| VRAM | 6 GB | `vram_usage_level: medium`; Vorsicht bei hoher Auflösung + Batch |

### 3.2 Prompt-Struktur (verbindlich)
1. **Szene/Setting** (Ort, Zeit, Licht)
2. **Charakter/Personen** (gemäß Character-Development)
3. **Stimmung/Atmosphäre** (filmisch, emotional)
4. **Seitenverhältnis:** immer 16:9 (`1920×1080`) für HTML-Prototyp
5. **Negative Prompt** gegen Artefakte (Text, Wasserzeichen, Unschärfe)

### 3.3 Ausgabe
- Format: **PNG**
- Ablage: `Assets/HTML-Prototype/scenes/<szene>.png`
- Dateiname = Szenen-ID aus `options.json`/Konzept (z. B. `szene1_hauptteil.png`)

---

## 4. Verantwortlichkeiten

| Schritt | Zuständig |
|---|---|
| Szenen-Beschreibung/Prompts erstellen | Story-Development-Agent (Szenen-Konzept) |
| API-Aufruf + Bild-Erzeugung | HTML-Prototyp-Agent |
| API/Setup verwalten (Port, Instanz starten) | Nutzer/Koordinator |
| Pipeline-Doku aktuell halten | Koordinator |

---

## 5. Regeln

1. **Keine externen Bilddienste** – ausschließlich lokale SD-Instanz (Easy Diffusion).
2. **16:9 / 1920×1080** für alle Prototyp-Szenen-Bilder (bei 6 GB VRAM bevorzugt 960×540 + RealESRGAN-Hochskalierung).
3. **PNG-Format**, Ablage in `Assets/HTML-Prototype/scenes/`.
4. **Prompt = Konzept** – Szenen-Beschreibungen kommen aus dem Szenen-Konzept (Story-Development), nicht aus improvisierten Prompts. **Prompts bleiben im Projekt** (im Szenen-Konzept dokumentiert, kein separater Prompt-Ordner).
5. **Reproduzierbarkeit:** Prompt zum erzeugten Bild dokumentieren (im Bild-Ordner oder im Szenen-Dokument), damit Nachgenerierungen konsistent sind.
6. **Keine Unity-Texte:** Bilder sind web-tauglich, liegen im HTML-Prototyp (nicht als Unity-Asset).
7. **⚠️ Modellpfad-Schutz:** Ein Render-Request ohne Modellfelder (`use_stable_diffusion_model`, `use_vae_model`) kann die `config.yaml` leeren → **Modellpfad nach jedem API-Aufruf prüfen.** Die Modellfelder sind im Request **immer** mitzusenden.

---

## 6. Einschränkungen & Voraussetzungen (bestätigt)

| Punkt | Detail |
|---|---|
| VRAM | 6 GB → `vram_usage_level: medium`; Vorsicht bei hohen Auflösungen + Batch |
| Modell | `sd-v1-5.safetensors` + `vae-ft-mse-840000-ema-pruned` (in config.yaml gesetzt bleiben) |
| Start-Befehl | `Start Stable Diffusion UI.cmd` (setzt `INSTALL_ENV_DIR`, `PYTHONPATH`, `HF_HOME`; System-Python ignorieren) |
| Warnung | Render-Request ohne Modellfelder kann `config.yaml` leeren → Modellpfad nach jedem Aufruf prüfen |

---

## 7. Offene Punkte (Interview)
- [x] Exakter API-Endpunkt/Port eingetragen (http://localhost:9000, POST /render)
- [x] Verwendete SD-Instanz notiert (Easy Diffusion v3.0.16)
- [x] Standard-Prompt-Parameter festgelegt (Steps 25–30, ddim, CFG 7.5, Batch 1–2)
- [x] Ablage-Konvention für Prompts: **Prompts bleiben im Projekt**, direkt im Szenen-Konzept (Story-Development) – Bildbeschreibung und Story-Beat an einem Ort

---

*Pipeline-Dokument erstellt: 2026-08-15*
*Geltungsbereich: Asset-Erzeugung für First-Response-Prototyp*