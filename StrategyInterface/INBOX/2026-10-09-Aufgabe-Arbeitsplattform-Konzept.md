---
Titel: Arbeits-Plattform – Konzept & MVP-Umfang (Login, Rollen, Inhalte)
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: StrategyInterface-Agent
Erstellt: 2026-10-09
Fälligkeit: 2026-10-30
Abhängigkeiten: Webpräsenz/BRIEFING.md; ProjectManagement/Agenten-Workflow.md; ProjectManagement/Backlog.md
---

## Kontext

Der Bereich `StrategyInterface/` wurde am 2026-10-09 **reaktiviert** und von einer
statischen Status-Seite zu einer **internen Arbeits-Plattform** umgewidmet
(Beschluss des Auftraggebers). Zugang **hinter Login**, ggf. erreichbar über die
öffentliche Webseite (`Webpräsenz/`).

**Abgrenzung:**
- `Webpräsenz/` = öffentliches Aushängeschild (Sponsoren/Crowdfunding/Stakeholder).
- `StrategyInterface/` = internes Arbeitswerkzeug (nur Team, Login).

## Ziel

Ein **Konzept + MVP-Umfang** für die interne Arbeits-Plattform, damit die
Umsetzung anschließend in kleinen Schritten erfolgen kann.

## Umfang (Konzept)

1. **Zugang & Login:** Auth-Konzept (wer darf rein, Rollen/Rechte), Skizze der
   Integration über die Webseite. **Keine echten Secrets/Zugangsdaten im Repo.**
2. **Rollen:** z. B. Koordinator, Bereichs-Agent, Stakeholder (lesend) – Rechte je Rolle.
3. **Kernfunktionen (MVP-Vorschlag):**
   - Projekt-/Epic-Status & Sprint-Fortschritt
   - Bereichsübersicht (INBOX/OUTBOX-Status je Bereich)
   - Aufgaben-/Board-Ansicht (offen / in Bearbeitung / erledigt)
   - Zugriff auf zentrale Dokumente (LatestChanges, Backlog, Vision)
4. **Datenquelle:** Wie werden die Inhalte gespeist? (manuell pflegen vs.
   aus den Markdown-Dokumenten generieren) – **keine Doppelpflege**.
5. **Technik & Hosting:** statische App vs. Backend; Bezug zu `Webpräsenz/`
   (gemeinsames Hosting? getrennte Bereitstellung?).
6. **Datenschutz:** interne Daten, DSGVO, keine öffentlichen Zugänge.

## Ergebnis (Definition of Done)

- [ ] Rollen- & Rechte-Modell skizziert
- [ ] Login-/Zugangs-Konzept beschrieben (ohne echte Secrets)
- [ ] MVP-Funktionsumfang priorisiert
- [ ] Daten-/Pflege-Strategie festgelegt (Single Source, keine Doppelpflege)
- [ ] Hosting-/Deployment-Empfehlung
- [ ] Ergebnis im Aufgaben-Text dokumentiert; Status `erledigt`, Datei in `OUTBOX/`

## Hinweise

- Der alte Bestand (`index.html`, `README.md`, `StrategyLog.md`, Update-Notizen)
  liegt in `StrategyInterface/ARCHIV/` und kann als Referenz dienen.
- GitHub-Workflows/Pages wurden am 2026-10-08 bewusst nicht genutzt; Hosting ist
  **neu zu entscheiden** (ggf. über den `Extern/`-Kanal / Auftraggeber).
