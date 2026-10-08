# Unity JsonUtility - Regeln & Einschränkungen

## 🎯 **Ziel**
Verständnis der Unity JsonUtility Einschränkungen für robustes JSON-Design

---

## ✅ **Unterstützte JSON-Strukturen**

### **Primitive Types**
```json
{
  "intValue": 42,
  "stringValue": "text",
  "boolValue": true,
  "floatValue": 3.14
}
```

### **Collections**
```json
{
  "arrayValue": [1, 2, 3],
  "listValue": ["a", "b", "c"],
  "dictionaryValue": {"key1": "value1", "key2": 42}
}
```

### **Mixed Type Dictionary**
```json
{
  "variables": {
    "intValue": 42,
    "stringValue": "text",
    "boolValue": true
  }
}
// C# Klasse (NICHT empfohlen für Unity JsonUtility):
public Dictionary<string, object> variables;

// BESSER für Unity JsonUtility:
public StoryVariables {
    public int intValue;
    public string stringValue;
    public bool boolValue;
}
```

### **Nested Objects**
```json
{
  "nestedObject": {
    "property": "value",
    "child": {
      "deepProperty": "deepValue"
    }
  }
}
```

---

## ❌ **Nicht unterstützte Strukturen**

### **Polymorphismus**
```json
// NICHT UNTERSTÜTZT:
{
  "polymorphicValue": {
    "type": "string",
    "value": "text"
  }
}
```

### **Dynamic Keys**
```json
// NICHT UNTERSTÜTZT:
{
  "dynamicKeys": {
    "1": "value1",
    "2": "value2",
    "complexKey": {"nested": "object"}
  }
}
```

### **Circular References**
```json
// NICHT UNTERSTÜTZT:
{
  "parent": {"child": {"parent": "..."}}
}
```

---

## 🔧 **Best Practices für Unity JsonUtility**

### **1. Serializable Klassen**
```csharp
[System.Serializable]
public class StoryData
{
    public string stringValue;
    public int intValue;
    public List<StoryKnot> knots;
}
```

### **2. Dictionary Keys**
```csharp
// NUR string keys:
public Dictionary<string, int> variables; // ✅ (einheitliche Typen)
public Dictionary<string, object> variables; // ❌ (gemischte Typen problematisch)
public StoryVariables variables; // ✅ (strukturiert, Unity-kompatibel)
public Dictionary<int, string> wrongKeys; // ❌
```

### **3. Collections**
```csharp
// Arrays und Lists:
public string[] stringArray; // ✅
public List<string> stringList; // ✅
public List<object> mixedTypes; // ❌
public Dictionary<string, object> mixedVariables; // ❌
public StoryVariables structuredVariables; // ✅
```

---

## 📋 **Validierungsregeln**

### **Struktur-Validierung**
- [x] Alle Klassen mit `[System.Serializable]` markiert
- [x] Dictionary Keys sind immer `string`
- [x] Collections haben einheitliche Typen
- [x] Keine polymorphen Strukturen

### **Business-Logik Validierung**
- [x] Alle Knoten-IDs sind eindeutig
- [x] Alle Choice-Targets existieren als Knoten
- [x] Variablen sind vor der Verwendung definiert
- [x] Keine zyklischen Verweise

### **Unity-spezifische Validierung**
- [x] JsonUtility kann deserialisieren
- [x] Keine unsupported Types
- [x] Struktur ist serialisierbar

---

## 💡 **Empfehlungen**

### **Für Story-JSON:**
1. **Einfache Struktur:** Nur primitive Types und Serializable Klassen
2. **String Keys:** Alle Dictionary Keys als `string`
3. **Einheitliche Typen:** Collections mit einem Typ
4. **Validierung:** Vor der Konvertierung prüfen

### **Für JsonInkConverter:**
1. **Schema-Validierung:** story.schema.json verwenden
2. **Business-Logik:** Knoten-IDs und Targets prüfen
3. **Unity-Kompatibilität:** JsonUtility-Tests durchführen

---
*Unity JsonUtility Regeln: 28.02.2026*  
*Status: Validierungstool implementiert*
