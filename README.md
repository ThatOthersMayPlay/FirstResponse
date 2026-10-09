# First Response – Serious Game

Ein innovatives Serious Game für Erste-Hilfe-Ausbildung, das Bildung und Unterhaltung verbindet. Entwickelt von **Cusquea Games** (Achim Dieterle).

**Leitmotiv:** *That others may play.*

---

## 🎯 Projektvision

First Response wird zum führenden Serious Game im Bereich Erste-Hilfe-Ausbildung und schafft eine Brücke zwischen Bildung und Unterhaltung. Spieler lernen in einer interaktiven, spannenden Umgebung, wie sie in Notfallsituationen richtig handeln können – ohne Belehrung, sondern durch emotionale, erlebbare Konsequenzen.

---

## 📌 Projektstatus

**Stand: 2026-10-09**

- **Migration abgeschlossen:** Das Projekt wurde in ein eigenes Basisverzeichnis und ein eigenes Git-Repo überführt (`github.com/ThatOthersMayPlay/FirstResponse`). Unity liegt vollständig unter `unity/`, alle Fachbereiche in der Wurzel.
- **Strategie:** HTML-first – ein schnell spielbarer Browser-MVP (Point & Click) steht vor einem Unity-Build.
- **Zielrahmen:** Games-BW-Förderung; MVP mit emotional dichten Szenen.
- **Single Source of Truth:** Story/Dialoge liegen als **Ink** in `unity/Assets/Story/` und werden von **Unity** und **HTML (inkjs)** gleichermaßen konsumiert.
- **In Arbeit:** Szene 1 „Unfall-Schock & Führung" (Regina), Mechanik/Core-Game-Loop, Webpräsenz für Stakeholder.

---

## 📁 Projektstruktur

```
FirstResponse/
├── ProjectManagement/       # Koordinator, zentrale Doku, Backlog, Sprints, Vision
├── Story-Development/       # Szenen-Konzepte, Dialoge, Ink-Ausarbeitung
├── Spielmechanik/           # Core Game Loop, Aha-Effekt, Entscheidungsarchitektur
├── Character-Development/   # Charakterprofile, Arcs, Beziehungen
├── HTML-Prototype/          # Schnellspielbarer Browser-MVP (HTML/CSS/JS + inkjs)
├── Bildererzeugung/         # Bildaufträge via EasyDiffusion-API
├── Webpräsenz/              # Öffentliche Projekt-/Spiel-Präsenz (Aushängeschild, Stakeholder)
├── StrategyInterface/       # Interne Arbeits-Plattform (hinter Login)
├── Extern/                  # Kanal für externe Stakeholder (z. B. EasyDiffusion)
├── unity/                   # Unity-Projekt 1:1 (Assets, Packages, ProjectSettings)
├── README.md                # Diese Datei
└── .github/                 # Repository-Konfiguration
```

Jeder Fachbereich ist als **spezialisierter Agent** organisiert und nutzt die einheitliche Struktur `INBOX/ · OUTBOX/ · ARCHIV/` plus `BRIEFING.md`. Der Austausch erfolgt ausschließlich über `INBOX`/`OUTBOX` – verbindlich geregelt in [`ProjectManagement/Agenten-Workflow.md`](ProjectManagement/Agenten-Workflow.md).

---

## 🎮 Gameplay & MVP-Szenen

### Haupt-Features
- **Spannende Szenen:** Emotionale und realistische Unfallszenarien
- **Schwierige Entscheidungen:** Moralische und praktische Dilemmata
- **Erste-Hilfe-Thema:** Praktische Anwendung von Erste-Hilfe-Wissen
- **Adrenalin-Elemente:** Spannung und Zeitdruck
- **Dialog-System (Ink):** Interaktive Charakter-Kommunikation
- **Entscheidungs-Logging:** Nachverfolgung und Auswertung aller Entscheidungen
- **Point & Click:** Interaktion über sichtbare Optionen/Hotspots
- **Aha-Effekt-Design:** Drastische, spürbare Konsequenzen (Core Game Loop)

### MVP-Szenen (Epic 16)
1. **Szene 1 – „Unfall-Schock & Führung":** Regina führt Stefania via Funk/Telefon (indirekte Steuerung).
2. **Szene 2 – „Ablenkung & Verantwortung":** Lukas/Kinder, Fokuswechsel-Mechanik (Handy vs. Straße).

### Charaktere
- **Lukas (24):** IT-Consultant, unerfahren aber lernbereit
- **Viktor (45):** Handwerker, praktisch und erfahren
- **Kilian (28):** Medizinstudent, theoretisches Wissen
- **Stefania (32):** Grafikdesignerin, emotional und kreativ
- **Regina (58):** Lehrerin, weise und beobachtend
- **Norman (35):** Rettungssanitäter, professionell und kompetent

---

## 🛠️ Technologie-Stack

| Bereich | Technologie |
|---|---|
| Game Engine | **Unity 6000.3.9f1 LTS** (URP) |
| Story/Dialoge | **Ink** (Single Source of Truth, `unity/Assets/Story/*.ink`) |
| Browser-MVP | HTML5, CSS3, JavaScript + **inkjs** (lokal, keine CDN-Abhängigkeit) |
| Asset-Erzeugung | Lokale **EasyDiffusion**-API (`http://localhost:9000`) |
| Version Control | Git & GitHub |
| Dokumentation | Markdown |

---

## 🧭 Entwicklung & Workflow

Das Projekt wird arbeitsteilig mit spezialisierten Agenten entwickelt. Der **Koordinator (Projektmanagement)** steuert, übernimmt Ergebnisse und hält die Projektdokumente aktuell.

```
Koordinator ──legt Aufgabe──▶ Bereich/INBOX ──▶ Agent ──▶ Bereich/OUTBOX ──▶ Koordinator übernimmt & archiviert
```

Angeschlossene Bereiche: `ProjectManagement`, `Story-Development`, `Spielmechanik`, `Character-Development`, `HTML-Prototype`, `Bildererzeugung`, `Webpräsenz`, `StrategyInterface` sowie der externe Kanal `Extern`.

Details: [`ProjectManagement/Agenten-Workflow.md`](ProjectManagement/Agenten-Workflow.md)

---

## 🌐 Webpräsenz & Stakeholder

Die öffentliche Präsenz des Projekts liegt bei **Cusquea Games**: [www.cusquea-games.de](https://www.cusquea-games.de).

Der Bereich [`Webpräsenz/`](Webpräsenz/) schält **First Response** als eigenes Aushängeschild heraus – für **Sponsoren, Crowdfunding und weitere Stakeholder**. Ziel ist eine fokussierte, projektbezogene Präsentation (statt der allgemeinen Studio-Seite).

Ergänzend wird [`StrategyInterface/`](StrategyInterface/) zur **internen Arbeits-Plattform** ausgebaut (Projekt-/Aufgabenstatus) – **hinter einem Login**, ggf. erreichbar über die Webseite.

---

## 📊 Player Experience

Basierend auf der *Aesthetics of Play* analysieren wir sieben Kern-Aspekte:

1. **Entscheidung:** Kontrolle und Eigenverantwortung
2. **Konsequenz:** Spürbare Auswirkungen
3. **Kohärenz:** Logische Konsistenz
4. **Planbarkeit:** Strategische Antizipation
5. **Unwägbarkeit:** Überraschungsmomente
6. **Erfolg:** Kompetenzgefühl
7. **Variation:** Vielfalt und Wiederspielwert

---

## 🤝 Mitwirken

1. Repository forken bzw. Branch erstellen
2. Änderungen implementieren
3. Pull Request erstellen
4. Review durchführen

**Team-Rollen:** Project Management (Koordination/Strategie), Game Design (Gameplay/Player Experience), Development (Unity + HTML), Narrative (Story/Charaktere), QA (Qualitätssicherung).

---

## 📄 Lizenz

© 2026 Cusquea Games – Achim Dieterle. Alle Rechte vorbehalten (proprietär), sofern nicht anders angegeben.

---

## 📞 Kontakt

- **Studio / Project Lead:** Achim Dieterle (Cusquea Games)
- **Repository:** https://github.com/ThatOthersMayPlay/FirstResponse
- **Webpräsenz:** https://www.cusquea-games.de

---

*Letzte Aktualisierung: 2026-10-09 · Version 0.2.0 – Post-Migration*
