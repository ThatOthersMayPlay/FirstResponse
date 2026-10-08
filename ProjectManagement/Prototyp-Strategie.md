# Prototyp-Strategie - First Response Action-Adventure

## 🎯 Ziel: Schneller erlebbarer Prototyp für Action-Adventure-Erfahrung

**Status:** Strategische Neuausrichtung 2026-08-15 – HTML-first MVP  
**Letzte Aktualisierung:** 2026-08-15

---

## 🚀 STRATEGIEWECHSEL: HTML-first Schnellspielbarer MVP

### Neue Kernstrategie (ab 2026-08-15)
1. **Schnellspielbarer MVP im Browser:** Point&Click-Version komplett als HTML-Prototyp (`Assets/HTML-Prototype/`), sofort spielbar über GitHub Pages – ohne Unity-Build, ohne Installation.
2. **Ink bleibt die einzige Story-Quelle:** Dialoge & Charakter-Entwicklungen werden in Ink (`Assets/Story/*.ink`) gespeichert. HTML (inkjs) und Unity konsumieren dieselbe Story.
3. **Schnittstelle:** [HTML-Ink-Schnittstelle.md](HTML-Ink-Schnittstelle.md) definiert das verbindliche Interface (Point&Click-Canvas, Hotspots, Choice-Rendering).
4. **Story-Fokus konsolidiert:** Maßgeblich sind die MVP-Szenen aus Backlog Epic 16 – **Szene 1 „Unfall-Schock & Führung" (Regina)** und **Szene 2 „Ablenkung & Verantwortung" (Lukas)**. Das unten beschriebene Auto-Teaser-Szenario ist **nicht** mehr Teil des MVP-Kerns.

### Abgrenzung zu diesem Dokument
Die folgenden Abschnitte (Action-Elemente, Atmosphäre, Stressfaktoren) bleiben als **Design-Ressource** für die Unity-Vollversion erhalten. Für den HTML-MVP gilt reduzierter Fokus:
- Point&Click-Interaktion statt freier 3D-Action
- Emotionale Dichte & Entscheidungen (Epic 16) statt Unfall-Simulation
- Statische Szenen-Bilder + Hotspots statt Unity-Lighting/Physik

### MVP-Erfolgskriterien (neu)
- [ ] MVP ist im Browser ohne Installation spielbar (GitHub Pages)
- [ ] MVP ist in unter 5 Minuten erlebbar
- [ ] Szene 1 (Regina) funktioniert als HTML-Point&Click
- [ ] Story-Verzweigungen identisch zu Unity (inkjs)
- [ ] Keine Story-Logik im HTML-Code

---

## 🎮 Grundlegende Elemente für Action-Adventure Prototyp

### 🔥 Action-Spürbarkeit

#### 1. Zeitdruck & Dringlichkeit
- **Countdown-Timer** für kritische Entscheidungen
- **Sich verschlechternde Zustände** (Verletzungen, Bewusstsein)
- **Umwelt-Veränderungen** (z.B. drohende Explosion, Wetterwechsel)

#### 2. Sofortige Konsequenzen
- **Sichtbare Reaktionen** auf Entscheidungen (Blut, Panik, Rettung)
- **Audio-Feedback** (Schreie, Herzschlag, Atemnot)
- **Visuelle Effekte** (Blutverlust, Schockzustände)

#### 3. Interaktive Umwelt
- **Zerstörbare Objekte** (Autoscheiben, Türen)
- **Nutzbare Gegenstände** (Erste-Hilfe-Kasten, Werkzeug)
- **Dynamische Hindernisse** (Feuer, Trümmer)

### 🌫️ Atmosphäre & Story

#### 1. Emotionale Inszenierung
- **Charakter-Stimmen** (Panik, Schmerz, Hoffnung)
- **Musik-Score** (spannend, emotional, dringlich)
- **Kamera-Effekte** (Handheld, Zoom, Slow-Motion)

#### 2. Story-Kontext
- **Kurze Charakter-Backstories** (wer sind diese Menschen?)
- **Sofortige emotionale Bindung** (Familie, Freunde)
- **Moralisches Dilemma** (wen retten zuerst?)

#### 3. Umwelt-Storytelling
- **Visuelle Hinweise** (Foto im Handschuhfach, Kindersitz)
- **Audio-Logs** (Radio-Nachrichten, Notrufe)
- **Umwelt-Details** (blutige Kleidung, zerbrochener Spiegel)

---

## 🎯 Minimaler Prototyp - Was brauchen wir WIRKLICH?

### Essenziell für Sprint 1:
1. **Teaser-Szene** - Andeutung von Autobahn/Verkehr/Gefahr (vor dem Unfall)
2. **2-3 Charaktere** - im Auto unterwegs, normale Konversation
3. **1 Vor-Entscheidung** - Route wählen, Musik ändern, Tempo anpassen
4. **Subtile Spannung** - aufkommendes Unwetter, Verkehrsdichte
5. **Übergang** - mündet in Beginn der Hauptunfallsszene

> **⚠️ Hinweis (2026-08-15):** Dieses Auto-Teaser-Szenario ist durch die HTML-first-Strategie **ersetzt** durch die MVP-Szenen Regina (Szene 1) und Lukas (Szene 2) aus Backlog Epic 16. Der Abschnitt bleibt als Design-Ressource für die Vollversion erhalten.

### Nice-to-have für Sprint 2:
1. **Multiple Endings** - basierend auf Vor-Entscheidungen
2. **Charakter-Switching** - zwischen Perspektiven wechseln
3. **Erweiterte Interaktion** - Gegenstände verwenden
4. **Atmosphärische Effekte** - Regen, Blitz, Donner

---

## 💡 Prototyp-Prioritäten

### Phase 1 (Woche 1):
- [ ] **Teaser-Szene** - Autofahrt auf Autobahn (vor dem Unfall)
- [ ] **2-3 Charaktere** mit einfachen Dialogen
- [ ] **1 Vor-Entscheidung** (Route, Musik, Tempo)
- [ ] **Subtile Spannung** (Wetter, Verkehr)

### Phase 2 (Woche 2):
- [ ] **Übergang zur Unfallsszene** implementieren
- [ ] **2. Vor-Entscheidung** mit Konsequenzen
- [ ] **Atmosphärische Audio-Elemente**
- [ ] **Einfache Animationen**

### Phase 3 (Woche 3):
- [ ] **Teaser-Endings** implementieren
- [ ] **Charakter-Switching** testen
- [ ] **Polish & Feedback** einarbeiten

---

## 🚀 Quick-Win Elemente

### Höchste Impact, niedrigster Aufwand:
1. **Dialog-System** - emotionale Charakter-Interaktion
2. **Audio-Design** - Radio, Wetter, Geräuschkulisse
3. **Licht & Schatten** - Tageszeit, Stimmung
4. **Kamera-Work** - einfache Perspektiven-Wechsel
5. **UI-Elemente** - Entscheidungs-Interface

---

## 🎯 Stressfaktoren mit minimalem Aufwand

### 💡 Niedrig-Aufwand, Hoher-Impact:
1. **Handy am Steuer** - Ablenkung, Entscheidung (antworten oder ignorieren)
2. **Licht-Wechsel** - Sonne → bewölkt (einfache Lighting-Änderung)
3. **Radio-Nachrichten** - Verkehrsmeldungen, Wetterwarnungen
4. **Verkehrsdichte** - mehr Autos, langsamer werdend
5. **Uhrzeit-Druck** - spät werden, Termin-Druck

### 🌫️ Atmosphärische Vorboten (statt Gewitter):
1. **Wind aufziehen** - Blätter bewegen, Äste knarren
2. **Temperatur-Wechsel** - kühler werdend, Zugluft
3. **Himmel verdunkeln** - Wolken aufziehen (kein Blitz)
4. **Geräuschkulisse** - ferne Donner (nicht sichtbar)
5. **Tiere verstummen** - Vögel werden leise

### 📱 Gameplay-Stressfaktoren:
1. **Handy-Benachrichtigung** - wichtige Nachricht vs. Konzentration
2. **Navigationssystem** - alternative Route vorschlagen
3. **Tank-Warnung** - bald tanken müssen
4. **Müdigkeit** - Gähnen, Augen reiben (Animation)
5. **Gesprächs-Druck** - Charakter will etwas Wichtiges sagen

### 🎵 Audio-Stressfaktoren:
1. **Radio-Unterbrechung** - wichtige Nachricht
2. **Musik wird lauter/leiser** - unkontrolliert
3. **Motor-Geräusch** - ungewöhnliches Geräusch
4. **Reifen-quietschen** - anderer Fahrer
5. **Hupen** - impatiente Fahrer

---

## 🤔 Offene Entscheidungen

### 🎯 Teaser-Szenario-Auswahl:
- **Option A:** Autobahnfahrt bei Einbruch der Dämmerung (klassisch, aufbauend)
- **Option B:** Landstraße durch Wald (isoliert, mysteriös)
- **Option C:** Stadtverkehr bei Regen (chaotisch, realistisch)

### 👥 Charakter-Konstellation:
- **Option A:** Familie (Vater, Mutter, Teenager)
- **Option B:** Freunde (3 junge Erwachsene auf Ausflug)
- **Option C:** Kollegen (Arbeitsweg nach Schicht)

### ⏱️ Spannungs-Aufbau:
- **Option A:** Licht-Wechsel (Sonne → bewölkt) + Handy-Ablenkung
- **Option B:** Verkehrsdichte (frei → Stau) + Radio-Warnungen
- **Option C:** Zeitdruck (spät dran) + Navigation-Konflikte

### 🎭 Vor-Entscheidungstyp:
- **Option A:** Route wählen (Autobahn vs. Landstraße)
- **Option B:** Tempo anpassen (schnell vs. sicher)
- **Option C:** Unterhaltung (Musik vs. Gespräch)

---

## 📋 Nächste Schritte

### Sofortige Entscheidungen:
1. **Teaser-Szenario finalisieren** - Welche Autofahrt-Szene?
2. **Charaktere definieren** - Wer sind die Protagonisten?
3. **Vor-Entscheidung** - Was ist die erste wichtige Wahl?
4. **Spannungs-Aufbau** - Wie erzeugen wir subtile Spannung?

### Technische Grundlagen:
1. **Unity-Szene Setup** - Autofahrt-Umgebung
2. **Charakter-Controller** - Dialog-Interaktion
3. **Dialog-System** - Einfache Textauswahl
4. **Audio-System** - Radio, Wetter, Geräusche

### Asset-Strategie:
1. **Szenen-Bilder via Stable Diffusion (lokal, API)** - Erzeugung direkt über lokale SD-Instanz, siehe [Asset-Generierung-StableDiffusion.md](Asset-Generierung-StableDiffusion.md)
2. **Placeholder Assets** - Auto-Modell, Straße, Himmel (falls über Bilder hinaus nötig)
3. **Sound Library** - Radio-Musik, Wetter-Geräusche
4. **Lighting Setup** - Tageszeit, Stimmung
5. **UI-Elemente** - Entscheidungs-Interface

---

## 🔄 Review-Prozess

### Tägliche Check-ins:
- **Morgen:** Ziel für den Tag definieren
- **Mittag:** Fortschritt-Review
- **Abend:** Ergebnisse dokumentieren

### Wöchentliche Reviews:
- **Freitag:** Prototyp-Demo
- **Feedback-Sammlung**
- **Nächste Woche planen**

---

## 📝 Notizen & Ideen

#### Stressfaktoren-Implementierung:
- **Handy am Steuer:** UI-Overlay, Entscheidung beeinflusst Konzentration
- **Licht-Wechsel:** Unity Lighting, einfache Skybox-Änderung
- **Radio-Nachrichten:** Audio-Clips, Unterbrechung der Musik
- **Verkehrsdichte:** mehr Autos im Hintergrund, langsamer werdend
- **Uhrzeit-Druck:** UI-Element, Countdown zu wichtigem Termin

#### Atmosphärische Vorboten:
- **Wind aufziehen:** Particle System für Blätter/Bewegung
- **Temperatur-Wechsel:** Audio (Zugluft), Charakter-Animation
- **Himmel verdunkeln:** Skybox-Wechsel, keine Blitz-Effekte
- **Ferne Donner:** Audio-only, keine visuellen Effekte
- **Tiere verstummen:** Audio-Mix anpassen

*Hier Platz für neue Ideen, Diskussionen und Entscheidungen...*

---

## 🎯 Erfolgskriterien für Prototyp

### Minimum Viable Product:
- [ ] Spieler fühlt sich in Autofahrt-Szene involviert
- [ ] Vor-Entscheidung hat spürbare Konsequenzen
- [ ] Atmosphäre der Gefahr/Unfall ist spürbar
- [ ] Teaser ist in 10 Minuten erlebbar
- [ ] Übergang zur Hauptunfallsszene funktioniert

### Stretch Goals:
- [ ] Spieler wollen wissen was passiert
- [ ] Emotionale Bindung zu Charakteren entsteht
- [ ] Spannungsaufbau wirkt natürlich
- [ ] Multiple Teaser-Endings zeigen Unterschiede

---

*Dieses Dokument wird kontinuierlich aktualisiert während der Prototyp-Entwicklung.*
