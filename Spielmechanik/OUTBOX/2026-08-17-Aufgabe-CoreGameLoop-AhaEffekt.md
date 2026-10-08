---
Titel: Core Game Loop & Aha-Effekt-Design für Szene 1
Typ: Aufgabe
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Spielmechanik-Agent
Erstellt: 2026-08-17
Fälligkeit: 2026-08-29
Erledigt: 2026-10-08
Abhängigkeiten: PlayerExperienceLog.md; Story-Development/ARCHIV/2026-08-17-Info-Szene1-Interview-Erkenntnisse-Delegation.md; Backlog.md (Epic 16)
---

## Kontext

Aus der Story-Development-Delegation (2026-08-17) wurde an den Spielmechanik-Agenten delegiert:
- **Core Game Loop im MVP erkennbar:** Entscheidung → spürbare Konsequenz → neue Situation
- **Mindestens ein klarer Aha-Effekt** mit drastischer, erlebbarer Konsequenz
- **`ReginaStefania.ink` erfüllt den Aha-Effekt nicht** (nur sanfter ±1-trust-Effekt) → substanzielle Mechanik-Erweiterung nötig
- **Zielwerte:** Aesthetics of Play – Konsequenz & Kohärenz als höchste Werte (8–9)

## Auftrag

Erarbeite die **mechanischen Vorgaben** für Szene 1 „Unfall-Schock & Führung" (Regina), damit Story-Development daraus das Szenen-Konzept in Ink umsetzen kann.

## Umfang (mechanisch, NICHT narrativ)

1. **Aha-Effekt-Design:** Definieren, WIE der drastische Konsequenz-Moment erlebbar wird (Mechanik, nicht Dialoginhalt):
   - Was passiert spürbar mit dem Spieler/Gefühl bei der Entscheidung?
   - Wie wird die Konsequenz sichtbar/messbar (Ink-Variablen, visuelle Reaktion)?
2. **Entscheidungsarchitektur:** Anzahl paralleler Optionen je Beat, Konsequenz-Stärke, Pacing
3. **Interaktions-Vorgaben für HTML-Prototyp:** Optionen-Anzahl, Konsequenz-Darstellung, kein Overlay
4. **Aesthetics-of-Play-Validierung:** Konsequenz/Kohärenz-Zielwerte (8–9) gegen PlayerExperienceLog

## Ergebnis (Definition of Done)
- [x] Aha-Effekt ist als Mechanik definiert und erlebbar beschrieben (Abschnitt 2)
- [x] Entscheidungsarchitektur liegt vor (Optionen je Beat, Konsequenz-Stärke, Pacing) (Abschnitt 3)
- [x] Interaktions-Vorgaben für HTML-Prototyp formuliert (Abschnitt 4)
- [x] Aesthetics-of-Play-Zielwerte berücksichtigt (Konsequenz/Kohärenz 8–9) (Abschnitt 5)
- [x] Vorgaben an Story-Development + HTML-Prototyp sind abgabefähig formuliert (Abschnitte 6 + 7)
- [x] Ergebnis in der Aufgaben-Datei dokumentiert (dieser Abschnitt)

> **Hinweis:** Keine Story-/Dialog-Inhalte ausarbeiten – nur Mechanik-Vorgaben. Die narrative Umsetzung übernimmt Story-Development.

---

# ERGEBNIS – Mechanik-Vorgaben Szene 1 „Unfall-Schock & Führung"

*Verfasst: 2026-10-08 · Spielmechanik-Agent*
*Umfang: ausschließlich Mechanik-Vorgaben (Rahmen & Erlebnis-Ziele). Keine Dialoge, keine Szenen-Inhalte – das ist Story-Development.*
*Dateien außerhalb dieses Dokuments wurden **nicht** verändert (keine Doppelablagen).*

## 0. Prämissen-Klärung (Stand 2026-10-08)

| Prämisse in der Aufgabe | Aktueller Stand | Auswirkung |
|---|---|---|
| `ReginaStefania.ink` erfüllt den Aha-Effekt nicht | Stimmt – und: die Datei ist seit 2026-10-06 ausdrücklich **nur Beispieldatei, nicht MVP** (HTML-Prototype/OUTBOX `Hotspot-System`, KENNZEICHNUNG), technisch nicht spielbar (toter Code) | **Kein Blockiergrund.** Die Mechanik wird gegen die **Beat-/Szenen-Struktur** definiert, nicht gegen eine konkrete .ink-Datei. Story-Development implementiert das Schema in der künftigen MVP-Story. |
| Zielwerte aus `PlayerExperienceLog.md` | Tabelle **Ziel-Balance** ist belegt (Konsequenz 8–9, Kohärenz 8–9), alle **Bewertungsfelder sind leer** (kein Prototyp-Test bisher) | Validierung erfolgt gegen die **Ziel-Werte**, nicht gegen gemessene Ist-Werte (siehe Abschnitt 5.3) |
| Story-Arbeit startet „nach Mechanik-Klärung" (Story-Development, INBOX Szene1-Ziele) | Bestätigt | Diese Datei **ist** die Mechanik-Klärung → gibt Story den Startschuss |

**Kein Widerspruch zu Projektdokumenten → kein `blockiert`.**

---

## 1. Core Game Loop – wiederverwendbares Schema

Grundlage: Koordinator-Einigung aus dem Migration-Handover (2026-10-08, O1) – **Schema vorrangig, Szene 1 als erste Instanziierung.**

```
AUSGANGSLAGE (Druck steigt)
        │
        ▼
   ┌─────────────┐
   │ ENTSCHEIDUNG│  2–4 parallele Optionen, eine davon riskant
   └──────┬──────┘
          ▼
  HARTE DIREKTFOLGE          ← sofort, im SOFORT folgenden Beat,
  (Konsequenz-Stufe S1–S3)      sichtbar im Bild + Statusanzeige
          ▼
  ENTSCHEIDUNGSRAUM KIPPT    ← die Lage ist eine andere als zuvor
          ▼
  LANGZEITFOLGE (Schulden)   ← als „obvious" gemachter Hinweis im
          │                     Folge-Beat + Variable `debt` (wird in
          │                     Szene 2 eingefordert)
          ▼
  REPARATUR-ENTSCHEIDUNG     ← Pflicht bei Stärke S3, kostet Druck
          ▼
     NEUE SITZATION ──────────────┐ (nächste Loop-Instanz)
                                  │
[Kein Game-Over, kein Reset] ◄────┘ Endzustand erst nach Loop-Ende
```

**Drei verbindliche Schema-Regeln:**

1. **Zweistufige Konsequenz:** Jede relevante Entscheidung hat (a) eine **harte Direktfolge** (Latenz ≤ 1 Beat, immer sichtbar) und (b) eine **Langzeitfolge** (`debt`), die im Folge-Beat als Hinweis „obvious" gemacht wird und erst in einer späteren Szene eingefordert wird. Konsequenzen mit nur einem der beiden Anteile sind unzulässig (das ist der Fehler der alten `±1 trust`-Lösung).
2. **Reparaturschleife als Loop-Kern:** Nach jedem Rücksetzer (Stufe S3) folgt **spätestens im nächsten Beat** ein Reparatur-Beat. Härte entsteht nicht durch Strafe, sondern durch **Kosten der Reparatur** (Zeit/Druck), nicht durch Verlust der Fortsetzbarkeit.
3. **Umkehrbar als Gefühl, nicht als Lock:** Die Situation fühlt sich hart an, ist aber reparierbar. **Kein Undo-Button, kein Neustart-Button, kein Reset im UI** – Rückgewinnung ausschließlich über die im Folge-Beat angebotene Reparatur-Option.

**Tragweite:** Das Schema gilt für **alle** MVP-Szenen (Szene 2 Fokuswechsel, ggf. Szene 3) und ist damit die Antwort auf die Anforderung „Core Game Loop im MVP erkennbar" (Epic 16).

---

## 2. Aha-Effekt-Design (Szene 1) – Mechanik, nicht Inhalt

### 2.1 Kern-Idee: **„Der Rückschlag kommt aus der eigenen Maßnahme"**

Der drastische Moment entsteht dadurch, dass die vom Spieler getroffene Kontrollmaßnahme **selbst** die Ressource zerstört, auf der sie aufbaut. Der Spieler verursacht den Rückschritt **selbst** – das ist der Aha-Effekt: *„Meine Maßnahme war das Problem."*

### 2.2 Umsetzung: **Rücksetzer-Beat (Stufe S3)**

| Merkmal | Spezifikation |
|---|---|
| **Auslöser** | Genau **eine** der 3 Optionen im Kern-Beat (H4) |
| **Zeitpunkt** | **Sofort**, im unmittelbar folgenden Beat (Latenz ≤ 1 Beat) |
| **Wirkung** | `progress` −35 Punkte, `pressure` +15, `debt` +1 · **sichtbarer Rückfall** des Fortschritts-Balkens auf den Stand eines früheren Beats |
| **Darstellung** | **Harter Szenenwechsel** auf einen eigenen Szenenzustand mit eigenem Bild/Statuszeile (z. B. Szene-Zustand „Rückschritt") – **kein Overlay, kein Toast, kein Fade** |
| **Reparatur** | Verpflichtender Reparatur-Beat H5 **im nächsten Beat**: 2 Optionen, bringt `progress` +20, kostet aber `pressure` +10 (Kosten!) |
| **Häufigkeit im MVP** | **genau 1×** pro Szene (Aha-Pflicht erfüllt, ohne Repetition/Frust) |
| **Messbarkeit** | Ink-Variablen `progress`, `pressure`, `debt` + Szenen-Zustandsvariable `scene` – im Debug/Log ablesbar; im UI als statische Statusanzeige (Abschnitt 4.3) |

### 2.3 Erlebnis-Beschreibung (was der Spieler spürt)

1. **Vorher:** Fortschritt ist sichtbar gewachsen → Gefühl von Kontrolle/ Kompetenz (Erfolg 7–8).
2. **Moment:** Die gewählte Option führt zum nächsten Beat – und der **Bildschirm springt zurück**, der Fortschritts-Balken fällt sichtbar ab. Nicht als Fehlermeldung, sondern als neue (schlechtere) Situation.
3. **Sekunden danach:** Der Folge-Beat **begründet** die Rückwirkung kausal (Ursache = die eigene Option) → Einsicht statt Ärger (Kohärenz 8–9).
4. **Reparatur:** Der Reparatur-Beat gibt die Kontrolle zurück, kostet aber Druck → Gefühl: *hart, aber nicht unfair* (Konsequenz 8–9, Erfolg bleibt 7–8).
5. **Nachhall:** `debt` wird im Outro als Hinweis „obvious" gemacht → Langzeitfolge ist vorbereitet, aber noch nicht eingelöst.

### 2.4 Abgrenzung (was NICHT der Aha-Effekt ist)

- Kein Zufallsereignis, keine Überraschung ohne Ursache (würde Kohärenz zerstören).
- Kein Sterben, kein Level-Ende, kein „You failed"-Screen (Erfolg-Ziel 7–8).
- Keine reine Zahl-Anpassung ohne sichtbare Darstellung (`±1 trust`-Problem).

---

## 3. Entscheidungsarchitektur

### 3.1 Beat-Plan Szene 1 (MVP, Ziel < 5 Minuten)

| Beat | Rolle | Optionen | Konsequenz-Stärke | Pacing-Wirkung |
|---|---|---|---|---|
| **I** Intro | Orientierung, **keine Entscheidung** | 0 | – | Ruhe einatmen (60–90 s) |
| **H1** Aufbau | erste Weichenstellung | **3** | S2 mittel | schneller Einstieg, Tempo hoch |
| **H2** Routinen-Beat | Fortschritt sichern | **2** | S1 schwach | kurze Atempause, Druck steigt |
| **H3** Standard-Beat | Richtung wählen | **3** | S2 mittel | Spannung baut auf |
| **H4** **Kern-Beat (Aha)** | die riskante Kontrollmaßnahme | **3** | **S3 stark → Rücksetzer** | **Klimax** – harter Einbruch |
| **H5** Reparatur-Beat | Pflicht nach S3 | **2** | S2 mittel (Kosten) | Kontrolle zurück, aber teuer |
| **H6** Neue Situation | Ausgang & Übergabe | **3** | S2 mittel | Weitung, Übergang |
| **O** Outro | Reflexion, **keine Entscheidung** | 0 | – | Abbau (45–60 s), `debt`-Hinweis |

**Summe:** 6 Entscheidungs-Beats, 17 angebotene Optionen, davon **1 Kernentscheidung** mit drastischer Folge.

### 3.2 Regeln zur Optionen-Anzahl

- **Standard: 3 parallele Optionen** (Begründung: PlayerExperienceLog – „Reduzierung auf 3 klare Optionen" verhindert Überforderung; Ziel Entscheidung 7–8).
- **2 Optionen** nur in Routinen-Beats und im Reparatur-Beat (Bewusste Reduktion nach einem starken Moment).
- **Nie 1 Option** (sonst keine Entscheidung), **nie ≥5 Optionen** (sonst Entscheidung 7–8 verfehlt).
- Die **riskante/teure Option** muss immer präsent sein (keine versteckten Wahlmöglichkeiten) → Planbarkeit bleibt hoch, weil die Kostenseite erkennbar, aber ihr genauer Preis nicht beziffert ist.

### 3.3 Konsequenz-Stufen (verbindliche Skala)

| Stufe | Wirkung auf Variablen | Sichtbarkeit | Latenz |
|---|---|---|---|
| **S1 schwach** | `trust` ±5 **oder** `progress` ±10 | Reaktionstext im selben Beat; Statusanzeige ändert sich | ≤ 1 Beat |
| **S2 mittel** | `trust` ±15 **oder** `progress` ±20 **oder** `pressure` +10 | Reaktion im Folge-Beat **+** Statusanzeige wechselt (ggf. Bildwechsel) | ≤ 1 Beat |
| **S3 stark (Aha)** | `progress` −35 **+** `pressure` +15 **+** `debt` +1 | **Harter Szenenwechsel** auf eigenen Rückschritt-Zustand | **sofort (im Folge-Beat)** |

**Harte Regel:** Konsequenz-Latenz beträgt **immer ≤ 1 Beat**. Eine Konsequenz, die „irgendwann später" eintritt, verletzt Zielwert Konsequenz (8–9) und Kohärenz (8–9).

### 3.4 Druck-Takt (Pacing-Regler)

- `pressure` steigt **pro Beat um 8** (deterministisch, kein Zufall).
- **Schwellwert `pressure` ≥ 70:** Der nächste Beat führt automatisch einen **Eskalationszwischen-Beat** aus (`progress` −10, `debt` +1), auch ohne Spielerentscheidung.
- Der Schwellwert ist **im UI sichtbar angekündigt** (Statusanzeige, Abschnitt 4.4) → Planbarkeit (Ziel 6–7) bleibt gewahrt, die Eskalation ist vorhersehbar, aber ihr genauer Preis nicht.
- **Kein Game-Over** bei `pressure` = 100: Der Druck endet im höchsten Ausgangszustand, nicht im Abbruch (Ziel Erfolg 7–8).

### 3.5 Ende & Variation

- **`ending`** wird aus `progress` / `pressure` / `debt` abgeleitet → **3 mögliche Ausgänge**, keiner davon „Fehlschlag".
- **Variation:** 3 Kernpfade (H4-Option A/B/C) × 2 Routinen-Wahlen (H2) = **12 Pfadkombinationen** vor dem Kern-Beat → hinreichend für Ziel Variation 6–8 und Wiederspielwert.

---

## 4. Interaktions-Vorgaben für den HTML-Prototyp

*Gültig für `HTML-Prototype/` (Basis-Level, choice-basiert – Konsistenz mit `HTML-Ink-Schnittstelle.md` §3.2/§3.3).*

1. **Optionen:** 2–4 parallele Buttons/Karten im Choice-Bereich (unterhalb des Bildes). **Keine** Geometrie/Positionierung im Basis-Level (Hotspots optional, nicht MVP-pflichtig).
2. **Kein Overlay:** Keine schwebenden Fenster/Modals/Toasts über dem Szenenbild – auch nicht für Konsequenz-Meldungen. **Konsequenz = Szenenwechsel**, kein Overlays.
3. **Konsequenz-Darstellung:** Jeder Konsequenz-Zustand (inkl. Rückschritt nach S3) ist ein **eigener Szenenzustand** mit eigenem Bild und eigener Optionsdatei (`hotspots/<zustand>.json`). **Harter Wechsel** (Bild + Status + Optionen neu), **kein Fade/keine Überblendung**.
4. **Statusanzeige (Progress / Druck / Vertrauen):** als **fester, statischer Bestandteil des Layouts** (eigener Bereich unter dem Szenenbild oder ins Bild eingebacken) – **kein** schwebendes UI-Element. Werte kommen ausschließlich aus Ink (`story.variablesState`); das HTML rendert nur, hält **keinen eigenen State** (Konsistenz mit `HTML-Ink-Schnittstelle.md` §5).
5. **Sichtbare Ankündigung:** Die Druck-Schwelle (70) ist durch Label/Farbwechsel der Statusanzeige vorhersehbar (Planbarkeit).
6. **Szenen-Erkennung:** über `VAR scene` je Knoten (verbindliche Konvention seit 2026-10-06), hart, ohne Pfad-Auswertung.
7. **Choice-Zuordnung:** Jede Option = exakt **ein** Ink-Choice; `inkChoice`-Text muss dem Ink-Choice exakt entsprechen (keine Paraphrasen im Basis-Level).
8. **Rückschritt-Sperre:** **Kein Zurück-/Neustart-Button** im Spielbereich. Reparatur nur über die im Folge-Beat angebotene Option (sonst bricht der Loop).
9. **Rückmeldungs-Takt:** Konsequenz spätestens im **sofort folgenden Beat** sichtbar; nie „später ohne Ankündigung".
10. **Audio-Hinweis (an die Audio-Aufgabe):** Ein kurzer, markanter Klang-Stinger **ausschließlich** beim S3-Rückschritt, um den Aha-Moment akustisch zu verankern; Klick-Sound je Auswahl. (Audio-Umfang bleibt Aufgabe `Audio-Musik-Klicksound`.)
11. **Keine Story-Logik im HTML:** Alle Zustandsänderungen ausschließlich in Ink-Variablen; HTML darf `progress`/`pressure`/`trust` **nur lesen und anzeigen**.

---

## 5. Aesthetics-of-Play-Validierung

### 5.1 Zielwerte (Quelle: `PlayerExperienceLog.md`, Tabelle „Ziel-Balance")

| Aspekt | Ziel | Wie die Mechanik es erreicht |
|---|---|---|
| **Konsequenz** | **8–9** | Latenz ≤ 1 Beat, harter Sichtbarkeitswechsel (Bild+Status), S3-Rücksetzer mit −35 `progress`, Zweistufigkeit (Direktfolge + `debt`) |
| **Kohärenz** | **8–9** | **Deterministisch, kein RNG.** Jede Konsequenz wird im Folge-Beat kausal begründet (Ursache = Spieler-Option); Druck-Takt fest und angekündigt; Reparatur folgt immer dieselbe Logik |
| Entscheidung | 7–8 | 3 Standard-Optionen (nie 1, nie ≥5), riskante Option immer sichtbar |
| Planbarkeit | 6–7 | Druck-Schwelle 70 sichtbar; Kostenstruktur bekannt, genauer Preis der Reparatur nicht beziffert |
| Unwägbarkeit | 6–7 | Bewusst **nicht** über Zufall, sondern über unvollständige Preis-Information (was genau kostet die Reparatur?) |
| Erfolg | 7–8 | Kein Game-Over, reparierbarer Rückschritt, messbarer `progress`-Fortschritt, 3 Ausgänge ohne „Fehlschlag" |
| Variation | 6–8 | 12 Pfadkombinationen vor dem Kern-Beat; 3 Hauptpfade (A/B/C) |

### 5.2 Abgleich mit der Aha-Effekt-Pflicht (Briefing §4.3)

- [x] **Mindestens ein klar erlebbarer, drastischer Konsequenz-Moment im MVP:** S3-Rücksetzer im Kern-Beat H4 (Abschnitt 2.2) – sichtbar, sofort, reparierbar, kausal begründet.

### 5.3 Messvorbehalt (Ehrlichkeit gegenüber dem Zielwert)

`PlayerExperienceLog.md` enthält **keine einzige gemessene Bewertung** (alle Felder leer, kein Prototyp-Test durchgeführt). Diese Validierung prüft die Mechanik ausschließlich gegen die **Ziel-Balance**. Die **Ist-Messung** von Konsequenz/Kohärenz kann erst nach folgenden Schritten erfolgen:
1. Ink-Implementierung des Schemas durch Story-Development,
2. Umsetzung im HTML-Prototyp,
3. erster Durchspiel-Test → Eintrag in `PlayerExperienceLog.md` (Epic 13, wiederkehrende Sprint-Aufgabe).

> Die Zielerreichung ist damit **nach Konstruktion begründet, aber noch nicht empirisch bestätigt.** Das ist so im Log zu belassen, bis ein Test stattgefunden hat.

---

## 6. Vorgaben an Story-Development (abgabefähig)

> Übernahme dieser Punkte in die Aufgabe/Arbeit des Story-Development-Agenten. **Inhalt** (Wie heißt die Szene, was sagt wer) bleibt zu 100 % bei Story-Development.

1. **Schema umsetzen:** Beat-Struktur aus Abschnitt 3.1 (I – H1…H6 – O) als Gerüst der Szene 1 verwenden.
2. **Ink-Variablen (mindestens):**
   | Variable | Init | Bedeutung |
   |---|---|---|
   | `scene` | `"I"` | Aktueller Szenenzustand (verbindliche Konvention, Abschnitt 4.6) |
   | `progress` | `0` | Fortschritt der laufenden Hilfe/Situation, 0–100 |
   | `pressure` | `0` | Zeitdruck/Eskalation, +8 pro Beat, Schwellwert 70 |
   | `stefania_trust` | `60` | Mitarbeit von Stefania, 0–100 (Name beibehalten für Konsistenz mit vorhandenen Dateien) |
   | `debt` | `0` | Offene Langzeitfolge, wird in Szene 2 eingefordert |
   | `ending` | `""` | Ausgangsvariante (3 Möglichkeiten, kein Fail) |
3. **Konsequenz-Stufen** S1/S2/S3 exakt nach Abschnitt 3.3 implementieren; **genau ein** S3-Rücksetzer im Kern-Beat H4.
4. **Reparatur-Beat H5** nach jedem S3 zwingend im nächsten Beat einplanen (Abschnitt 1, Regel 2).
5. **Zweistufige Konsequenz** in jedem relevanten Beat: Direktfolge im selben/folgenden Beat **plus** `debt`-Erhöhung mit sichtbarem Hinweis (Abschnitt 1, Regel 1).
6. **Outro ohne Entscheidung**, `debt`-Hinweis als „obvious" gemachte Andeutung (macht die Langzeitfolge vorbereitbar, ohne sie einzulösen).
7. **Abgrenzung:** Keine Bestandteile aus `ReginaStefania.ink` übernehmen (Beispieldatei, nicht MVP, technisch nicht spielbar). Das Schema ersetzt deren `±1 trust`-Ansatz.
8. **Rückmeldung an uns** über die Koordinator-INBOX, falls das Schema und die Anforderungen aus `Szenen-Konzept.md` / `Dialog-Optionen-Regina-Stefania.md` (3 Optionen: Gefährderin / Beruhigen / Drängen) nicht zusammenpassen – dort steckt ein Mapping auf S1/S2/S3 bereits implizit drin.

## 7. Vorgaben an HTML-Prototype (abgabefähig)

1. Abschnitt 4 (Punkte 1–11) ist als verbindliche Rahmenbedingung zu übernehmen.
2. **Neu gegenüber dem Bestand:** Statusanzeige (Punkt 4) als statischer Layout-Bestandteil + eigener Szenenzustand für Rückschritte (Punkt 3) – beides ist im bisherigen `options.json`-Schema abbildbar (`scene`, `image`, `options`), es werden nur **zusätzliche Szenenzustände** benötigt.
3. **Keine Auswirkung auf die offene Blockade R1** („Welche Ink-Datei ist MVP-Grundlage?"): Die Mechanik ist dateiunabhängig formuliert. Die Vorgaben gelten für die künftige MVP-Story gleichermaßen wie für `Test-Dialog.ink` als Scaffolding. **R1 bleibt beim Koordinator/Story.**
4. Konsequenz-Rückmeldung (Punkt 9) ist beim Durchspiel-Test mit zu prüfen (Konsistenz-Test gegen Unity).

---

## 8. Offene Punkte & Rückfragen an den Koordinator

| # | Punkt | Status |
|---|---|---|
| **R-M1** | **Story-Basis (R1):** Welche .ink-Datei wird die MVP-Story für Szene 1? Mechanik ist dateiunabhängig – aber Story braucht die freigegebene Zieldatei. | offen (Koordinator/Story) |
| **R-M2** | **O2 – zwei nie zugewiesene Delegationen** aus `Story-Development/OUTBOX/` (Fokuswechsel-Lukas, Tunnel-Dunkelheit): als Aufgaben in **diese INBOX** legen? Das Schema aus Abschnitt 1 ist für beide direkt anwendbar. | wartet auf Zuweisung (nicht Teil dieser Aufgabe) |
| **R-M3** | **PlayerExperienceLog-Messung:** Erst ein Durchspiel-Test füllt die Bewertungsfelder (Abschnitt 5.3). Soll die wiederkehrende Sprint-Aufgabe (Epic 13) dafür terminiert werden? | offen (Koordinator) |
| **R-M4** | **Audio-Stinger (Abschnitt 4.10)** gehört formal zur Audio-Aufgabe – bitte dort als Anforderung nachziehen. | Hinweis |

---

## Abgabe

- **Status:** `erledigt`
- **Nächster Schritt (Koordinator):** OUTBOX prüfen → in `LatestChanges.md`/`Backlog.md` übernehmen → Story-Development die Mechanik-Klärung weiterreichen (deren Szene-1-Aufgabe wartet darauf) → ggf. R-M2 zuweisen.
- **Nicht selbst archiviert** (Regel §3.3 Briefing / §7.6 Agenten-Workflow).
