---
Titel: Logo-Entwürfe First Response (3 Konzepte, Wappen-Bezug)
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Bildererzeugungs-Agent
Erstellt: 2026-11-03
Fälligkeit: 2026-11-17
Abhängigkeiten: ProjectManagement/Asset-Generierung-StableDiffusion.md; Webpräsenz/OUTBOX/2026-10-10-Info-Design-Ueberarbeitung-und-Einbindung.md
---

## Ziel

Drei Logo-Entwürfe für First Response erzeugen, die zur Webseite und zum Slogan „That others may play" passen. Anlass: Die Webseite hat noch kein Logo (Webpräsenz-Info, Punkt „Logo / Key-Visual").

## Stil-Vorgaben

- Wappen-Bezug (Schild, Heraldik), aber **nicht süß**, nicht cartoonhaft, nicht verspielt.
- Rettungs-Thema zurückhaltend, kein plakatives Rotkreuz-Logo.
- Farben aus der Webseite: Hintergrund `#0d1117`, Akzent `#e5484d` (Signalrot), Text `#e6edf3`.
- Schriftband mit „That others may play" ist optional, nur bei Konzept C.
- Ergebnis muss auch in Graustufen und klein (Favicon-Größe) lesbar bleiben.

## Konzepte

**A – „Schild der Verbindung"**
Wappenschild mit verschränktem Monogramm „FR". Darüber ein Funkwellenbogen als Verbindungsmotiv. Monochrom, ein Akzent in Signalrot.

**B – „Brückenschild"**
Schild mit einem Bogen (Brücke, Tunnelausgang) und einer Notrufwelle. Reduziert auf zwei Farben.

**C – „Ersthelfer-Wappen"**
Geviertetes Schild mit einem schlichten Kreuz (Erste-Hilfe-Motiv, nicht plakativ). Darunter ein Schriftband „That others may play".

## Umsetzung

- Erzeugung ausschließlich über die lokale SD-Pipeline laut `Asset-Generierung-StableDiffusion.md` (Easy Diffusion, `http://localhost:9000`).
- Vor jedem Bildauftrag Healthcheck `GET /ping`. Ist der Server nicht erreichbar: Aufgabe `blockiert`, Koordinator informieren. **Server nicht selbst starten.**
- Modellfelder im Request immer mitsenden (Modellpfad-Schutz).
- Format: Vorschlag 1024×1024 PNG, zusätzlich eine Variante ohne Hintergrund, falls das Tool es unterstützt. Abweichungen mit der Asset-Generierung abstimmen.
- Je Konzept 2–3 Varianten, damit eine Auswahl möglich ist.

## Ablage

- Ergebnisse in `Bildererzeugung/OUTBOX/` (PNG + Prompt je Variante, im Dateikopf dokumentiert).
- Die Prompts als Textdatei mitgeben, damit die Varianten reproduzierbar sind.

## Ergebnis (Definition of Done)

- [ ] Je Konzept mindestens 2 Varianten als PNG
- [ ] Prompt und verwendete Parameter je Variante dokumentiert
- [ ] Kurze Bewertung je Konzept (Wappen-Bezug, Lesbarkeit klein, Graustufen)
- [ ] Review-Bericht in der OUTBOX, Status `erledigt`

## Hinweise

- Keine Festlegung des Logos durch den Agenten. Auswahl trifft der Koordinator.
- Wenn ein Konzept unklar ist, Rückfrage über die OUTBOX statt Eigeninterpretation.
