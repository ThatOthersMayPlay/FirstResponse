---
Titel: MIGRATION – PM/Vorbereitung (eigene Checkliste des Koordinators)
Typ: Aufgabe
Status: offen
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
- [ ] Green-Light-Tabelle aller Bereiche einholen (Handover-Dateien in OUTBOXen)
- [ ] Rückfrage des HTML-Prototypen
      (`2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md`) beantworten
- [ ] Sicherungs-Commit im Monorepo (ungecommittete PM-Dateien + untracked Ordner)
- [ ] `Migrationsplan.md` erstellen (Mapping-Tabelle alt → neu, Copy-Liste,
      Session-Handover-Anleitung)
- [ ] FirstResponse-Repo klonen (`github.com/ThatOthersMayPlay/FirstResponse`)
- [ ] Copy-Migration in die Zielstruktur (NICHT verschieben):
      `ProjectManagement/`, `Story-Development/`, `Spielmechanik/`,
      `HTML-Prototype/` (Code + Workflow), `Bildererzeugung/`, `Extern/`,
      `Character-Development/`, `StrategyInterface/`, `unity/` (Unity-Komplett,
      mit `Assets/Story/*.ink` als Single Source of Truth)
- [ ] Agenten-Sitzungen Bereich für Bereich auf neue Pfade umstellen
- [ ] Alt-Ordner erst nach Verifikation archivieren

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
