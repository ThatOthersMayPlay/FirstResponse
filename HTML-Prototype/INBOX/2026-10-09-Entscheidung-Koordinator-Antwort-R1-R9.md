---
Titel: Koordinator-Antwort auf Rückmeldung R1–R9 (offene Punkte HTML-Prototyp)
Typ: Entscheidung
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-10-09
Fälligkeit: 2026-10-16
Abhängigkeiten: OUTBOX/2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md
---

## Kontext

Antwort des Koordinators auf die OUTBOX-Rückmeldung des HTML-Prototyp-Agenten
(`2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md`, R1–R9). Die
Entscheidungen sind unten verbindlich festgehalten; die betroffenen Dokumente
wurden bereits angepasst (siehe „umgesetzt").

## Entscheidungen zu den Rückfragen

| # | Entscheidung des Koordinators |
|---|---|
| **R1** | **MVP-Grundlage ist die echte Szene-1-Story aus `Story-Development/`.** Bis diese vorliegt, ist `unity/Assets/Story/Test-Dialog.ink` **ausdrücklich als Scaffolding freigegeben** (Struktur/Options/Ink-Mapping dürfen dagegen gebaut werden). `ReginaStefania.ink` bleibt **Nicht-MVP** (reine Beispieldatei). |
| **R2** | **Der Story-Development-Agent liefert die SD-Szenen-Prompts** (Szenen-Konzept „Unfall-Schock & Führung") an die Bildererzeugung. „Nicht improvisieren" bleibt bestehen. Eine entsprechende Aufgabe wird in die Story-Development-INBOX gelegt. |
| **R3** | **Reihenfolge bestätigt:** `Audio-Musik-Klicksound` wird **vor** der Beispielszene-DoD abgeschlossen. |
| **R4** | **Aufgabentext `Beispielszene-Szene1` angepasst** – Story-Verweis und Optionen sind jetzt story-agnostisch (kein Fixbezug mehr auf die Nicht-MVP-Datei). **Umgesetzt am 2026-10-09.** |
| **R5** | **Übernommen:** `~ scene = "…"` je Ink-Knoten ist verbindliche Szene-Konvention. In `HTML-Ink-Schnittstelle.md` aufgenommen. **Umgesetzt am 2026-10-09.** |
| **R6** | **Drei Präfixe genügen für HTML:** `[Story-State]`, `[Choice]`, `[Scene]`. Unity darf zusätzlich `[Decision]` und `[UI-Event]` führen – **keine Präfix-Parität nötig** (HTML bleibt schlank). |
| **R7** | **Bestätigt:** Szenen-PNGs werden über die SD-Pipeline erzeugt (abhängig von R2). Platzhalter-Fallback ist korrekt; gezählt wird erst nach Vorliegen der Prompts. |
| **R8** | **Übernommen:** `Info-StableDiffusion-Bilder.md` ist eine Info-Übergabe → Status `abgeschlossen`, verschoben ins `ARCHIV`. **Umgesetzt am 2026-10-09.** |
| **R9** | **Encoder wird bereitgestellt** (Entscheidung „kein Format-Kompromiss" bleibt). Auf dem System fehlen weiterhin `ffmpeg`/`lame`/`sox`/`avconv` (geprüft 2026-10-09). Die Audio-Engine bleibt daher **bis zur Bereitstellung blockiert**; es wird kein WAV/WebM-Kompromiss gebaut. |

## Entblockung

- **`Beispielszene-Szene1`** ist nach R1/R4 **wieder `offen`**: Struktur,
  `options.json`, Ink-Mapping und Durchspiel-Test dürfen gegen `Test-Dialog.ink`
  (Scaffolding) gebaut werden. **Offen bleiben nur** Szenen-Bilder (R2) und Audio (R9).
- **`Audio-Musik-Klicksound`** bleibt `blockiert`, bis der Encoder bereitsteht.

## Nächste Schritte des Koordinators

1. Aufgabe „SD-Szenen-Prompts" in `Story-Development/INBOX/` anlegen (R2).
2. MP3-/OGG-Encoder bereitstellen (R9) – danach Audio-Aufgabe entblocken.

---

*Verfasst: 2026-10-09 · Koordinator (PM/WPA)*
