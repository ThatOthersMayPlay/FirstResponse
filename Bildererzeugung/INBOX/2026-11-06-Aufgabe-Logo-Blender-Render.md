---
Titel: Logo aus angepasster Blender-Datei rendern + Variationen
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Bildererzeugungs-Agent
Erstellt: 2026-11-06
Fälligkeit: 2026-11-20
Abhängigkeiten: Bildererzeugung/OUTBOX/Logo-Blender-V1.png (Vorlage); Modeling/ (Blender-Datei des Koordinators)
---

## Ziel

Aus der angepassten Blender-Datei (Koordinator) ein Render-Bild erzeugen und daraus ansprechende Variationen erstellen. Die Blender-Datei dient als Grundlage; Stil, Material und Kamera können variiert werden.

## Vorbedingungen

1. **Blender-Datei:** Der Koordinator liefert die angepasste Blender-Datei. Die Datei liegt außerhalb des Repos. Der Pfad wird vom Koordinator mitgeteilt.
2. **Blender läuft:** Von einem Menschen gestartet. Der Agent startet Blender nicht selbst.
3. **MCP-Verbindung:** Falls verfügbar, kann der Agent über `execute_blender_code` arbeiten. Andernfalls wird ein Skript vorbereitet (siehe `Modeling/MVP-Anleitung.md`).

## Umfang

1. Die Blender-Datei öffnen und inspizieren (Struktur, Materialien, Kamera, Licht).
2. Ein Basis-Render erzeugen (1024×1024, transparenter Hintergrund).
3. Mindestens drei Variationen:
   - **Flat/Vektor-Stil:** Emission-Materialien, orthografische Kamera.
   - **Metall/Plastik-Stil:** metallische und glänzende Materialien, perspektivische Kamera.
   - **Ein weiterer Stil** nach Vorschlag des Koordinators.
4. Je Variante: PNG, transparenter Hintergrund, Parameter dokumentiert.
5. Schriftzug „That others may play" wird später als Vektor gesetzt – kein Text im Bild, es sei denn, der Koordinator wünscht es.

## Regeln

- Farben an Web-Palette anlehnen: `#e6edf3` (hell), `#e5484d` (Akzent), Hintergrund transparent.
- Keine visuelle Bewertung durch den Agenten. Auswahl trifft der Koordinator.
- Ergebnis in der OUTBOX, Status `erledigt`. Nicht selbst archivieren.

## Ergebnis (Definition of Done)

- [ ] Basis-Render aus der angepassten Blender-Datei
- [ ] Mindestens drei Stil-Varianten als PNG in der OUTBOX
- [ ] Materialien, Kamera und Licht je Variante dokumentiert
- [ ] Bericht in der OUTBOX, Status `erledigt`
