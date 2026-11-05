---
Titel: Klärung – Verbindung LLM/MCP/Blender, OpenCode-Anbindung und optimale Render-Posen für LoRA
Typ: Aufgabe
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Modeling-Agent
Erstellt: 2026-11-05
Fälligkeit: 2026-11-19
Abhängigkeiten: Modeling/BRIEFING.md; Modeling/INBOX/2026-11-05-Aufgabe-Regina-3D-Datensatz-Test.md; Bildererzeugung/OUTBOX/2026-11-04-Review-LoRA-Regina-Datensatz.md
---

## Ziel

Du hast bereits ein Testmodell in Blender vollautomatisch erzeugt. Diese Aufgabe verlangt von dir, die Details dieses Modells selbst zu klären und die übergeordneten Anforderungen in deiner OUTBOX zu dokumentieren.

## Umfang

### 1. Modell-Dokumentation
- Wie wurde das Modell erzeugt (Methode, Werkzeug, Parameter)?
- Wo liegt die Blender-Datei?
- Welche Erscheinung hat das Modell (Pose, Maßstab, Materialien, Textur)?
- Welche Referenzen wurden verwendet?
- Ergebnis in der OUTBOX als Kurzbericht.

### 2. Verbindung LLM / MCP / Blender
- Wie ist die Verbindung zwischen LLM, MCP und Blender eingerichtet?
- Welche MCP-Tools stehen zur Verfügung (z. B. `execute_blender_code`, `get_scene_info`, `generate_3d`)?
- Welche Einschränkungen gibt es (Timeout, Dateigröße, Zugriff auf Dateisystem)?
- Ist es möglich, OpenCode auf irgendeine Art und Weise mit Blender zu verbinden? Falls ja, wie? Falls nein, was fehlt?
- Ergebnis in der OUTBOX als Dokumentation.

### 3. Optimale Render-Posen für LoRA
- Welche Posen und Perspektiven sollten für ein optimales LoRA-Training gerendert werden?
- Begründung je Pose (Identitätslernen, Ausdruck, Blickwinkel, Beleuchtung).
- Mindestanzahl und empfohlene Anzahl.
- Abstimmung mit dem Datensatz-Review der Bildererzeugung (7 Bilder, gemischte Stile).
- Ergebnis in der OUTBOX als Empfehlung.

### 4. Übergeordnete Anforderungen
- Welche Voraussetzungen müssen erfüllt sein, bevor die Render-Serie starten kann (Erscheinung, Kostenfreigabe, Rechte, Blender-Start durch Menschen)?
- Diese Anforderungen in der OUTBOX als Liste, damit der Koordinator sie abarbeiten kann.

## Regeln

- Nichts erfunden. Lücken als Rückfrage melden.
- Blender-Dateien bleiben außerhalb des Repos.
- Ergebnis in der OUTBOX, Status `erledigt`. Nicht selbst archivieren.
- Wenn eine Änderung außerhalb deines Ordners nötig ist, Aufgabe in `ProjectManagement/INBOX/` anlegen.

## Ergebnis (Definition of Done)

- [ ] Modell dokumentiert (Methode, Pfad, Erscheinung, Referenzen)
- [ ] Verbindung LLM/MCP/Blender dokumentiert
- [ ] OpenCode-Anbindung geklärt (möglich oder nicht, mit Begründung)
- [ ] Empfohlene Render-Posen mit Begründung
- [ ] Übergeordnete Anforderungen als Liste in der OUTBOX
- [ ] Bericht in der OUTBOX, Status `erledigt`
