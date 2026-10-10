---
Titel: Website & internen Bereich einrichten (Zwei-Actions-Struktur)
Typ: Aufgabe
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Webpräsenz-Agent
Erstellt: 2026-10-10
Fälligkeit: 2026-10-20
Abhängigkeiten: .github/workflows/static.yml; StrategyInterface/STATUS.md; Webpräsenz/BRIEFING.md
---

## Ziel

Zwei separate Arbeitsbereiche für die Webpräsenz einrichten:

1. **Öffentliche, frei zugängliche Webseite** (GitHub Pages, kein Login).  
2. **Interner Bereich** (nur über Login/Unterverzeichnis erreichbar), später entwickelt.

Aktuellstes Ziel: Die GitHub Actions für die öffentliche Webseite wieder aktivieren.

---

## 1. Öffentliche Webseite (frei zugänglich)

### Ziel
Die Webseite `www.cusquea-games.de` (bzw. den First-Response‑Bereich) wieder über GitHub Pages bereitstellen.

### Zu wiederholende Schritte (Actions reaktivieren)

1. **Bestehenden Workflow anpassen** (oder neuen erstellen):
   - Aktuelle Datei: `.github/workflows/static.yml` – dieser deployt bisher `Assets/ProjectManagement/StrategyInterface/**`.
   - **Änderung:** `path:` auf den Ordner ändern, der die öffentliche Webseite enthält.
     - Möglichstster Ort: `Webpräsenz/` (oder einen neuen Ordner `public-website/`, falls getrennt).
   - Beispiel‑Änderung in `static.yml`:
     ```yaml
     path: 'Webpräsenz/'   # oder: path: 'public-website/'
     ```
   - Oder: Neuen Workflow `website-deploy.yml` anlegen, der speziell für die öffentliche Seite ist.

2. **GitHub Pages aktivieren** (falls deaktiviert):
   - Im Repository unter *Settings → Pages* den Branch `main` (bzw. `master`) und Ordner `/(root)` auswählen.
   - Falls der Workflow `enablement: true` enthält, erledigt er das automatisch.

3. **First‑Response‑Inhalte einpflegen:**
   - Sicherstellen, dass `index.html`, CSS/JS‑Dateien und der Teaser‑Inhalt (YouTube‑Link, Projekt‑Cards) im Zielordner liegen.
   - Bei Bedarf `README.md` aktualisieren.

4. **Testen:**
   - Nach Push auf `master` sollte die Seite unter `https://[Username].github.io/[Repo-Name]/` erreichbar sein.
   - URL in der Issue‑ oder Aufgaben‑Dokumentation ergänzen.

### Abgabe (Definition of Done)

- [x] Öffentliche Webseite ist unter der GitHub‑Pages‑URL erreichbar.
      **Geprüft 2026-10-10:** `https://thatothersmayplay.github.io/FirstResponse/` → HTTP 200,
      Landingpage ausgeliefert; `Interner-Bereich/`, `INBOX/`, `OUTBOX/`, `BRIEFING.md` → 404 (nicht öffentlich).
- [x] `static.yml` (oder neuer Workflow) so geändert, dass er den richtigen Ordner deployt.
- [x] In `Webpräsenz/INBOX/` wurde die Aufgabe auf `erledigt` gesetzt und nach `OUTBOX` verschoben.

---

## 2. Interner Bereich (Login‑geschützt, später entwickelt)

### Ziel
Einen Bereich einrichten, der **nur über einen Login** (bzw. ein Unterverzeichnis mit einfachem Schutz) erreichbar ist. Der Entwicklungs‑Aufwand wird später (nach Rücksprache mit Koordinator) realisiert.

### Erste Maßnahmen (können parallel oder nach Öffentlichem erledigt werden)

1. **Ordnerstruktur anlegen:**
   - `Webpräsenz/Interner-Bereich/` (oder beliebiger Name).
   - Darin: `index.html`, mögliche Schutz‑Datei (`.htaccess` mit basic auth, oder spätere Login‑Applikation).

2. **Auth‑Konzept skizzieren** (für Koordinator‑Gespräch):
   - Einfache Lösung: `.htaccess` + `.passwd` Datei (basic authentication).
   - Oder: Eigener kleiner Node‑/Python‑Server, der Requests prüft.
   - Oder: Spätere Integration in das bestehende Auth‑System des Projekts.

3. **Nicht‑Funktionale Anfänge:**
   - Ordner und Grund‑HTML‑Skelett anlegen.
   - Dokumentation in der Aufgaben‑Datei festhalten, warum es „später” kommt.

### Abgabe (Definition of Done)

- [x] Ordner `Webpräsenz/Interner-Bereich/` existiert und enthält ein minimal‑HTML‑Skelett.
- [x] In der Aufgaben‑Datei ist festgehalten, welche Auth‑Methode später angewendet werden soll.
- [x] Status `erledigt` (Gesamtaufgabe); interner Bereich wird nach Absprache mit dem Koordinator weiterbearbeitet.

---

## Ablauf für den Agenten

1. **Inhalt der INBOX‑Aufgabe lesen** und verstehen.
2. **Schritt 1 (Öffentliche Webseite)** erledigen:
   - `static.yml` ggf. ändern (`path:` anpassen).
   - Änderungen per `git commit` und `git push` an den Remote‑Repository senden.
   - Seiten‑URL im Browser testen.
3. **Schritt 2 (Interner Bereich)** als nächstes oder parallel angehen:
   - Ordner anlegen, Grund‑HTML‑Datei hineinlegen.
   - Notieren, welche Auth‑Methode später kommen soll.
4. **Ergebnisse in OUTBOX** verschieben und Status auf `erledigt` setzen.

---

*Hinweis: Die Priorität gilt Schritt 1. Der interne Bereich ist wichtig, aber die re‑aktivierte öffentliche Webseite hat aktuell höchsten Auftrag.*

---

## Ergebnis (Umgesetzt 2026-10-10)

### Schritt 1 – Öffentliche Webseite

- **Eigener Public-Ordner angelegt:** `Webpräsenz/public/` mit `index.html`
  (statisches HTML, Inline-CSS, keine CDN-/Extern-Abhängigkeiten).
  **Begründung gegen `path: 'Webpräsenz'`:** Ein Deploy des gesamten Ordners hätte
  `INBOX/`, `OUTBOX/`, `ARCHIV/` und `BRIEFING.md` öffentlich zugänglich gemacht.
- **Inhalt der Landingpage:** Hero mit Leitmotiv, Teaser-Link
  (`https://youtu.be/8mRArAtbx4Y`), Spiel-/Gameplay-Abschnitt, beide MVP-Szenen
  (spoilerfrei), Fortschritts-/Roadmap-Abschnitt, Sponsoring-/Crowdfunding-CTA mit
  Kontakt, Footer mit Studio-Rahmen (Cusquea Games) + Impressum-/Datenschutz-Verweis
  auf `www.cusquea-games.de`. SEO/Metadaten: `title`, `description`, Open-Graph, `lang="de"`.
  Inhalte aus `README.md` / `FirstResponseStrategy.md` referenziert (keine Doppelpflege).
- **Workflow angepasst:** `.github/workflows/static.yml`
  - `on.push.paths:` → `Webpräsenz/public/**` (interne Ordner lösen kein Deploy aus)
  - `actions/upload-pages-artifact` `path:` → `Webpräsenz/public`
  - `enablement: true` bleibt aktiv → Pages werden bei Bedarf automatisch aktiviert.
- **Rechte/Datenschutz:** Keine fremden Assets eingebunden; YouTube nur als äußerer
  Link (kein Embed → keine Cookies vor Einwilligung).

### Schritt 2 – Interner Bereich

- **Ordnerstruktur angelegt:** `Webpräsenz/Interner-Bereich/` mit minimalem
  `index.html` (Login-Hinweis, `noindex,nofollow`, Rücklink zur öffentlichen Seite).
- **Geplante Auth-Methode (Vorschlag fürs Koordinator-Gespräch):**
  1. **Einfach:** HTTP Basic Auth (`.htaccess` + Passwortdatei) – nur bei Server-Hosting,
     **nicht** bei statischem GitHub Pages.
  2. **Empfohlen für GitHub Pages:** Zugang über einen kleinen auth-geschützten Dienst
     (Node/Python) bzw. spätere Integration ins bestehende Auth-System des Projekts
     (StrategyInterface-Plattform); HTML bis dahin nur im Repo.
  - **Grund für „später":** Strategie und öffentliche Reaktivierung haben Vorrang;
    Methode braucht Koordinator-Freigabe.

### Offene Punkte für den Koordinator

- [x] **Pages-URL testen** nach Push: `https://thatothersmayplay.github.io/FirstResponse/` – **bestätigt 2026-10-10 (HTTP 200)**.
- [ ] **Custom Domain `www.cusquea-games.de`:** DNS/CNAME erst nach Freigabe einrichten
      (bewusst noch kein `CNAME` angelegt – Domain würde sonst umkonfiguriert).
- [ ] **TLS-Zertifikat der Studio-Seite erneuern** (abgelaufen laut BRIEFING 2026-10-09).
- [ ] **Auth-Methode für internen Bereich freigeben.**
- [ ] Key-Visuals/Screenshots aus `Bildererzeugung/` nachreichen (derzeit keine Assets vorhanden).

---

*Erstellt: 2026‑10‑10 · Webpräsenz‑Agent · Koordinator‑Freigabe erforderlich für echten Prod‑Deploy.*