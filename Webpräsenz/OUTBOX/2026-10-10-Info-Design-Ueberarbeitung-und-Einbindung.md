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

## Umsetzung der Einbindung (2026-10-10, Abend)

- **Quelle gefunden:** Die Studio-Seite liegt im separaten Repo
  `github.com/ThatOthersMayPlay/cusquea-games.de` (`index.html`, Branch `main`).
- **Angepasst & gepusht** (Commit `7054bff`):
  - First-Response-Karte ist jetzt ein **Button/Link** → Bild, Titel und neuer Button
    „Zur Projektseite" führen auf die Unterseite `/first-response/`.
  - Unterseite `first-response/index.html` ergänzt (Inhalt der von uns gebauten Seite,
    angepasst: Canonical/OG auf `www.cusquea-games.de/first-response/`, iubenda
    eingebunden, Datenschutz/Cookie + Impressum konsistent, „← Cusquea Games"-Rücksprung).
- **Noch NICHT live:** `www.cusquea-games.de` wird von einem **nginx-Webhosting**
  (IP `46.38.249.33`) ausgeliefert und **zieht nicht automatisch aus dem Repo**;
  `/first-response/` liefert aktuell **404**, `index.html` ist noch der alte Stand.
  → Live-Schaltung erst nach Umstellung des Hostings (siehe unten) oder manuellem Upload.
- **Doppelpflege:** `first-response/index.html` existiert jetzt in **beiden** Repos
  (FirstResponse & cusquea-games.de). Single-Source-Entscheidung steht noch aus.

### Empfehlung / Optionen für das Hosting (langfristig)

1. **Einfach (bleibt beim aktuellen nginx-Host):** Hosting so konfigurieren, dass es
   das `cusquea-games.de`-Repo per Git deployt (z. B. cPanel „Git Version Control" +
   `.cpanel.yml`, oder Webhook/`git pull` via Cron). Dann liegt auch die FR-Unterseite
   dort → **Doppelpflege** bleibt bestehen.
2. **Single Source (empfohlen):** Hosting zieht aus **`FirstResponse`-Repo**
   `Webpräsenz/public/`. Dafür müsste die Studio-Übersichtsseite (`index.html`) ebenfalls
   in `Webpräsenz/public/` liegen (neben `first-response/`). Dann ist ein Repo die
   Quelle für die gesamte Domain. Umsetzung auf Wunsch durch Webpräsenz-Agent.
3. **GitHub Pages mit Custom Domain:** `CNAME www.cusquea-games.de` + DNS-Umstellung auf
   GitHub-Pages-IPs – würde den bestehenden nginx-Host ersetzen (DNS-Eingriff nötig).

## Offene Punkte / To-dos

- [ ] **Hosting-Deployment** aus dem Repo einrichten (Option 1–3, Entscheidung offen) –
      dann `www.cusquea-games.de/first-response/` live prüfen.
- [ ] **Single-Source-Entscheidung** (Doppelpflege vermeiden).
- [ ] **Logo / Key-Visual** für First Response beschaffen (Anfrage an `Bildererzeugung/`).
- [ ] **Header-/Designkonzept** erarbeiten (Marke, Farben, Typografie, Layout) – mindestens
      Header mit Logo, Navigation und Claim.
- [ ] Erst danach erneuter öffentlicher Auftritt; bis dahin Design-Entwurf zur Abnahme.

*Hinweis: `Webpräsenz/public/` ist der einzige öffentlich deployte Ordner; interne
Ordner (`INBOX/`, `OUTBOX/`, `BRIEFING.md`, `Interner-Bereich/`) bleiben privat (geprüft 404).*
