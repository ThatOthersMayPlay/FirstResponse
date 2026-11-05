---
Titel: Logo-Varianten aus Blender-Datei (unterschiedliche Stile)
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Bildererzeugungs-Agent
Erstellt: 2026-11-05
Fälligkeit: 2026-11-19
Abhängigkeiten: Bildererzeugung/OUTBOX/Logo-Blender-V1.png; Modeling/ (Blender-Datei des Koordinators)
---

## Ziel

Aus der angepassten Blender-Datei (Koordinator) verschiedene Logo-Varianten in unterschiedlichen Stilen erzeugen. Die Blender-Datei dient als Grundlage; Stil, Material und Kamera können variiert werden.

## Vorbedingungen

1. **Blender-Datei:** Der Koordinator liefert die angepasste Blender-Datei (Pfad wird vom Koordinator mitgeteilt). Die Datei liegt außerhalb des Repos.
2. **Blender läuft:** Von einem Menschen gestartet. Der Agent startet Blender nicht selbst.
3. **MCP-Verbindung:** Falls verfügbar, kann der Agent über `execute_blender_code` arbeiten. Andernfalls wird ein Skript vorbereitet.

## Umfang

1. Die Blender-Datei öffnen und inspizieren (Struktur, Materialien, Kamera, Licht).
2. Mindestens drei Stil-Varianten erzeugen:
   - **Flat/Vektor-Stil:** Emission-Materialien, orthografische Kamera, transparenter Hintergrund (wie bisherige Blender-Varianten V1–V3).
   - **Metall/Plastik-Stil:** metallische und glänzende Materialien, perspektivische Kamera, Lichtsetzung (wie Logo-Blender-Metal).
   - **Ein weiterer Stil nach Vorschlag des Koordinators** (z. B. monochrom, reduziert, skizzenhaft).
3. Je Variante: 1024×1024 PNG, transparenter Hintergrund.
4. Prompt/Parameter je Variante dokumentieren (Materialien, Kamera, Licht, Render-Engine).

## Regeln

- Farben an Web-Palette anlehnen: `#e6edf3` (hell), `#e5484d` (Akzent), Hintergrund transparent.
- Keine Schrift im Bild (Schriftzug wird später als Vektor gesetzt), es sei denn, der Koordinator wünscht es.
- Keine visuelle Bewertung durch den Agenten. Auswahl trifft der Koordinator.
- Ergebnis in der OUTBOX, Status `erledigt`. Nicht selbst archivieren.

## Ergebnis (Definition of Done)

- [ ] Mindestens drei Stil-Varianten als PNG in der OUTBOX
- [ ] Materialien, Kamera und Licht je Variante dokumentiert
- [ ] Bericht in der OUTBOX, Status `erledigt`
