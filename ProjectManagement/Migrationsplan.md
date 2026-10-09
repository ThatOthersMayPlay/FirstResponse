# Migrationsplan – Umzug ins neue Basisverzeichnis

**Erstellt:** 2026-10-08 (PM/WPA)
**Quelle:** `C:\Opencode-Projekte\MultiplexerBridge\FirstResponse` (Monorepo, Sicherungs-Commit `c162144`)
**Ziel:** `C:\Opencode-Projekte\FirstResponse` (Repo `ThatOthersMayPlay/FirstResponse`, frischer Klon)
**Verfahren:** **Copy** (nicht Move) – der Monorepo-Ordner bleibt unverändert bestehen, bis alle Sitzungen umgezogen sind.

---

## 1. Mapping-Tabelle (alt → neu)

| Alt (Monorepo) | Neu (Basisverzeichnis) |
|---|---|
| `Assets/ProjectManagement/*.md` (zentrale Doku) | `ProjectManagement/` |
| `Assets/ProjectManagement/INBOX/OUTBOX/ARCHIV` | `ProjectManagement/INBOX/OUTBOX/ARCHIV` |
| `Assets/ProjectManagement/Sprint-2-Story-Integration/` | `ProjectManagement/Sprint-2-Story-Integration/` (Unterlage) |
| `Assets/ProjectManagement/Character-Development/` | `Character-Development/` (Wurzel) |
| `Assets/ProjectManagement/Story-Development/` (Workflow) **+** `Assets/Story-Development/` (Inhalte) | `Story-Development/` (zusammengeführt) |
| `Assets/ProjectManagement/HTML-Prototype/` (Workflow) **+** `Assets/HTML-Prototype/` (Code) | `HTML-Prototype/` (zusammengeführt) |
| `Assets/ProjectManagement/Spielmechanik/` | `Spielmechanik/` |
| `Assets/ProjectManagement/Bildererzeugung/` | `Bildererzeugung/` |
| `Assets/ProjectManagement/Extern/` | `Extern/` |
| `Assets/ProjectManagement/StrategyInterface/` | `StrategyInterface/` – **EINGEFROREN** (siehe §4) |
| `Assets/` (restlich: Ink, Scripts, Story, TextMesh Pro) | `unity/Assets/` |
| `Packages/` | `unity/Packages/` |
| `ProjectSettings/` | `unity/ProjectSettings/` |
| `.github/`, `.windsurf/`, `README.md`, `.gitignore`, `unity-processes.*` | Repo-Wurzel (bleibt) |

## 2. Was entfällt

- **Alle `.meta`-Dateien außerhalb `unity/`** – die Bereiche verlassen Unitys `Assets/`. In `unity/` bleiben sie unverändert (Unity-Projekt 1:1).
- `Assets/ProjectManagement.meta`, `Assets/Story-Development.meta` (hinfällig).
- Der geklonte Alt-Stand von `FirstResponse/Assets/` wird ersetzt (Quelle: GitHub, jederzeit abrufbar).

## 3. Pfad-Anpassungen (funktional notwendig)

1. **`.gitignore`:** pfadbezogene Patterns `Assets/…`, `Packages/…`, `ProjectSettings/…` → `unity/Assets/…` etc. (generische Patterns wie `[Ll]ibrary/` bleiben).
2. **`HTML-Prototype/config.js`:** `story.path` → `../unity/Assets/Story/Test-Dialog.ink` (Story bleibt Single Source of Truth in `unity/Assets/Story/`, Ink-for-Unity braucht sie dort; der Prototyp referenziert per relativem Pfad).
3. Leere Ordner behalten `.gitkeep`.

## 4. StrategyInterface (Entscheidung laut Handover)

> **Nachtrag (2026-10-09):** Die Einfrierung wurde aufgehoben. StrategyInterface
> wird zur **internen Arbeits-Plattform (hinter Login)** ausgebaut; `STATUS.md`,
> `BRIEFING.md` und `INBOX/OUTBOX/ARCHIV` sind aktiv. Der folgende Abschnitt
> beschreibt den ursprünglichen Migrationsstand (2026-10-08), der weiterhin als
> Referenz dient.

- **Eingefroren:** Bereich wandert mit `ARCHIV/` (alle Inhalte) + `OUTBOX/` (Handover) + `STATUS.md` = „EINGEFROREN".
- **Ausnahme:** `FirstResponseStrategy.md` wandert in den **aktiven Bestand** → `ProjectManagement/FirstResponseStrategy.md`.
- Keine INBOX (eingefroren = keine neuen Aufgaben).

## 5. Nicht enthalten / bewusst offen

- **`.github/workflows/static.yml`** bleibt bestehen, wird aber **nicht genutzt** (Entscheidung 2026-10-08: keine GitHub-Workflows/Pages fürs HTML-Prototyp-Setup). Entfernung auf Wunsch jederzeit möglich.
- **EasyDiffusion-Tool** (`C:\EasyDiffusion`) bleibt extern, migriert nicht.
- **Monorepo-Ordner** `C:\Opencode-Projekte\MultiplexerBridge` bleibt bis zum Session-Handover unverändert stehen.

## 6. Verifikation nach der Copy

- [ ] `node js/verify.js` im neuen `HTML-Prototype/` (19/19 erwartet)
- [ ] Kritische Dateien gezählt (Handover-Dateien, BRIEFINGs, `*.ink`, `Test-Dialog.ink`)
- [ ] Keine `.meta` außerhalb `unity/`
- [ ] `git status` im neuen Repo – dann Commit

## 7. Session-Handover (letzter Schritt)

Neue Sitzungen starten im neuen Basisverzeichnis `C:\Opencode-Projekte\FirstResponse`.
Satz je Bereich: *„Dein Arbeitsbereich ist ab sofort `C:\Opencode-Projekte\FirstResponse\<Bereich>`. Lies `BRIEFING.md` und prüfe deine INBOX."*
Der Monorepo-Ordner wird **erst danach** archiviert.
