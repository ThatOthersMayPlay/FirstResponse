---
Titel: MIGRATION – Handover HTML-Prototyp (Inventar, offene Punkte, Abhängigkeiten, Freigabe)
Typ: Info
Status: erledigt
Priorität: hoch
Auftraggeber: PM/WPA (Koordinator)
Agent: HTML-Prototyp-Agent
Erstellt: 2026-10-08
Fälligkeit: vor Migrationsstart
Abhängigkeiten: 2026-10-08-Aufgabe-MIGRATION-Handover.md
---

# MIGRATION – Handover Bereich „HTML-Prototyp"

## GREEN LIGHT ✅

**Der Bereich gibt die Freigabe für die Migration.** Alle eigenen Aufgaben sind
dokumentiert, offene Punkte sind vollständig erfasst, es fehlt dem Bereich
nichts, was eine Auslagerung verhindern würde.

> Wichtiger Vorbehalt: Der **gesamte Bereich ist aktuell `untracked`** (siehe
> Abschnitt 5). Die Migration darf nicht nur getrackte Dateien übernehmen –
> dann würde der komplette Prototyp verloren gehen.

---

## 1. Inventar

Der Bereich besteht aus **zwei getrennten Orten**:

### 1a) Projektmanagement-Kanal
`FirstResponse/Assets/ProjectManagement/HTML-Prototype/` – 12 Dateien,
**alle untracked**.

**INBOX (5)**

| Datei | Status | Kurzbeschreibung |
|---|---|---|
| `2026-08-15-Aufgabe-Audio-Musik-Klicksound.md` | `blockiert` | Hintergrundmusik + Klick-Sound, Mute/Lautstärke, Autoplay-Gating |
| `2026-08-15-Aufgabe-Beispielszene-Szene1.md` | `blockiert` | Erste MVP-Szene „Unfall-Schock & Führung" spielbar machen |
| `2026-08-15-Aufgabe-GitHub-Pages-Deployment.md` | `offen` | **Optional / nicht migrationskritisch** |
| `2026-08-15-Info-StableDiffusion-Bilder.md` | `offen` | Info: SD-Bildpipeline, Prompts vom Story-Agenten |
| `2026-10-08-Aufgabe-MIGRATION-Handover.md` | `erledigt` | Diese Aufgabe (→ OUTBOX) |

**OUTBOX (5)**

| Datei | Status | Kurzbeschreibung |
|---|---|---|
| `2026-08-15-Aufgabe-Hotspot-System.md` | `erledigt` | `hotspots/*.json` je Szene, Validierung, Geometrie-Schema; enthält Kennzeichnung der Nicht-MVP-Story-Dateien |
| `2026-08-15-Aufgabe-Ink-Anbindung.md` | `erledigt` | inkjs-Anbindung, Story-State-Logging im Unity-Format |
| `2026-08-15-Aufgabe-Szenenwechsel.md` | `erledigt` | Harte Szenenwechsel über `VAR scene`, Bild-Ladeweg, Fallbacks |
| `2026-08-15-Aufgabe-Hover-Feedback.md` | `erledigt` | Einheitliches Hover-/Fokus-Feedback, CDP-geprüft 13/13 |
| `2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md` | `erledigt` | **Offene Koordinator-Rückfrage** – bleibt nach der Migration unverändert liegen und wird dann vom Koordinator bearbeitet (Punkte R1–R9, Blockaden B1/B2) |

**ARCHIV (2)** – `2026-08-15-Aufgabe-Setup-Grundgeruest.md`,
`2026-08-15-Aufgabe-Canvas-Basistemplate.md` (beide `abgeschlossen`,
2026-08-17).

### 1b) Prototyp-Code
`FirstResponse/Assets/HTML-Prototype/` – 12 Dateien, **alle untracked**.

| Datei | Bytes | Kurzbeschreibung |
|---|---:|---|
| `index.html` | 6581 | Einstieg; Canvas-Basistemplate, komplettes CSS inkl. Hover-/Fokus-Feedback und Nicht-Interaktiv-Regeln |
| `config.js` | 1522 | `story.path = "../Story/Test-Dialog.ink"`, `startKnot`/`startScene = intro`, `hotspots.sceneOptionsFile = "<scene>.json"` |
| `js/main.js` | 13458 | Engine: Story-Boot, mehrspeakerfähiger Dialog-Parser, Choices/Labels, `options.json`-Loading + Validierung, harter Szenenwechsel, Story-State-Logging |
| `js/ink-full.min.js` | 249096 | **inkjs 2.4.0 Full-Build, lokal – keine CDN-Abhängigkeit** |
| `js/verify.js` | 6693 | Automatisierter Test, aktuell **19/19 PASS**, `node js/verify.js` |
| `js/README.md` | 1284 | Doku des JS-Moduls |
| `hotspots/README.md` | 3354 | Options-Schema (Basis + optionales Geometrie-Schema) |
| `hotspots/intro.json` | 339 | Options für Szene `intro` (3 Optionen) |
| `hotspots/nachfragen.json` | 266 | Options für Szene `nachfragen` |
| `hotspots/polizei_warnt.json` | 290 | Options für Szene `polizei_warnt` |
| `hotspots/stefania_beruhigt.json` | 198 | Options für Szene `stefania_beruhigt` |
| `hotspots/einsatzstelle.json` | 86 | Options für Szene `einsatzstelle` |
| `scenes/` | — | **leer** (0 Dateien) – Szenen-PNGs ausstehend, Platzhalter greift |
| `assets/audio/` | — | **leer** (0 Dateien) – Audio-Assets ausstehend |

**Externe Abhängigkeit des Codes:**
`FirstResponse/Assets/Story/Test-Dialog.ink` (2377 Bytes, **untracked**) –
`config.js` zeigt dorthin. Ohne diese Datei startet der Prototyp in den
Fallback-Testtext (Fehlerbehandlung greift, aber es ist nicht die
vorgesehene Story).

---

## 2. Offene Punkte (Status der INBOX-Aufgaben)

| Aufgabe | Status | Was läuft / was blockiert? |
|---|---|---|
| `MIGRATION-Handover` | **erledigt** | Abgeschlossen mit diesem Dokument. |
| `Audio-Musik-Klicksound` | **blockiert** | Blockade B2: Umfang verlangt MP3/OGG lokal, aber es gibt keinen Encoder (`ffmpeg`/`lame`/`sox` fehlen; Browser kann nur `audio/webm;codecs=opus`). **Koordinator-Entscheidung 2026-10-08: „Encoder bereitstellen", kein Format-Kompromiss.** Zweite Entscheidung: „Erst auf Entscheidung warten" – die Audio-Engine ist bewusst **noch nicht** gebaut. Danach Umfang + DoD in einem Rutsch. |
| `Beispielszene-Szene1` | **blockiert** | Blockade B1: Aufgabe verlangt `options.json` passend zu `ReginaStefania.ink`, die aber als **reine Beispieldatei, nicht MVP** gekennzeichnet ist (und technisch nicht spielbar). Außerdem fehlen SD-Szenen-Prompts und die Audio-Assets. Abhängigkeiten (Szenenwechsel, Hotspot-System, Ink-Anbindung) sind erfüllt – die Aufgabe ist nach Klärung der Story-Basis sofort bearbeitbar. |
| `GitHub-Pages-Deployment` | `offen` | **Optional / später, nicht migrationskritisch** (Dependenz: `Beispielszene-Szene1`, die blockiert ist). |
| `Info-StableDiffusion-Bilder` | `offen` | Info-Übergabe, noch nicht vom Koordinator übernommen/archiviert. |

**Bereits abgeschlossen** (4 Aufgaben, liegen in der OUTBOX zur Übernahme):
Hotspot-System, Ink-Anbindung, Szenenwechsel, Hover-Feedback.

**Verifikationsstand:** `node js/verify.js` → 19/19 PASS; Headless-Browser
(CDP) je Aufgabe geprüft, Hover-Feedback 13/13 PASS, 0 JS-Konsolenfehler.

---

## 3. Abhängigkeiten (was braucht der Bereich von außen?)

### Von anderen Bereichen
| Bezug | Was fehlt | Blockiert |
|---|---|---|
| **Story-Development** | Echte MVP-Ink-Story als Grundlage für Szene 1 (Punkt R1) | `Beispielszene-Szene1` |
| **Story-Development** | SD-Szenen-Prompts für „Unfall-Schock & Führung" – ausdrücklich **nicht improvisieren** (R2) | Szenen-Bilder |
| **Koordinator** | Entscheidungen R1–R9 aus der offenen Rückmeldung | R1–R4, R9 |

### Extern
| Bezug | Status |
|---|---|
| **SD-API** `http://localhost:9000/render` | Erreichbar (HTTP 200, geprüft 2026-10-08). Lokale Easy-Diffusion-Instanz; `use_stable_diffusion_model`/`use_vae_model` immer mitsenden. **Für die Migration nicht erforderlich** – erst für die Bildausführung. |
| **MP3-/OGG-Encoder** | Fehlt. Nicht migrationskritisch, aber Voraussetzung für `Audio-Musik-Klicksound`. |
| **CDN** | **Keine.** inkjs liegt lokal, alle Assets lokal. |

---

## 4. Was der neue Standort braucht (functionale Abhängigkeiten)

Damit der Prototyp nach dem Umzug **unverändert startet**:

1. `Assets/HTML-Prototype/` als Ganzes (die Ordnerstruktur `js/`, `hotspots/`,
   `scenes/`, `assets/audio/` muss erhalten bleiben).
2. `Assets/Story/Test-Dialog.ink` – weil `config.js` darauf zeigt
   (**gleich mit migrieren**).
3. Relative Pfade bleiben gültig, solange `Assets/HTML-Prototype/` und
   `Assets/Story/` **beieinander** bleiben (Abstand: `../Story/`).
   Wird nur `Assets/HTML-Prototype/` verschoben, bricht der Story-Pfad.
4. Zum Testen ein lokaler Server nötig (`fetch` funktioniert nicht über
   `file://`; der Fallback greift dann automatisch).

---

## 5. Migrationsrisiken – bitte beachten

1. **⚠ Alles `untracked`.** `git status` zeigt
   `?? FirstResponse/Assets/HTML-Prototype/`, `?? …/ProjectManagement/HTML-Prototype/`
   und `?? …/Assets/Story/Test-Dialog.ink`. `git ls-files` liefert für beide
   Prototyp-Orte **kein einziges Ergebnis**. Bei einer Migration, die sich auf
   getrackte Dateien stützt, würde der **gesamte Prototyp und der komplette
   Austauschkanal verloren gehen**.
2. **⚠ Leere Ordner gehen bei Git verloren.** `scenes/` und `assets/audio/`
   enthalten 0 Dateien. Git speichert keine leeren Verzeichnisse – nach der
   Migration müssten sie ggf. neu angelegt werden (oder mit Platzhalter-
   Datei wie `.gitkeep` gesichert werden).
3. **Unity-`.meta` fehlen** unter `Assets/HTML-Prototype/` (in `Assets/Story/`
   sind sie vorhanden). Unity erzeugt sie beim nächsten Import selbst; für
   die rein statische Nutzung des Prototyps sind sie nicht nötig.
   Den Austauschordnern (`INBOX`/`OUTBOX`/`ARCHIV`) sind `.meta` laut
   Agenten-Workflow.md §7.10 ohnehin gleichgültig.
4. **Bereits modifiziert, noch nicht committet** (gehört nicht zum Bereich,
   wird hier nur vermerkt): `Backlog.md`, `Development-Workflow.md`,
   `DocumentStructure.md`, `LatestChanges.md`, `Prototyp-Strategie.md`.

---

## 6. Freigabe-Status

| Prüfpunkt | Status |
|---|---|
| Inventar vollständig (beide Standorte) | ✅ |
| Offene INBOX-Aufgaben dokumentiert | ✅ |
| Abhängigkeiten erfasst (intern / extern) | ✅ |
| Blockaden dokumentiert (B1, B2) | ✅ |
| Offene Koordinator-Rückfrage vermerkt (R1–R9) | ✅ – Rückmeldung bleibt unverändert offen |
| Nicht-kritische Aufgabe markiert (GitHub-Pages) | ✅ – optional/später |
| Sonstige offene Aufgaben unverändert gelassen | ✅ – Audio, Beispielszene, StableDiffusion liegen weiter in der INBOX |
| **Freigabe** | **GREEN LIGHT** |

---

*Verfasst: 2026-10-08 · HTML-Prototyp-Agent · Freigabesignal laut
`2026-10-08-Aufgabe-MIGRATION-Handover.md`, Abschnitt „Ergebnis = Green Light"*