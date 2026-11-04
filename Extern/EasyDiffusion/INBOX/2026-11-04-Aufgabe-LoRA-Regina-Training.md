---
Titel: LoRA-Training Regina – Vorbereitung und Ausführung (Erster Test)
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: EasyDiffusion-Stakeholder (Tool-Entwicklung)
Erstellt: 2026-11-04
Fälligkeit: 2026-11-18
Abhängigkeiten: Bildererzeugung/Trainingsdaten/Regina/ (7 PNG); Bildererzeugung/INBOX/2026-11-04-Aufgabe-LoRA-Regina-Datensatz.md; Extern/EasyDiffusion/OUTBOX/2026-10-08-Info-Migration-Handover.md (Phase 2 und 3)
---

## Ziel

Ersten LoRA-Test für die Charakterkonsistenz von Regina durchführen. Der Datensatz liegt bereit.

## Vorbedingungen (vor dem Training, vom Stakeholder bestätigen)

1. **Pflicht-Technische Analyse (VRAM/Thermal)** laut Handover, Phase 2. Dafür ist der Laptop im **Gaming-Modus** zu betreiben. Ohne diese Analyse kein Training.
2. **Entscheidung LoRA vs. img2img** (Phase 3): Der erste Test soll zeigen, ob LoRA für Regina trägt. Wenn die VRAM-Analyse dagegen spricht, ist img2img-Variante als Alternative zu bewerten. Ergebnis mit Begründung dokumentieren.
3. **Datensatz-Prüfung** durch den Bildererzeugungs-Agenten (siehe Aufgabe oben). Captions und Trigger-Wort abwarten, bevor das Training startet.

## Umfang

1. Vorbedingungen prüfen und dokumentieren (Thermal- und VRAM-Werte, Modus, Empfehlung).
2. Training mit dem Datensatz `Bildererzeugung/Trainingsdaten/Regina/` durchführen. Parameter (Base-Modell `sd-v1-5`, Schritte, Lernrate, Rank, Trigger-Wort) im Bericht festhalten.
3. Ergebnis testen: 3 bis 5 Testrenders mit Regina-Trigger über die API (Legacy-Feldnamen, Modellfelder mitsenden, Healthcheck vorher). Bilder mit Prompt und Parametern dokumentieren.
4. Empfehlung: LoRA weiterverfolgen, anpassen oder verwerfen.

## Regeln

- Trainingsdaten nicht verändern oder umbenennen.
- Modellfelder in jedem Render mitsenden, `config.yaml` nach jedem Aufruf prüfen (Modellpfad-Schutz).
- Gescheiterte Läufe dokumentieren, nicht endlos wiederholen.
- Das Tool selbst (`C:\EasyDiffusion`) bleibt außerhalb des Repos. Nur Ergebnisse (PNG, Prompt, Parameter) kommen in das Repo.

## Ergebnis (Definition of Done)

- [ ] VRAM/Thermal-Analyse dokumentiert (Gaming-Modus bestätigt)
- [ ] Entscheidung LoRA vs. img2img mit Begründung
- [ ] Training ausgeführt, Parameter festgehalten
- [ ] 3 bis 5 Testrenders mit Prompt und Parametern
- [ ] Empfehlung und Bericht in der OUTBOX, Status `erledigt`
