# Story JSON Schema - Enhanced Version

## 🎯 Ziel
Strukturierte JSON-Effects für komplexe Story-Logik mit vollständiger Ink-Kompatibilität

---

## 📊 Problem
Der aktuelle JsonInkConverter kann komplexe String-Zuweisungen nicht korrekt nach Ink konvertieren:
```json
"effects": ["player_perspective = 'text'"]  // Ink kann das nicht verarbeiten
```

---

## 🔧 Lösung: Strukturierte Effects

### **Effect-Typen:**
1. **Simple Assignment:** `"variable += 1"`
2. **String Assignment:** Strukturiertes Objekt
3. **Function Call:** `"functionName(param)"`

### **JSON-Struktur:**
```json
{
  "effects": [
    {
      "type": "assignment",
      "variable": "player_perspective",
      "value": "Regina hat Stefania verraten, Konsequenzen absehbar"
    }
  ]
}
```

---

## 🎯 Vorteile

### **1. Ink-Kompatibilität:**
- Einfache Effects bleiben unverändert
- Strukturierte Effects werden korrekt konvertiert
- Volle Kontrolle über die Konvertierung

### **2. KI-Authoring:**
- Strikte Validierung möglich
- Klare Semantik für Effect-Typen
- Erweiterbarkeit für zukünftige Features

### **3. JsonInkConverter-Anpassung:**
- Erkennung von Effect-Typen
- Spezielle Konvertierungslogik
- Fallback auf einfache Effects

---

## 📋 Implementierung

### **JsonInkConverter Erweiterung:**
```csharp
// Effect-Konvertierung
if (effect.type == "assignment")
{
    var assignment = effect as EffectAssignment;
    sb.AppendLine($"~ {assignment.variable} = \"{assignment.value}\"");
}
else if (effect.type == "function")
{
    var func = effect as EffectFunction;
    sb.AppendLine($"~ {func.name}({string.Join(", ", func.parameters)})");
}
else
{
    // Fallback: Einfacher String
    sb.AppendLine($"~ {effect.effect}");
}
```

### **Klassen-Struktur:**
```csharp
[System.Serializable]
public class EffectBase { public string type; }

[System.Serializable]
public class EffectAssignment : EffectBase
{
    public string variable;
    public string value;
}

[System.Serializable]
public class EffectFunction : EffectBase
{
    public string name;
    public string[] parameters;
}
```

---
*Enhanced Story JSON Schema: 28.02.2026*  
*Status: Konzept entwickelt, Implementierung erforderlich*
