---
Titel: Info: Design-Überarbeitung und Einbindung der First-Response-Seite
Typ: Info
Status: offen
Priorität: hoch
Auftraggeber: Auftraggeber/Koordinator (Hinweis 2026-10-10)
Agent: Webpräsenz-Agent
Erstellt: 2026-10-10
Fälligkeit: offen (nach Design-/Logo-Lieferung)
Abhängigkeiten: Bildererzeugung/ (Logo/Key-Visual); Extern/ (Studio-Seite/Hosting)
---

## Information

### Auftraggeber-Hinweis (2026-10-10)

> **Das Design der Webseite muss überarbeitet werden.**
> - Es gibt **noch kein Logo** für First Response.
> - Der **Kopf-/Header-Bereich** ist sehr **rudimentär** aufgebaut.

**Konsequenz:** Die aktuelle Landingpage (`Webpräsenz/public/index.html`) ist ein
funktionaler Platzhalter mit Text-Layout. Vor dem öffentlichen Auftritt (Sponsoren,
Crowdfunding) sind ein **Marken-/Logo-Asset** und ein **durchdachtes Header-/Design-Konzept**
erforderlich.

### Zusätzlicher Befund: Detailseite noch nicht in die Studio-Seite eingebunden

- Die First-Response-Detailseite ist live unter
  `https://thatothersmayplay.github.io/FirstResponse/` (zeigt Spiel, Gameplay,
  Fortschritt, Sponsoring, Studio-Footer).
- Die **Studio-Seite `www.cusquea-games.de`** ist eine **separate statische Seite, deren
  Quelle nicht in diesem Repo liegt**. Sie zeigt weiterhin nur die **3-Projekt-Übersicht**
  (First Response, Exp Libris, WürfelTime).
- Die **First-Response-Karte** dort verlinkt derzeit **nur auf den YouTube-Teaser**
  (`https://youtu.be/8mRArAtbx4Y`) – **kein Link** auf die neue Detailseite.
- **Folge:** Eine sichtbare „Unterseite mit Details" entsteht erst, wenn die Studio-Seite
  auf die Detailseite verlinkt bzw. diese unter einer eigenen URL/Domain erreichbar ist.

### TLS-Befund aktualisiert

- Das **TLS-Zertifikat von `www.cusquea-games.de` wurde erneuert**: gültig
  **2026-10-09 bis 2027-01-07**. Der ursprüngliche BRIEFING-Vermerk („abgelaufen am
  2026-10-09") ist damit **hinfällig**.

## Offene Punkte / To-dos

- [ ] **Logo / Key-Visual** für First Response beschaffen (Anfrage an `Bildererzeugung/`).
- [ ] **Header-/Designkonzept** erarbeiten (Marke, Farben, Typografie, Layout) – mindestens
      Header mit Logo, Navigation und Claim.
- [ ] **Einbindung klären** (mit Koordinator/`Extern/`): Quelle der Studio-Seite besorgen und
      First-Response-Karte auf die Detailseite verlinken – oder Domain-/Hosting-Zuordnung
      festlegen (z. B. eigene Subdomain).
- [ ] Erst danach erneuter öffentlicher Auftritt; bis dahin Design-Entwurf zur Abnahme.

*Hinweis: `Webpräsenz/public/` ist der einzige öffentlich deployte Ordner; interne
Ordner (`INBOX/`, `OUTBOX/`, `BRIEFING.md`, `Interner-Bereich/`) bleiben privat (geprüft 404).*
