---
Titel: Regina 3D-Datensatz – Testlauf: Multi-Perspektiv-Renders als LoRA-Trainingsdaten
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Modeling-Agent
Erstellt: 2026-11-05
Fälligkeit: 2026-11-19
Abhängigkeiten: Character-Development/Regina.md (Erscheinung fehlt, siehe Vorbedingung); Bildererzeugung/Trainingsdaten/Regina/ (Referenzen); Bildererzeugung/OUTBOX/2026-11-04-Review-LoRA-Regina-Datensatz.md; Modeling/BRIEFING.md
---

## Ziel

Aus einem 3D-Modell von Regina Fotos aus vielen Perspektiven erzeugen. Diese Bilder dienen als gleichmäßige Datenbasis für ein LoRA-Training in EasyDiffusion, damit Regina wiederverwendbar und einheitlich dargestellt werden kann.

Ziel dieses Testlaufs: prüfen, ob der Weg (Modell → Renders → Datensatz) funktioniert und die Qualität für LoRA ausreicht.

## Vorbedingungen (vor Start klären)

1. **Erscheinungsbeschreibung:** `Character-Development/Regina.md` enthält keine Erscheinung (Haare, Augen, Hautton, Kleidung, Körperbau). Ohne diese Angaben wird kein Modell erzeugt. Der Agent erfindet nichts, sondern meldet die Lücke. Die Angaben kommen vom Koordinator.
2. **Blender läuft:** Blender 4.5 wird von einem Menschen gestartet. Der Agent startet es nicht.
3. **Kosten:** Die Modellerzeugung über `generate_3d` kann Credits kosten. Vorher Freigabe einholen.
4. **Rechte:** Die Meshy-Referenzen wurden mit der Pro-Version erzeugt. Das Modell darf nur verwendet werden, wenn es aus dieser Quelle stammt oder eine Freigabe vorliegt. Herkunft im Bericht festhalten.

## Umfang

**Phase 1 – Modell**
1. Modell aus den Referenzen (`regina-3d-front-tpose.png`, `regina-3d-from-left-side-tpose.png`) erstellen oder importieren. Quelle und Methode dokumentieren.
2. Modell auf Maßstab bringen, Pose neutral (T-Pose oder A-Pose), Ablage der Blender-Datei außerhalb des Repos.

**Phase 2 – Renders**
3. Neutrales Setup: gleicher Hintergrund (hellgrau oder neutral), gleiche Beleuchtung, gleiche Kamerahöhe und Entfernung für alle Bilder.
4. Serie von 24 Ansichten: 8 Azimut-Winkel (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°) × 3 Höhen (Augenhöhe, leicht erhöht, leicht gesenkt). Auflösung 1024×1024 PNG.
5. Zusätzlich 4 Ausdrucksvarianten mit dem gleichen Setup, falls das Modell Ausdruck zulässt. Wenn nicht, melden.
6. Dateinamen nach Schema: `regina_<az>_<hoehe>.png`, z. B. `regina_090_hoch.png`.

**Phase 3 – Übergabe**
7. Renders in `Bildererzeugung/Trainingsdaten/Regina_3D/` übergeben. Im Bericht in der OUTBOX festhalten, dass die Dateien dort liegen.
8. Vorschlag für Captions je Bild (gleiche Struktur wie `Bildererzeugung/OUTBOX/2026-11-04-Review-LoRA-Regina-Datensatz.md`), Trigger-Wort wie dort vorgeschlagen.

## Regeln

- Blender-Dateien und Zwischenstände bleiben außerhalb des Repos.
- Keine Dateien nach `unity/`.
- Keine Figurenfakten erfinden. Lücken melden.
- Nicht selbst archivieren.

## Ergebnis (Definition of Done)

- [ ] Vorbedingungen geklärt und dokumentiert (Erscheinung, Blender, Kosten, Rechte)
- [ ] Modell erstellt oder importiert, Quelle und Methode dokumentiert
- [ ] 24 Ansichten gerendert nach Schema, neutrales Setup
- [ ] Renders in `Bildererzeugung/Trainingsdaten/Regina_3D/`
- [ ] Caption-Vorschläge
- [ ] Bericht in der OUTBOX mit Einschätzung, ob der Datensatz für LoRA geeignet ist, Status `erledigt`
