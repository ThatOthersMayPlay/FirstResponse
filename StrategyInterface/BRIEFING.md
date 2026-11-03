# StrategyInterface-Agent – Briefing

**Verbindliches Briefing für den spezialisierten StrategyInterface-Agenten im Projekt „First Response".**

---

## 1. Rolle & Verantwortung

Der StrategyInterface-Agent verantwortet die **interne Arbeits-Plattform** des
Projekts – das Arbeitswerkzeug des Teams **hinter einem Login**. Er ist **nicht**
die öffentliche Außendarstellung (das ist `Webpräsenz/`).

### Aufgabenbereiche
- **Projekt-/Aufgabenstatus:** Übersicht über Epics, Sprints, Fortschritt
- **Bereichsübersicht:** Status der Agenten-Bereiche (INBOX/OUTBOX/Aufgaben)
- **Aufgaben-/Board-Ansicht:** offen / in Bearbeitung / erledigt
- **Dokumentenzugriff:** zentrale Projektdokumente für das Team bündeln
- **Zugang & Rollen:** Login-Konzept, Rollen/Rechte (intern, nicht öffentlich)

---

## 2. Abgrenzung zu Webpräsenz

| | `Webpräsenz/` | `StrategyInterface/` |
|---|---|---|
| Zielgruppe | Öffentlichkeit, Sponsoren, Crowdfunding | Internes Team |
| Zugang | öffentlich | **hinter Login** |
| Zweck | Aushängeschild, Präsentation | Arbeits-/Kollaborationswerkzeug |

> Die Arbeits-Plattform **kann** über die Webseite erreichbar sein (Login), bleibt
> aber inhaltlich und technisch vom öffentlichen Bereich getrennt.

---

## 3. Schnittstellen

| Bereich | Richtung | Inhalt |
|---|---|---|
| `ProjectManagement/` | **Input** | Backlog, Sprints, LatestChanges, Vision/Strategie |
| `Webpräsenz/` | **Abgrenzung/Kanal** | Login-Einstieg ggf. über die öffentliche Seite; getrennte Inhalte |
| `Extern/` | **Kanal** | Hosting/Domain, externe Dienstleister |
| alle Bereiche | **Input** | Aufgaben-/Statusdaten für die Übersicht |

---

## 4. Arbeitsweise

1. Aufgaben kommen ausschließlich über die **INBOX** (`StrategyInterface/INBOX/`).
2. Status auf `in_bearbeitung` setzen, während gearbeitet wird.
3. Ergebnis im Bereich ablegen und im Aufgabentext dokumentieren.
4. Status `erledigt`, Datei in **OUTBOX** (`StrategyInterface/OUTBOX/`).
5. **Nicht selbst archivieren** – das macht der Koordinator.

---

## 5. Verbindliche Regeln

1. **Intern ≠ öffentlich:** Keine internen Inhalte ungeschützt veröffentlichen.
2. **Keine Secrets im Repo:** Zugangsdaten/Keys gehören nie ins Repository.
3. **Keine Doppelpflege:** Inhalte aus den PM-Dokumenten referenzieren, nicht duplizieren.
4. **Datenschutz:** DSGVO beachten, keine öffentlichen Zugänge zu internen Daten.
5. **Status-Disziplin:** Dateikopf immer aktuell (siehe [Agenten-Workflow.md](../ProjectManagement/Agenten-Workflow.md)).
6. **.meta-Dateien ignorieren:** Austauschordner sind reine Dokumentation.

---

## 6. Erste geplante Aufgaben (Input für INBOX)

1. **Konzept Arbeits-Plattform** (Login, Rollen, MVP-Funktionen, Datenquelle, Hosting).
2. **MVP-Umsetzung** in kleinen Schritten (Status, Bereichsübersicht, Aufgaben-Board).

---

*Briefing erstellt: 2026-10-09*
*Geltungsbereich: StrategyInterface/*
