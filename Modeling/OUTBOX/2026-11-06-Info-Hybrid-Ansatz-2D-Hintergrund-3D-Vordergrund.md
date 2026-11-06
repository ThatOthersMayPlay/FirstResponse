---
Titel: Info – Hybrid-Ansatz: 2D-Hintergründe (EasyDiffusion) + 3D-Modelle im Vordergrund
Typ: Info
Status: erledigt
Priorität: mittel
Auftraggeber: Modeling-Agent
Agent: Modeling-Agent
Erstellt: 2026-11-06
Abhängigkeiten: Modeling/BRIEFING.md; Bildererzeugung/OUTBOX/2026-11-04-Review-LoRA-Regina-Datensatz.md; ProjectManagement/Agenten-Workflow.md
---

# Hybrid-Ansatz: 2D-Hintergründe + 3D-Modelle im Vordergrund

## 1. Idee

Kombination der Stärken beider Pipelines:
- **EasyDiffusion (Bildererzeugung)** liefert atmosphärische, detaillierte 2D-Hintergründe.
- **Modeling (Blender)** liefert konsistente 3D-Charaktere/Objekte mit korrekter Perspektive, Beleuchtung und Animation.
- Ergebnis: Mittelweg zwischen Point-and-Click (2D) und 3D-Action-Adventure.

## 2. Was der Modeling-Agent beitragen kann

| Fähigkeit | Status | Details |
|---|---|---|
| 3D-Modelle rendern (transparenter Hintergrund) | ✅ | Alpha-Kanal-Render, PNG mit Transparenz |
| Kamera-Setups (Brennweite, Position, Blickwinkel) | ✅ | Definierbar, anpassbar an Hintergrund-Perspektive |
| Beleuchtungs-Setups | ✅ | Richtung, Farbe, Intensität anpassbar |
| Posen & Ausdrücke | ✅ | 5 Standardposen + 4 Ausdrücke + 24 Ansichten vorhanden |
| Export (GLB, FBX, PNG) | ✅ | Native Blender-Exporter |
| Animationen/Posen aus Mixamo | ⚠️ | Manueller Download + Retargeting nötig |

## 3. Offene Fragen (für Koordinator & andere Bereiche)

1. **Kamera-Matching:** Wie wird die 3D-Render-Perspektive auf die 2D-Hintergrund-Perspektive abgestimmt? (Brennweite, Blickwinkel, Kamerahöhe)
2. **Beleuchtung:** Wie wird das 3D-Modell zur Lichtstimmung des Hintergrunds angepasst? (Richtung, Farbe, Intensität)
3. **Compositing:** Wo und wie werden Vordergrund (3D-Render) und Hintergrund (EasyDiffusion) zusammengeführt? (Blender Compositor, Game-Engine, HTML-Prototype)
4. **Maßstab:** Einheitlicher Maßstab zwischen 3D-Modellen und 2D-Hintergründen.
5. **Interaktion:** Wie interagiert der Spieler mit 3D-Modellen in einer 2D-Szene? (Point-and-Click-Hotspots auf 3D-Modellen? Raycasting?)
6. **Performance:** Rendering-Kosten für Echtzeit-Compositing vs. vorgerenderte Bilder.

## 4. Technische Anforderungen an andere Bereiche

- **Spielmechanik:** Definition, wie 3D-Modelle in 2D-Szenen interagierbar sind (Hotspots, Animationstrigger, Kollisionsbereiche).
- **HTML-Prototype:** Compositing-Ansatz (CSS-Overlay, Canvas, WebGL). Transparente PNG-Overlays über Hintergrundbild?
- **Bildererzeugung:** Hintergrund-Generierung mit konsistentem Blickwinkel/Stil, passend zu 3D-Kamera-Setups. Ggf. Depth-Maps oder Normal-Maps für besseres Compositing.
- **Character-Development:** Erscheinungsbeschreibungen für alle Charaktere (nicht nur Regina) – für konsistente 3D-Modelle.

## 5. Empfohlener nächster Schritt (für Koordinator)

1. **Konzept-Entscheidung:** Hybrid-Ansatz als Richtung bestätigen oder ablehnen.
2. **Test-Setup:** Einen konkreten Test durchführen (z. B. Regina vor einem EasyDiffusion-Hintergrund rendern) – als Proof-of-Concept.
3. **Aufgaben verteilen:** Spezifische Aufgaben an Spielmechanik, HTML-Prototype, Bildererzeugung und Modeling.

## 6. Status

Modeling-Agent hat die technische Machbarkeit geprüft und dokumentiert. Bereit für Anweisungen des Koordinators.

---

*Erstellt: 2026-11-06 – Modeling-Agent*
