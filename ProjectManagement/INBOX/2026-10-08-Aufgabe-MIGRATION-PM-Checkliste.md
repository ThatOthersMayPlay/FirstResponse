---
Titel: MIGRATION – PM/Vorbereitung (eigene Checkliste des Koordinators)
Typ: Aufgabe
Status: in_bearbeitung
Priorität: hoch
Auftraggeber: PM/WPA (Koordinator)
Agent: PM/WPA (Koordinator)
Erstellt: 2026-10-08
Fälligkeit: vor Migrationsstart
Abhängigkeiten: Green-Light aller anderen Bereiche
---

# MIGRATION – PRIORISIERT: Diese Aufgabe hat VORRANG vor allen anderen offenen Aufgaben.

## Kontext
Alle Bereiche werden in ein neues, sauber versioniertes Basisverzeichnis migriert
(`C:\Opencode-Projekte\FirstResponse`, eigenes Git-Repo). Die Handover-Aufgaben
liegen in allen anderen INBOXen. Diese Checkliste ist die PM-eigene Vorbereitung.

## PM-Checkliste (Phase 3 – erst nach Green Light der Bereiche)
- [x] Green-Light-Tabelle aller Bereiche einholen (Handover-Dateien in OUTBOXen)
      → **7/7 GREEN** geprüft am 2026-10-08: Bildererzeugung, Character-Development,
      Extern/EasyDiffusion, HTML-Prototype, Spielmechanik, Story-Development,
      StrategyInterface (je `OUTBOX/2026-10-08-Info-Migration-Handover.md`)
- [x] Rückfrage des HTML-Prototypen
      (`2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md`) beantworten
      → Antwort in dessen INBOX:
      `HTML-Prototype/INBOX/2026-10-08-Entscheidung-Antwort-Rueckfrage-Offene-Punkte.md`
      (R1–R9 entschieden; R1/R2 an Story-Development delegiert:
      `Story-Development/INBOX/2026-10-08-Aufgabe-MVP-Szene1-Ink-Und-SD-Prompts.md`;
      R9 umgesetzt: ffmpeg 9.0.2 installiert; R8 übernommen: Info ins ARCHIV)
- [x] Sicherungs-Commit im Monorepo (ungecommittete PM-Dateien + untracked Ordner)
      → `c162144`, Arbeitsbaum in `C:\Opencode-Projekte\MultiplexerBridge\FirstResponse` sauber
- [x] `Migrationsplan.md` erstellen (Mapping-Tabelle alt → neu, Copy-Liste,
      Session-Handover-Anleitung) → `ProjectManagement/Migrationsplan.md`
- [x] FirstResponse-Repo klonen (`github.com/ThatOthersMayPlay/FirstResponse`)
      → liegt in `C:\Opencode-Projekte\FirstResponse`, Commit `6256814`
- [x] Copy-Migration in die Zielstruktur (NICHT verschieben):
      `ProjectManagement/`, `Story-Development/`, `Spielmechanik/`,
      `HTML-Prototype/` (Code + Workflow), `Bildererzeugung/`, `Extern/`,
      `Character-Development/`, `StrategyInterface/`, `unity/` (Unity-Komplett,
      mit `Assets/Story/*.ink` als Single Source of Truth)
      → Verifikation 2026-10-08: `node js/verify.js` **19/19 PASS**, 14
      Handover-Dateien, 4 BRIEFINGs, `Test-Dialog.ink` vorhanden,
      **keine `.meta` außerhalb `unity/`**, `git status` sauber
- [ ] Agenten-Sitzungen Bereich für Bereich auf neue Pfade umstellen
      → **in Arbeit:** StrategyInterface-Sitzung läuft auf dem neuen Pfad;
      übrige Sitzungen laufen laut Migrationsplan §7 noch aus
- [ ] Alt-Ordner erst nach Verifikation archivieren
      → **bewusst offen** (Entscheidung 2026-10-08): Monorepo
      `C:\Opencode-Projekte\MultiplexerBridge` bleibt stehen, bis alle
      Sitzungen umgestellt sind; Verifikation selbst ist abgeschlossen

## Zielstruktur (Kurzfassung)
```
C:\Opencode-Projekte\FirstResponse\
├── ProjectManagement\      (Koordinator + zentrale Doku)
├── Story-Development\
├── Spielmechanik\
├── HTML-Prototype\         (Workflow + Code)
├── Bildererzeugung\
├── Extern\                 (+ EasyDiffusion\)
├── Character-Development\
├── StrategyInterface\
└── unity\                  (Assets, Packages, ProjectSettings)
```

## Ergebnis = Green Light
Diese Aufgabe wird erst nach abgeschlossener Migration auf `erledigt` gesetzt.

## Fortschritt 2026-10-08 (Koordinator)
- Migration ist **abgeschlossen und verifiziert** (§6 des Migrationsplans: 19/19,
  Dateizählung, `.meta`-Prüfung, `git status` sauber, Commits `c162144` + `6256814`).
- Offen bleiben nur noch **Session-Handover** (Pfade je Bereich umstellen) und
  daraus folgend die **Archivierung des Monorepos** – deshalb `in_bearbeitung`.
- Erledigt in dieser Runde: Green-Light-Tabelle, Antwort an HTML-Prototype
  (R1–R9), Sicherungs-Commit geprüft, ffmpeg bereitgestellt, Story-Aufgabe
  angelegt, `HTML-Ink-Schnittstelle.md` §3.4/§3.5 ergänzt, R8-Info archiviert.
