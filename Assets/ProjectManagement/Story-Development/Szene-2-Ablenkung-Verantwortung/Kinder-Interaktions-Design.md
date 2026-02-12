# Lukas-Kinder Interaktions-Design

## 🎮 **Kinder-Konflikt-Mechanik**

### **Grundkonflikt:**
- **Handy-Ablenkung:** Kurze Nachrichten in regelmäßigen Abständen
- **Kinder-Streit:** Teenager hört laute Musik, stört 4-jährige Schwester
- **Spieler-Herausforderung:** Handy-Priorität vs. Kinder-Aufmerksamkeit
- **Konsequenz:** Ignorierte Konflikte führen zu Eskalation

## 📱 **Handy-Nachrichten-System**

### **Nachrichten-Typen:**
- **Ex-Frau:** Dringende Fragen zum Sorgerecht/Terminen
- **Arbeitgeber:** Bestätigungen für Vorstellungsgespräch
- **Bank:** Benachrichtigungen über Konto/Finanzen
- **Freunde:** Private Nachrichten und Einladungen

### **Nachrichten-Intervalle:**
- **Alle 30-45 Sekunden:** Neue Nachricht erscheint
- **Visuelle Indikatoren:** Vibrations-Animation, Ton-Benachrichtigung
- **Gameplay-Impact:** Spieler will Handy checken, ignoriert Kinder

## 👨‍👩‍👧‍👦 **Kinder-Streit-Szenario**

### **Auslöser:**
- **Teenager (15):** Hört laute Musik mit Kopfhörern
- **Kleinkind (4):** Wird durch Musik gestört, beschwert sich
- **Eskalation:** Streit wird lauter, fordernder

### **Spieler-Entscheidungen:**

#### **Option 1: Ignorieren (Handy-Fokus)**
- **Aktion:** Spieler ignoriert Kinder, konzentriert sich auf Handy
- **Kurzfristig:** Handy-Nutzung möglich, Nachrichten beantworten
- **Konsequenz:** Streit eskaliert, Lukas dreht Kopf zur Seite
- **Gameplay-Effekt:** Fokus auf Straße geht verloren, Unfallgefahr steigt

#### **Option 2: Schlichten (Kinder-Fokus)**
- **Aktion:** Spieler unterbricht Handy-Aktivität, wendet sich Kindern zu
- **Dialog-Option:** Einfacher elterlicher Kommentar statt ausgeklügelter Anweisung
- **Goldener Weg:** "Später darfst du auch deine Musik hören." (an 4-jährige Tochter)
- **Wirkung:** Einfache, authentische Lösung durch Normalität

#### **Option 3: Drängen (Schnelle Lösung)**
- **Aktion:** Spieler versucht schnelle, autoritäre Lösung
- **Dialog:** "Hört sofort auf damit!" oder "Seid still!"
- **Konsequenz:** Kinder werden widerspenstiger, Konflikt verschärft sich

## 🎯 **Goldener Weg - Einfache Authentizität**

### **Warum dieser Weg funktioniert:**
- **Normalität:** Keine übertriebene pädagogische Anweisung
- **Elterliche Authentizität:** Typische Alltagslösung
- **Effektivität:** Löst Konflikt durch Versprechen und Ablenkung
- **Emotionale Wirkung:** Kinder fühlen sich verstanden, nicht kommandiert

### **Implementierungs-Details:**
- **Dialog-Timing:** Kurze, prägnante Aussage
- **Stimmlage:** Ruhig, bestimmt aber nicht aggressiv
- **Kinder-Reaktion:** Sofortige Beruhigung, Musik wird leiser
- **Spieler-Belohnung:** Fokus kehrt zur Straße zurück, Sicherheit wiederhergestellt

## 🔄 **Eskalations-Mechanik**

### **Wenn Konflikt ignoriert wird:**
1. **Phase 1:** Leichter Streit, Hintergrundgeräusch
2. **Phase 2:** Lautere Streitstimmen, Ablenkung wächst
3. **Phase 3:** Lukas dreht Kopf zur Seite (automatische Animation)
4. **Phase 4:** Fokus auf Straße geht verloren, Unfallgefahr maximal

### **Visuelle Indikatoren:**
- **Streit-Lautstärke:** Visuelle Balken oder Wellen
- **Lukas' Kopfbewegung:** Automatische Animation bei Eskalation
- **Fokus-Verlust:** Blur-Effekt auf Straße verstärkt sich
- **Warn-System:** Rote Blinker bei kritischer Eskalation

## 🎵 **Audio-Design für Kinder-Konflikt**

### **Streit-Phasen:**
- **Phase 1:** Leise, diskute Stimmen im Hintergrund
- **Phase 2:** Lautere, fordernde Stimmen
- **Phase 3:** Schreien, Weinen, laute Musik
- **Phase 4:** Chaotische Geräuschkulisse

### **Lukas' Reaktionen:**
- **Ignorieren:** Tiefe Seufzer, angespannte Atmung
- **Schlichten:** Ruhige, bestimmte Stimme
- **Drängen:** Lautere, frustrierte Stimme

### **Handy-Benachrichtigungen:**
- **Kurze Töne:** Subtile Piep-Töne
- **Vibration:** Leichte Controller-Vibration
- **Visuelle Animation:** Einblendende Icons

## 📊 **Gameplay-Balance**

### **Zeit-Management:**
- **Handy-Nutzung:** 3-5 Sekunden pro Nachricht
- **Kinder-Schlichtung:** 2-3 Sekunden für einfachen Kommentar
- **Straßen-Beobachtung:** Kontinuierlich erforderlich

### **Risiko-Bewertung:**
- **Ignorieren:** Hohes Risiko, aber Handy-Vorteile
- **Schlichten:** Geringes Risiko, moderater Handy-Verlust
- **Drängen:** Mittleres Risiko, schneller zurück zur Straße

### **Spieler-Lernkurve:**
- **Anfang:** Tendenz zur Handy-Priorität
- **Erfahrung:** Erkenntnis, dass Schlichten effizienter ist
- **Meisterschaft:** Balance zwischen Handy und Kinder-Aufmerksamkeit

---

## 📝 **Implementierungs-Hinweise**

### **Ink-Integration:**
- **Choice-Index:** 1 = Ignorieren, 2 = Schlichten, 3 = Drängen
- **Story-Variablen:** `children_conflict_level`, `handy_usage_time`, `focus_lost`
- **Eskalations-Logik:** Automatisch basierend auf Zeit und Entscheidungen

### **UI-Elemente:**
- **Handy-Interface:** Nachrichtenvorschau, Antwort-Optionen
- **Kinder-Status:** Visuelle Konflikt-Anzeige
- **Fokus-Indikator:** Klarer Hinweis auf Straßen-Fokus
- **Warn-System:** Rote Blinker bei kritischer Eskalation

---

*Letzte Aktualisierung: 12.02.2026*
