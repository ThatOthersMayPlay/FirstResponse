# Story JSON Manual

## Ziel
Dieses JSON-Format ist die **einzige Quelle der Wahrheit** für Story-Inhalte.
Ink-Dateien werden **automatisch generiert** und dürfen nicht manuell editiert werden.

---

## Grundprinzip
- KI erzeugt **nur JSON**
- JSON wird validiert (Schema)
- JSON wird deterministisch zu Ink konvertiert
- Ink wird von Unity zur Laufzeit genutzt

---

## Technologie-Stack
- **JSON-Parser:** Unity JsonUtility (built-in)
- **Validierung:** story.schema.json
- **Konvertierung:** JsonInkConverter.cs
- **Runtime:** Unity Ink Plugin

---

## Dateistruktur

```json
{
  "variables": {
    "fear": 0,
    "karma": 0
  },
  "knots": []
}
```

---

## JsonUtility Integration
- **Serializable:** Alle Klassen mit `[System.Serializable]` markiert
- **Deserialisierung:** `JsonUtility.FromJson<StoryData>(jsonContent)`
- **Vorteile:** Built-in, stabil, performant