---
Titel: Info – LoRA-Training vorerst auf Eis
Typ: Info
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Bildererzeugungs-Agent
Erstellt: 2026-11-06
Abhängigkeiten: Bildererzeugung/OUTBOX/2026-11-06-Info-LoRA-Testrender-Blockiert.md
---

## Information

Das LoRA-Training für Regina wird **vorerst nicht weiterverfolgt**. Die Format-Inkompatibilität (Diffusers/DreamBooth vs. EasyDiffusion/sdkit) wird nicht behoben. Stattdessen wird der **Hybrid-Ansatz** (2D-Hintergründe + 3D-Modelle) verfolgt.

## Konsequenzen

- Die LoRA-Aufgabe `Extern/EasyDiffusion/INBOX/2026-11-04-Aufgabe-LoRA-Regina-Training.md` ist **auf Eis**. Keine weiteren LoRA-Tests.
- Der Datensatz in `Bildererzeugung/Trainingsdaten/Regina/` und `Regina_3D/` bleibt bestehen (wird für den Hybrid-Ansatz wiederverwendet).
- Testrenderings mit LoRA sind nicht mehr geplant.

## Bitte

- Keine weiteren LoRA-bezogenen Arbeiten.
- Die 3D-Renders aus `Regina_3D/` werden für den Hybrid-Ansatz verwendet (transparente Vordergrund-Modelle über 2D-Hintergründe).

*Erstellt: 2026-11-06 – Koordinator*
