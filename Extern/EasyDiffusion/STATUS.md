# EasyDiffusion – Stakeholder-STATUS

**Stakeholder:** EasyDiffusion (Tool-Entwicklung)
**Standort des Tools:** `C:\EasyDiffusion` (eigenes Git, 13,6 GB inkl. Models)
**API-Vertrag des Projekts:** `../../Asset-Generierung-StableDiffusion.md`

## Aktueller Stand (2026-10-08)

- **Tool:** Easy Diffusion v3.0.16 (`ed_classic`, FastAPI + sdkit 2.1.1 +
  torch 2.4.1+cu124, CUDA auf RTX 4050 Laptop 6 GB), Start via
  `Start Stable Diffusion UI.cmd`, API auf `http://localhost:9000`.
- **API-Erreichbarkeit (Check 2026-10-08):** **nicht erreichbar**
  (Connection refused) → **Server muss vor Nutzung gestartet werden.**
  (Laut Aufgabe nicht selbst gestartet.)
- **Zuletzt getestet (2026-10-06):** API-E2E 3/3 Szenarien erfolgreich
  (`test_api.py`, Legacy-Format), Bilder in `test_output/` vom Nutzer
  visuell freigegeben.
- **Presets:** in `presets.json` ausgelagert (allgemein nutzbar),
  `test_api.py` lädt sie über `load_presets()` mit Fehlerbehandlung.
- **Models:** `sd-v1-5.safetensors` + `vae-ft-mse-840000-ema-pruned`
  (Default in `config.yaml`).
- **config.yaml-Schutz:** behoben via Server-Plugin
  `plugins/server/config_protect_plugin.py` (Tests bestanden: Request
  ohne Modellfelder lässt Config unverändert; `use_vae_model: ""` löscht
  weiterhin wie von der UI beabsichtigt). Plugin liegt in `plugins/`
  und überlebt Upstream-Updates. Clients sollten weiterhin
  `use_stable_diffusion_model` + `use_vae_model` mitsenden
  (Defense in Depth, siehe API-Vertrag).
- **Git:** lokal, 5 Commits bis `a1ceed0`; **nicht committet:**
  `plugins/`, `presets.json`, Änderungen an `test_api.py` + `TODO.md`.

## Offene Punkte / an den Stakeholder gerichtet

- Commit der offenen Änderungen (Plugin, presets.json, TODO).
- Phase 2 (Vorbereitung Charakterkonsistenz): Pflicht-Technische Analyse
  (VRAM/Thermal) – erfordert **Gaming-Modus** des Laptops
  (aktuell Unterhaltungsmodus).
- Phase 3: Entscheidung LoRA-Training vs. img2img-Varianten.
- GitHub-Offsite-Backup vorerst aufgeschoben (nur lokales Git).
- Server-Healthcheck muss beim ersten echten Bildauftrag funktionieren.
- Weitere Punkte → `INBOX/` dieses Stakeholders.

## Rückmeldungen des Stakeholders

→ siehe `OUTBOX/` (u. a. `2026-10-08-Info-Migration-Handover.md` = Freigabe
Green Light für die Migration)

---
*Zuletzt aktualisiert: 2026-10-08 (EasyDiffusion-Stakeholder)*
