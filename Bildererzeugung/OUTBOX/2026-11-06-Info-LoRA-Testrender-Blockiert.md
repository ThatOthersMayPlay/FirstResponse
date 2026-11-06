---
Titel: Info – LoRA-Testrender fehlgeschlagen (Backend-Inkompatibilität)
Typ: Info
Status: blockiert
Priorität: hoch
Auftraggeber: Koordinator
Agent: Bildererzeugungs-Agent
Erstellt: 2026-11-06
Abhängigkeiten: Extern/EasyDiffusion/INBOX/2026-11-04-Aufgabe-LoRA-Regina-Training.md
---

# Info – LoRA-Testrender fehlgeschlagen

Versuch, Test-Renderings mit dem trainierten LoRA `regina-v2.safetensors` über die EasyDiffusion-API durchzuführen (4 geplante Renders mit Trigger „regina").

## Ergebnis

**Fehlgeschlagen.** Der EasyDiffusion-Backend (sdkit) kann das LoRA-Modell nicht laden:

```
Could not load the lora model! Reason: 'LatentDiffusion' object is not subscriptable
(File: sdkit/models/model_loader/lora.py, line 68: pipe = model["default"])
```

## Ursache (vermutet)

Das LoRA wurde im Diffusers/DreamBooth-Format trainiert (`pytorch_lora_weights.safetensors`, 6,4 MB). EasyDiffusions sdkit-Backend erwartet ein anderes LoRA-Format (z. B. Kohya/A1111-kompatibel) und scheitert beim Laden mit dem o. g. Fehler. Base-Modell-Renderings (ohne LoRA) funktionieren weiterhin.

## Nächster Schritt

Das Problem liegt beim Tool-Stakeholder (EasyDiffusion). Empfehlung: LoRA in ein EasyDiffusion-kompatibles Format konvertieren oder den Trainings-/Ladeprozess anpassen. Bis dahin können keine LoRA-Testrenderings über die API erzeugt werden.

Keine Render-Dateien erzeugt (OUTBOX unverändert).

*Erstellt: 2026-11-06 – Bildererzeugungs-Agent*
