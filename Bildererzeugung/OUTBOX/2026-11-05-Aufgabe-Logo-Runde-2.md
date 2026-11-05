---
Titel: Logo-Runde 2 – moderne Logos mit Wappen-Optik als Gestaltungselement
Typ: Aufgabe
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Bildererzeugungs-Agent
Erstellt: 2026-11-05
Fälligkeit: 2026-11-19
Abhängigkeiten: Bildererzeugung/OUTBOX/2026-11-03-Aufgabe-Logo-First-Response.md (Runde 1, verworfen); Bildererzeugung/OUTBOX/render-abstrakt.ps1 (Prompt-Vorlage)
---

## Ziel

Neue Logo-Entwürfe für First Response, die typischen Logo-Anforderungen entsprechen. Das Wappen dient nur als **Gestaltungselement**, nicht als historisches Wappen.

Runde 1 wird verworfen: Die Motive wirkten historisch-heraldisch (Adler, Kreuze, Rot-Schwarz-Weiß), das ist nicht gewollt.

## Stil-Vorgaben

- **Modernes Logo**, flach, klare Silhouette, wenige Farben.
- **Wappen-Optik** nur als Form (Schild, Umriss, Teilung), nicht als historische Motive (keine Adler, keine Löwen, keine Kreuze mit Historienbezug, keine Rüstungs- oder Fahnenmotive).
- **Nicht süß**, nicht cartoonhaft, nicht verspielt.
- Rettungs- und Verbindungsmotive zurückhaltend, z. B. abstrakte Verbindung, Weg, Brücke, Schutz.
- Farben: Hintergrund `#0d1117`, Akzent `#e5484d`, Text `#e6edf3`. Varianten für helle Hintergründe nicht nötig.
- Ergebnis muss in Graustufen und in Favicon-Größe lesbar bleiben.
- Keine Schrift im Bild. Der Schriftzug „That others may play" wird später als Vektor gesetzt.

## Vorlage

`Bildererzeugung/OUTBOX/render-abstrakt.ps1` enthält sechs Prompts. Sie dienen als Ausgangspunkt, die Motive (Bambus, Spielfigur) sind **nicht** gesetzt und dürfen angepasst werden. Die Negativ-Liste bleibt sinnvoll.

## Umsetzung

- Erzeugung über die lokale SD-Pipeline (`Asset-Generierung-StableDiffusion.md`). Healthcheck vorher, Server nicht selbst starten, Modellfelder mitsenden.
- Drei Konzepte, je zwei Varianten, 1024×1024 PNG.
- Prompt, Parameter und Negativ-Prompt je Variante dokumentieren.

## Bewertung

- Keine visuelle Bewertung durch den Agenten. Runde 1 hat gezeigt, dass Bildbewertungen ohne Bildeingang nicht belastbar sind.
- Der Agent liefert Dateien und Prompts. Die Auswahl trifft der Koordinator.

## Ergebnis (Definition of Done)

- [ ] Drei Konzepte, je zwei Varianten als PNG in der OUTBOX
- [ ] Prompt, Parameter und Negativ-Prompt je Variante dokumentiert
- [ ] Kurze Angabe, welche Vorlagen-Motive angepasst wurden
- [ ] Bericht in der OUTBOX, Status `erledigt`
