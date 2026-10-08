# Extern – Kanal für externe Stakeholder (Briefing)

**Dieser Ordner ist der Kommunikationskanal zwischen Projekt „First Response" und
Stakeholdern, die NICHT zu unseren Projekt-Agenten gehören.**

---

## 1. Zweck

Unsere internen Agenten (Character-Development, Story-Development, Spielmechanik,
HTML-Prototype, Bildererzeugung …) arbeiten **innerhalb** des Projekts.
`Extern/` ist dagegen der Kanal für Dritte, die ihre **eigene** Entwicklung,
ihr eigenes Tool oder ihren eigenen Arbeitsstand haben – z. B.:

- `EasyDiffusion/` → die Entwicklung des EasyDiffusion-Tools (`C:\EasyDiffusion`)
- (weitere Stakeholder bei Bedarf anlegen, gleiche Struktur)

---

## 2. Struktur pro Stakeholder

```
Extern/<Stakeholder>/
├── INBOX/     ← Aufgaben/Anfragen, die WIR an den Stakeholder stellen
├── OUTBOX/    ← Antworten/Ergebnisse/Rückfragen DES Stakeholders
└── STATUS.md  ← aktueller Entwicklungsstand / Notiz zur Erreichbarkeit
```

Zusätzlich kann pro Stakeholder ein eigenes `BRIEFING.md` ergänzt werden, wenn
die Zusammenarbeit komplexer wird.

---

## 3. Regeln

1. **Auftrag an Externe:** Datei in `Extern/<Stakeholder>/INBOX/`, gleiche
   Kopfzeilen wie im `../Agenten-Workflow.md` (Titel, Typ, Status, Priorität,
   Auftraggeber, Agent, Erstellt …).
2. **Antwort des Stakeholders:** landet in `Extern/<Stakeholder>/OUTBOX/`.
   Der Koordinator übernimmt sie von dort (Status `abgeschlossen` → ARCHIV).
3. **Externe ändern nichts in unseren Bereichen.** Sie liefern Ergebnisse über
   OUTBOX oder direkt ins Repo, je nach Absprache.
4. **Tool-Entwicklung ist kein Projekt-Task.** Der Entwicklungstand des Tools
   wird in `STATUS.md` des Stakeholders gespiegelt, nicht in unserem Backlog.
5. **Kein Versionieren von Fremdcode/Tools** in unserem Repo – nur Absprachen,
   Aufträge und Ergebnisse.

---

## 4. Laufende Stakeholder

| Stakeholder | Zweck | Tool/Standort |
|---|---|---|
| `EasyDiffusion/` | Entwicklung/Betrieb des Bild-Generierungstools | `C:\EasyDiffusion` (eigenes Git, extern) |

---

*Kanal erstellt: 2026-10-08*
*Geltungsbereich: Assets/ProjectManagement/Extern/*
