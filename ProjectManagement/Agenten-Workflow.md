# Agenten-Workflow & Austausch-Regeln

**Verbindliches Regeldokument für spezialisierte Agenten im Projekt „First Response".**

---

## 1. Zweck

Dieses Dokument brieft alle spezialisierten Agenten über den verbindlichen Arbeitsablauf im Projektmanagement-Ordner. Aufgaben und Informationen werden ausschließlich über die Austauschordner **INBOX** und **OUTBOX** übergeben. Es gibt keine andere Form der Aufgabenübergabe.

---

## 2. Grundprinzip

```
Koordinator ──legt Aufgabe──▶ Bereich/INBOX ──▶ Agent verarbeitet ──▶ Bereich/OUTBOX ──▶ Koordinator übernimmt & archiviert
```

- **INBOX** = Eingangskorb des Bereichs. Hier legt der Koordinator neue Aufgaben und Informationen ab.
- **OUTBOX** = Ausgangskorb des Bereichs. Hier legt der Agent fertig bearbeitete Aufgaben und aktualisierte Informationen ab.
- **ARCHIV** = Ablage für abgeschlossene Aufgaben. Verschiebung nur durch den Koordinator.

Der Koordinator (Projektmanagement) ist die zentrale Instanz:
- Er überprüft regelmäßig die OUTBOX aller angeschlossenen Bereiche.
- Er übernimmt abgeschlossene Aufgaben und aktualisiert die Projektdokumente (LatestChanges.md, Backlog.md, Bereichsdokumente).
- Er legt im Interview besprochene, anstehende Aufgaben in die INBOX des jeweiligen Bereichs.

---

## 3. Ordnerstruktur

```
Assets/ProjectManagement/
├── INBOX/                        # Zentrale Ablage für unzuordbare/allgemeine Aufgaben
├── OUTBOX/                       # Zentrale Rückmeldung an den Koordinator
├── Character-Development/
│   ├── INBOX/                    # Aufgaben für den Charakter-Writer
│   ├── OUTBOX/                   # Ergebnisse des Charakter-Writers
│   └── ARCHIV/                   # Abgeschlossene Charakter-Aufgaben
├── StrategyInterface/
│   ├── INBOX/                    # Aufgaben für den Strategie-Web-Agenten
│   ├── OUTBOX/                   # Ergebnisse des Strategie-Agenten
│   └── ARCHIV/                   # Abgeschlossene Strategie-Aufgaben
├── HTML-Prototype/
│   ├── INBOX/                    # Aufgaben für den HTML-Prototyp-Agenten
│   ├── OUTBOX/                   # Ergebnisse des HTML-Prototyp-Agenten
│   └── ARCHIV/                   # Abgeschlossene HTML-Prototyp-Aufgaben
├── Story-Development/
│   ├── INBOX/                    # Aufgaben für den Story-Development-Agenten
│   ├── OUTBOX/                   # Ergebnisse des Story-Development-Agenten
│   └── ARCHIV/                   # Abgeschlossene Story-Aufgaben
├── Spielmechanik/
│   ├── INBOX/                    # Aufgaben für den Spielmechanik-Agenten
│   ├── OUTBOX/                   # Ergebnisse des Spielmechanik-Agenten
│   └── ARCHIV/                   # Abgeschlossene Mechanik-Aufgaben
├── Bildererzeugung/              # Bildaufträge via API an das externe EasyDiffusion-Tool
│   ├── BRIEFING.md               # API-Regeln (Healthcheck, Legacy-Felder, Was ins Repo gehört)
│   ├── INBOX/                    # Aufgaben für den Bildererzeugungs-Agenten
│   ├── OUTBOX/                   # Ergebnisse (PNG + Prompt)
│   └── ARCHIV/                   # Abgeschlossene Bildaufträge
├── Extern/                       # Kanal für externe Stakeholder (NICHT Projekt-Agenten)
│   ├── BRIEFING.md               # Kanal-Regeln
│   └── EasyDiffusion/            # Stakeholder: Tool-Entwicklung (C:\EasyDiffusion, externes Git)
│       ├── INBOX/                # Aufgaben AN den Stakeholder
│       ├── OUTBOX/               # Antworten DES Stakeholders
│       └── STATUS.md             # Tool-Entwicklungsstand
└── (weitere Bereiche folgen stückweise)
```

### Aktuelle angeschlossene Bereiche

| Bereich | Verantwortung | Zuständiger Agent |
|---|---|---|
| `Character-Development/` | Charakterprofile, Arcs, Beziehungen, Dialoge | Charakter-Writer |
| `StrategyInterface/` | Strategie-Webseite, Status-Übersicht | Strategie-Web-Agent |
| `HTML-Prototype/` | HTML-Point&Click-MVP, inkjs-Schnittstelle, Options-System, Szenen-Rendering | HTML-Prototyp-Agent |
| `Story-Development/` | Szenen-Konzepte, Dialoge, Ink-Ausarbeitung der MVP-Szenen | Story-Development-Agent |
| `Spielmechanik/` | Core Game Loop, Aha-Effekt, Entscheidungsarchitektur, Pacing, Balance | Spielmechanik-Agent |
| `Bildererzeugung/` | Bildaufträge (Szenen, Charaktere, Konzept) via API an EasyDiffusion | Bildererzeugungs-Agent |
| `Extern/` | Kanal für externe Stakeholder (z. B. Tool-Entwicklung EasyDiffusion) | Koordinator (verwaltet) |

> **Hinweis:** Neue Bereiche werden schrittweise ergänzt (z. B. Unity-Development, QA). Jeder neue Bereich erhält dieselbe INBOX/OUTBOX/ARCHIV-Struktur.

---

## 4. Rollen

### Koordinator (Projektmanagement)
- Legt besprochene Aufgaben in die INBOX des zuständigen Bereichs.
- Prüft regelmäßig alle OUTBOX-Ordner auf abgeschlossene Aufgaben.
- Übernimmt Ergebnisse in die Projektdokumente und hält sie aktuell.
- Setzt Aufgaben auf `abgeschlossen` und verschiebt sie ins ARCHIV.
- Veranlasst neue Aufgaben im Interview schrittweise.

### Spezialisierter Agent (z. B. Charakter-Writer, Strategie-Web-Agent, HTML-Prototyp-Agent, Story-Development-Agent, Spielmechanik-Agent)
- Arbeitet die INBOX des eigenen Bereichs ab.
- Pflegt den Status jeder Aufgabe im Dateikopf.
- Legt fertige Ergebnisse in die eigene OUTBOX.
- Archiviert **nicht** selbst – das ist Aufgabe des Koordinators.

---

## 5. Aufgabendateien: Format & Namensschema

Jede Aufgabe ist eine eigene Markdown-Datei. Das Format ist **verbindlich**.

### 5.1 Namensschema

```
YYYY-MM-DD-Typ-Kurztitel.md
```

Beispiele:
- `2026-08-15-Aufgabe-Stefania-Trust-Arc.md`
- `2026-08-15-Info-Story-Veraenderung-Szene2.md`
- `2026-08-15-Review-Charakterdokumente.md`

| Kürzel | Bedeutung |
|---|---|
| `Aufgabe` | Auszuführende Arbeitsaufgabe |
| `Info` | Information / Kontextübergabe (kein Arbeitsauftrag) |
| `Review` | Prüf- oder Feedbackauftrag |
| `Entscheidung` | Anstehende Entscheidung zur Abstimmung |

### 5.2 Dateikopf (verbindlich, am Dateianfang)

```markdown
---
Titel: <Kurzbeschreibung der Aufgabe>
Typ: <Aufgabe | Info | Review | Entscheidung>
Status: <offen | in_bearbeitung | erledigt | abgeschlossen | blockiert>
Priorität: <hoch | mittel | niedrig>
Auftraggeber: <Koordinator>
Agent: <Charakter-Writer | Strategie-Web-Agent | HTML-Prototyp-Agent | Story-Development-Agent | Spielmechanik-Agent | ...>
Erstellt: <YYYY-MM-DD>
Fälligkeit: <YYYY-MM-DD>
Abhängigkeiten: <optional, z. B. referenzierte Dateien>
---
```

### 5.3 Status-Semantik

| Status | Bedeutung | Wo liegt die Datei? |
|---|---|---|
| `offen` | Auftrag liegt im Eingangskorb, noch nicht begonnen | INBOX |
| `in_bearbeitung` | Agent arbeitet daran | INBOX |
| `erledigt` | Ergebnis fertig, zur Übernahme bereit | OUTBOX |
| `abgeschlossen` | Vom Koordinator übernommen, Projektdaten aktualisiert | ARCHIV |
| `blockiert` | Wartet auf Input/Zusatzinfo des Koordinators | INBOX (mit Hinweis im Text) |

---

## 6. Ablauf

### Schritt 1 – Aufgabe erteilen (Koordinator)
1. Anstehende Aufgabe wird im Interview schrittweise besprochen.
2. Koordinator erstellt eine Aufgabendatei nach Abschnitt 5.
3. Datei wird in die INBOX des zuständigen Bereichs gelegt. Status: `offen`.

### Schritt 2 – Aufgabe bearbeiten (Agent)
1. Agent prüft die INBOX regelmäßig.
2. Status auf `in_bearbeitung` setzen.
3. Aufgabe ausführen. Ergebnisse / neue Informationen direkt im Bereichsordner oder in den Projektdokumenten einpflegen.
4. In der Aufgabendatei das Ergebnis dokumentieren („Ergebnis"-Abschnitt).
5. Status auf `erledigt` setzen und die Datei in die **eigene OUTBOX** verschieben.

### Schritt 3 – Übernahme & Archivierung (Koordinator)
1. Koordinator prüft die OUTBOX aller Bereiche (regelmäßig, z. B. täglich bei aktiver Arbeit).
2. Ergebnis sichten und in die Projektdokumente übernehmen (LatestChanges.md aktualisieren, betroffene Bereichsdokumente synchronisieren).
3. Status auf `abgeschlossen` setzen.
4. Datei in das **ARCHIV** des Bereichs verschieben.
5. Falls die Aufgabe unvollständig ist: Status auf `offen`/`blockiert` setzen, mit Anmerkung zurück in die INBOX legen.

---

## 7. Verbindliche Regeln

1. **Keine Parallel-Kommunikation:** Aufgaben werden ausschließlich über INBOX/OUTBOX übergeben – keine Erledigungen per Chat oder Kommentar.
2. **Eine Aufgabe = eine Datei:** Keine Sammelaufträge in einer Datei, es sei denn, sie sind im Titel als Paket gekennzeichnet.
3. **Status pflegen:** Der Status im Dateikopf ist bei jedem Schritt zu aktualisieren. Veraltete Status gelten als nicht bearbeitet.
4. **OUTBOX = fertig:** In der OUTBOX liegen ausschließlich Dateien mit Status `erledigt`.
5. **INBOX = offen:** In der INBOX liegen nur Dateien mit Status `offen`, `in_bearbeitung` oder `blockiert`.
6. **Archiv nur durch Koordinator:** Agenten verschieben nichts ins ARCHIV.
7. **Projektdaten aktuell halten:** Ergebnisse werden in die zuständigen Projektdokumente übernommen (LatestChanges.md, Backlog.md, Bereichsdokumente).
8. **Nachvollziehbarkeit:** Jede Datei trägt Erstellungsdatum und Auftraggeber. Änderungen werden kurz im Ergebnis-Abschnitt festgehalten.
9. **Keine Doppelablagen:** Ein Inhalt existiert nur an einer Stelle. Keine Kopien zwischen INBOX/OUTBOX/ARCHIV.
10. **.meta-Dateien ignorieren:** Die Austauschordner sind reine Dokumentation. Unity-Meta-Dateien werden weder gepflegt noch beachtet.

---

## 8. Aufgabenarten im Detail

### 8.1 Aufgabe
Klare Arbeitsanweisung mit Ziel, Umfang und Abgabekriterien. Der Agent liefert ein Ergebnis und dokumentiert es in der Datei.

### 8.2 Info
Reine Wissensübergabe, kein Arbeitsauftrag. Status wird nach Übernahme vom Koordinator direkt auf `abgeschlossen` gesetzt und archiviert.

### 8.3 Review
Der Agent prüft bestehende Dokumente/Ergebnisse und liefert Feedback. Ergebnis = Review-Bericht im Datei-Text.

### 8.4 Entscheidung
Anstehende Entscheidung mit Optionen. Der Agent bereitet Empfehlungen vor; die Entscheidung fällt der Koordinator im Interview.

---

## 9. Ablauf-Regelung für neue Bereiche

Wenn ein neuer Bereich hinzukommt:

1. Ordnerstruktur `Bereich/INBOX`, `Bereich/OUTBOX`, `Bereich/ARCHIV` anlegen.
2. Bereich in Abschnitt 3 dieses Dokuments eintragen.
3. Koordinator legt die erste Aufgabe zur Einrichtung des Bereichs in die INBOX.
4. Ab dann gelten alle Regeln dieses Dokuments.

---

## 10. Erste Schritte nach diesem Briefing

Der Koordinator legt als Nächstes konkrete Aufgaben aus dem aktuellen Interview in die jeweilige INBOX. Die Agenten antworten ausschließlich über ihre OUTBOX. LatestChanges.md wird nach jeder Übernahme aktualisiert.

---

*Regeldokument erstellt: 2026-08-15*
*Geltungsbereich: Assets/ProjectManagement/ – Projekt First Response*