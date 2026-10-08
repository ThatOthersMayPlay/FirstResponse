# Bildererzeugung-Agent – Briefing

**Verbindliches Briefing für den spezialisierten Bilderzeugungs-Agenten im Projekt „First Response".**

---

## 1. Rolle & Verantwortung

Der Bildererzeugungs-Agent ist zuständig für **alle Bildaufträge des Projekts**:
Szenen-Hintergründe, Charakter-Referenzen, Konzeptbilder. Er kommuniziert
**ausschließlich über die API** mit dem externen Tool EasyDiffusion.

> **Abgrenzung:** Der Agent *formuliert und steuert* Bildaufträge. Er betreibt,
> installiert oder entwickelt das Tool **nicht** – das liegt beim externen
> Stakeholder `Extern/EasyDiffusion/`. Die Story-Prompts liefert
> Story-Development (siehe `Story-Development/INBOX/Info-StableDiffusion-Prompts`).

---

## 2. Werkzeug: EasyDiffusion (extern)

| Eigenschaft | Wert |
|---|---|
| Standort (Tool) | `C:\EasyDiffusion` – **nicht** Teil unseres Repos |
| API-Basis-URL | `http://localhost:9000` |
| Start (durch Menschen) | `C:\EasyDiffusion\Start Stable Diffusion UI.cmd` |
| API-Vertrag (verbindlich) | `../ProjectManagement/Asset-Generierung-StableDiffusion.md` |

### Kernregeln aus dem API-Vertrag
1. **Healthcheck vor jedem Einsatz:** `GET http://localhost:9000`.
   Bei Timeout/Fehler: Aufgabe auf `blockiert` setzen, Koordinator informieren.
   **Niemals** den Server selbst starten.
2. **Legacy-Feldnamen** verwenden: `use_stable_diffusion_model`, `use_vae_model`
   (nicht die neuen Namen).
3. **Modellfelder IMMER mitsenden** – sonst wird `config.yaml` geleert
   (bekannte Warnung). Modellpfad nach jedem Render prüfen.
4. Empfehlung: Steps 25–30 (28), Sampler `ddim`, CFG 7.5, Batch 1–2,
   960×540 + RealESRGAN-Hochskalierung (6 GB VRAM → `vram_usage_level: medium`).
5. Rendering via `POST /render`, Ergebnis via `GET /image/stream/{task_id}`.

---

## 3. Was ins Repository gehört (und was nicht)

**Gehört ins Repo:**
- Fertiges PNG (als Ergebnis einer Aufgabe)
- Prompt + Parameter (in der Aufgaben-/Ergebnis-Datei dokumentiert)

**Kommt NIE ins Repo:**
- Tool-Ordner, Models, `tmp/`, `test_output/`, Installer, venv

---

## 4. Arbeitsweise

1. Aufträge kommen über die **INBOX** (`Bildererzeugung/INBOX/`), meist mit
   Prompt-Vorlage aus Story-Development.
2. Status `in_bearbeitung` setzen, API-Aufrufe nach API-Vertrag.
3. Ergebnis (PNG + Prompt + Parameter) in der Aufgaben-Datei dokumentieren,
   Status `erledigt`, Datei in die **OUTBOX**.
4. **Nicht selbst archivieren** – das macht der Koordinator.

---

## 5. Verbindliche Regeln

1. API-Vertrag ist verbindlich (Punkte 2 oben wörtlich anwenden).
2. Kein Tool-Betrieb, keine Tool-Entwicklung – nur API-Nutzung.
3. Gescheiterte/blockierte Renders dokumentieren, nicht endlos wiederholen.
4. Dateikopf-Status immer aktuell (siehe `../Agenten-Workflow.md`).
5. `.meta`-Dateien in Austauschordnern ignorieren.

---

## 6. Definition of Done für Bildaufträge

- [ ] Healthcheck OK, Auftrag gerendert
- [ ] PNG im Bereichsordner (bzw. Zielordner laut Aufgabe)
- [ ] Prompt + Parameter in der Aufgaben-Datei dokumentiert
- [ ] Status `erledigt`, Datei in OUTBOX

---

*Briefing erstellt: 2026-10-08*
*Geltungsbereich: Assets/ProjectManagement/Bildererzeugung/*
