# Product Backlog - First Response

## Epics

### Epic 16: MVP-Szenen (Emotional dichte Erste-Hilfe-Erlebnisse)
**Ziel:** Zwei konkrete Szenen mit 100% spürbarer emotionaler Dichte für Games BW Förderungs-MVP

> **Hinweis:** Dieses Epic umfasst die zwei Kernszenen des MVP mit innovativen Gameplay-Mechaniken und emotionaler Tiefe. Jede Szene trainiert gezielt 2-3 Kern-Aspekte der Aesthetics of Play.

#### User Stories:
- Als Spieler möchte ich in Szene 1 ein echtes moralisches Dilemma erleben (Stefania vs. Erste-Hilfe)
- Als Spieler möchte ich in Szene 2 den Konzentrationskonflikt bei der Autofahrt spüren (Lukas)
- Als Designer möchte ich Fokuswechsel-Mechaniken implementieren können
- Als KI-Nutzer möchte ich Szenen-Assets und Dialoge generieren lassen
- Als QA möchte ich emotionale Dichte und spürbare Spannung validieren können

#### Akzeptanzkriterien:
- [ ] Szene 1 "Unfall-Schock & Flucht" mit Stefania/Regina ist implementiert
- [ ] Szene 2 "Ablenkung & Verantwortung" mit Lukas/Kinder ist implementiert
- [ ] Fokuswechsel-Mechanik in Szene 2 funktioniert (Handy vs. Straße)
- [ ] Ink-basierte Dialoge mit Entscheidungsverzweigungen sind integriert
- [ ] Emotionale Dichte und spürbare Spannung sind nachweisbar
- [ ] Point&Click-Interaktion mit Hotspots funktioniert in beiden Szenen
- [ ] Audio-Design mit emotionaler Wirkung ist implementiert

#### Technical Tasks:
- Szene 1: Verkehrsunfall mit Stefania/Regina Dialog-System
- Szene 2: Autofahrt mit Fokuswechsel-Filter und Hintergrundvideo
- Ink-Integration für beide Szenen-Dialoge
- Unity UI Canvas mit Hotspots für beide Szenen
- Audio-System für emotionale Immersion
- Fokus-Filter-System für Szene 2 (Blur-Effekte)
- KI-generierte Assets als Platzhalter
- Entscheidung-Logging und Konsequenz-System

---

### Epic 15: Point&Click-System (Unity-Standardmittel)
**Ziel:** KI-gestütztes MVP für narratives Action-Adventure mit statischen Szenen und interaktiven Hotspots

> **Hinweis:** Dieses Epic nutzt Unity-Standardmittel für schnelle Iteration. Fokus auf verzweigte Entscheidungen, nicht auf klassische Adventure-Mechanik. Point&Click dient als reines Erzähl-Interface für komplexe Story-Strukturen.

#### User Stories:
- Als Entwickler möchte ich schnell statische Szenen mit interaktiven Hotspots erstellen können
- Als Designer möchte ich Story-kritische Quick-Decisions ohne komplexe Programmierung umsetzen können
- Als Spieler möchte ich klare, visuelle Entscheidungs-Optionen mit Hover-Feedback erhalten
- Als KI-Nutzer möchte ich Hotspot-Patterns automatisiert generieren lassen
- Als QA möchte ich Story-Flüsse schnell über visuelle Interfaces testen können

#### Akzeptanzkriterien:
- [ ] Unity UI Canvas-basiertes System ist implementiert
- [ ] Statische Hintergrundbilder mit überlagerten Hotspots funktionieren
- [ ] Zwei Hotspot-Typen: Bild+Text und reine Outline-Schaltflächen
- [ ] Hover-Visualisierung mit klarem Feedback ist implementiert
- [ ] Klick-Events triggern Ink-Choices und Szenenübergänge
- [ ] Story-State-gesteuerte Hotspot-Aktualisierung funktioniert
- [ ] EKG-animierte Outline-Hotspots (Nice-to-have) sind optional
- [ ] Kein Inventar, Movement oder Physik (reiner Story-Fokus)

#### Technical Tasks:
- Unity UI Canvas mit Image/Text Buttons einrichten
- Transparente Hitboxen mit Outline-Visualisierung entwickeln
- Ink-Integration für ChooseChoiceIndex() implementieren
- Story-State-Lese-System für Hotspot-Aktualisierung
- Hover-Effekt-System mit visuellem Feedback
- EKG-Animation via LineRenderer oder UI-Shader (optional)
- Szenen-Management-System für Hintergrundbilder
- KI-generierbare Hotspot-Patterns erstellen

---

### Epic 14: Ink-Dialogsystem (MVP-Kernkomponente)
**Ziel:** KI-kompatibles Dialogsystem mit Ink für Games BW Förderungs-MVP

> **Hinweis:** Dieses Epic ist eine Hauptsäule für das MVP zur Produktvorstellung für die Spiele-Förderung. Ink bietet textuelle Syntax, hohe KI-Kompatibilität und stabile Unity-Integration.

#### User Stories:
- Als Entwickler möchte ich Dialoge in einfacher Textsyntax schreiben können
- Als Writer möchte ich Story-Verzweigungen ohne Code-Kenntnisse erstellen können
- Als KI-Nutzer möchte ich Dialoge automatisiert generieren und validieren lassen
- Als Spieler möchte ich Entscheidungen mit spürbaren Konsequenzen erleben
- Als QA möchte ich Dialog-Flüsse schnell testen und debuggen können

#### Akzeptanzkriterien:
- [ ] Ink-Integration in Unity ist implementiert und stabil
- [ ] Dialog-System unterstützt Verzweigungen und Bedingungen
- [ ] Entscheidungs-Speicherung beeinflusst nachfolgende Dialoge
- [ ] KI-generierte Dialoge können importiert und validiert werden
- [ ] Point&Click-Integration mit Dialog-Optionen funktioniert
- [ ] Audio-Integration (gesprochene Dialoge) ist vorbereitet
- [ ] Debug-Tools für Dialog-Testing sind verfügbar
- [ ] Automatisierte Validierung von Ink-Syntax ist implementiert

#### Technical Tasks:
- Unity Ink-Plugin einrichten und konfigurieren
- Dialog-Manager für Ink-Integration entwickeln
- Entscheidungs-Tracking mit Story-Variablen
- Point&Click-UI mit Dialog-Optionen verbinden
- KI-Dialog-Import und Validierungs-Tools
- Audio-System für gesprochene Dialoge
- Debug-Visualisierung für Dialog-Flüsse
- Performance-Optimierung für mobile Geräte

---

### Epic 1: Prototyp - Action-Adventure Unfallszene im Stil von Detroit: Become Human
**Ziel:** Spannungsgeladene Action-Adventure-Erfahrung mit subtiler Erste-Hilfe-Integration in 2-3 Sprints erreichbar

> **Hinweis:** Das Spiel kombiniert Action-Adventure-Elemente mit realistischen Erste-Hilfe-Szenarien. Die Erste-Hilfe-Maßnahmen sind natürlich in die Story eingebettet und nicht als Lernmodul erkennbar.

#### User Stories:
- Als Spieler möchte ich eine spannende, action-orientierte Unfallszene erleben
- Als Spieler möchte ich bedeutungsvolle Entscheidungen mit Konsequenzen treffen
- Als Spieler möchte ich Charaktere aus verschiedenen Perspektiven steuern
- Als Spieler möchte ich realistische Erste-Hilfe-Maßnahmen als natürlichen Teil der Story durchführen
- Als Spieler möchte ich mich durch die Atmosphäre und Spannung gefangen fühlen
- Als Entwickler möchte ich ein System für multiple Charakter-Perspektiven erstellen

#### Akzeptanzkriterien:
- Eine spielbare, spannungsgeladene Unfallszene mit Action-Elementen
- Mindestens 2-3 steuerbare Charaktere mit unterschiedlichen Perspektiven
- Bedeutungsvolle Entscheidungen mit spürbaren Konsequenzen (Detroit: Become Human Stil)
- Subtil integrierte Erste-Hilfe-Maßnahmen als natürlicher Story-Teil
- Atmosphärische Inszenierung mit Spannungsbogen
- Grundlegendes Entscheidungssystem mit Verzweigungen
- Platzhalter-Assets für schnellen Prototypen

---

### Epic 2: Charakter-Perspektiven-System
**Ziel:** Mehrere spielbare Charaktere mit unterschiedlichen Sichtweisen

#### User Stories:
- Als Spieler möchte ich zwischen verschiedenen Charakteren wechseln können
- Als Spieler möchte ich die Geschichte aus verschiedenen Perspektiven erleben
- Als Spieler möchte ich charakter-spezifische Entscheidungen treffen
- Als Spieler möchte ich die Auswirkungen meiner Rolle auf die Geschichte verstehen

#### Akzeptanzkriterien:
- [ ] Mindestens 3 Charaktere sind spielbar
- [ ] Wechsel zwischen Charakteren ist nahtlos möglich
- [ ] Jeder Charakter hat einzigartige Perspektive auf Ereignisse
- [ ] Charakter-spezifische Dialogoptionen sind verfügbar
- [ ] Visuelle Unterscheidung der Charakter-Perspektiven

---

### Epic 3: Erweiterte Erste-Hilfe-Simulation
**Ziel:** Komplette Erste-Hilfe-Maßnahmen mit realistischer Simulation

#### User Stories:
- Als Spieler möchte ich Vitalfunktionen überprüfen können
- Als Spieler möchte ich Reanimation durchführen können
- Als Spieler möchte ich die stabile Seitenlage anwenden können
- Als Spieler möchte ich Verbände anlegen können
- Als Spieler möchte ich Schocklagerung durchführen können
- Als Spieler möchte ich Feedback zur Korrektheit meiner Maßnahmen erhalten

#### Akzeptanzkriterien:
- [ ] Alle 5 Erste-Hilfe-Maßnahmen sind implementiert
- [ ] Schritt-für-Schritt Anleitungen sind verfügbar
- [ ] Realistische Simulation der medizinischen Prozesse
- [ ] Feedback-System für korrekte/inkorrekte Maßnahmen
- [ ] Schwierigkeitsgrade für verschiedene Kenntnisstände

---

### Epic 4: Dynamisches Story-System
**Ziel:** Verzweigte Story mit langfristigen Konsequenzen

> **Hinweis:** Dieses Epic definiert die Story-Struktur, während Epic 11 die technische Umsetzung der Entscheidungslogik bereitstellt.

#### User Stories:
- Als Spieler möchte ich Entscheidungen treffen, die die Story beeinflussen
- Als Spieler möchte ich verschiedene Endungen erreichen können
- Als Spieler möchte ich die Konsequenzen meiner Entscheidungen verstehen
- Als Spieler möchte ich die Möglichkeit haben, vergangene Entscheidungen zu revidieren

#### Akzeptanzkriterien:
- [ ] Mindestens 3 verschiedene Story-Endings sind erreichbar
- [ ] Entscheidungen haben langfristige Auswirkungen auf den Verlauf
- [ ] Konsequenz-System zeigt Auswirkungen der Entscheidungen
- [ ] Story-Verzweigungen sind logisch und nachvollziehbar
- [ ] Speicherstand-System unterstützt Entscheidungs-States

---

### Epic 5: Atmosphäre und Immersion
**Ziel:** Emotionale Tiefe und authentisches Erlebnis

#### User Stories:
- Als Spieler möchte ich mich in die Charaktere hineinversetzen können
- Als Spieler möchte ich eine realistische Unfallszene erleben
- Als Spieler möchte ich durch Audio und Grafik vollkommen immersiert sein
- Als Spieler möchte ich emotionale Reaktionen der Charaktere erleben

#### Akzeptanzkriterien:
- [ ] Emotionale Musik und Soundeffekte sind implementiert
- [ ] Realistische Unfall-Szene mit visuellen Details
- [ ] Charakter-Animationen zeigen emotionale Zustände
- [ ] Umgebungs-Sounds erhöhen die Immersion
- [ ] Lighting-System unterstützt die Atmosphäre

---

### Epic 6: Mobile-Plattform-Unterstützung
**Ziel:** Cross-Plattform-Erlebnis auf PC und Mobile

#### User Stories:
- Als Spieler möchte ich das Spiel auf meinem Smartphone spielen können
- Als Spieler möchte ich touch-optimierte Steuerung haben
- Als Spieler möchte ich die gleiche Qualität auf allen Plattformen erleben
- Als Entwickler möchte ich plattformübergreifende Updates bereitstellen können

#### Akzeptanzkriterien:
- [ ] Touch-Steuerung ist für mobile Geräte optimiert
- [ ] UI-Elemente sind auf verschiedenen Bildschirmgrößen skalierbar
- [ ] Performance ist auf mobilen Geräten akzeptabel
- [ ] Cross-Plattform-Synchronisation funktioniert
- [ ] Plattform-spezifische Features sind genutzt

---

### Epic 7: Strategy Interface & Kollaboration
**Ziel:** Web-basierte Schnittstelle für Projektstrategie und Team-Kollaboration

#### User Stories:
- Als Projektmanager möchte ich die Projektstrategie online bearbeiten können
- Als Teammitglied möchte ich auf aktuelle Strategie-Informationen zugreifen können
- Als Stakeholder möchte ich Projektfortschritt und -status einsehen können
- Als Entwickler möchte ich die Strategie-Webseite auf GitHub Pages deployen können
- Als Nutzer möchte ich zwischen Übersicht und Strategie-Bearbeitung wechseln können

#### Akzeptanzkriterien:
- [ ] Web-Seite mit Projektübersicht funktioniert
- [ ] Strategie-Editor kann ein- und ausgeblendet werden
- [ ] Markdown-Inhalt wird korrekt geladen und angezeigt
- [ ] Bearbeiteter Inhalt kann lokal gespeichert werden
- [ ] Seite funktioniert auf GitHub Pages ohne externe Abhängigkeiten
- [ ] Responsive Design für Mobile und Desktop
- [ ] Echtzeit-Updates für Projektstatus

---

### Epic 8: Grundlegende Charakterentwicklung
**Ziel:** Detaillierte Ausarbeitung der Charakterdokumente und Festlegung der Grundlagen für die erste Entwicklung

#### User Stories:
- Als Writer möchte ich die Charaktereigenschaften detailliert ausarbeiten können
- Als Game Designer möchte ich klare Entwicklungs-Arcs für jeden Charakter festlegen
- Als Developer möchte ich definierte Charakter-Skills und Gameplay-Elemente haben
- Als Team möchte ich konsistente Charakter-Informationen über alle Dokumente hinweg haben
- Als QA möchte ich klare Akzeptanzkriterien für Charakter-Entwicklung haben

#### Akzeptanzkriterien:
- [ ] Alle Charakterdokumente haben detaillierte Eigenschaften statt Platzhalter
- [ ] Entwicklungs-Arcs sind mit klaren Phasen und Meilensteinen definiert
- [ ] Charakter-Skills sind für Gameplay konkretisiert
- [ ] Dialog-Beispiele sind authentisch und charaktergerecht
- [ ] Beziehungen zwischen Charakteren sind detailliert beschrieben
- [ ] Visuelle Entwicklungskonzepte sind vorhanden
- [ ] Charakter-spezifische Gameplay-Elemente sind definiert

---

### Epic 9: Dokumentenpflege & Aktualisierung
**Ziel:** Regelmäßige Pflege und Abgleich aller Projektdokumente gemäß definierter Struktur

#### User Stories:
- Als Project Manager möchte ich sicherstellen, dass alle Dokumente aktuell sind
- Als Teammitglied möchte ich wissen, welche Dokumente wann aktualisiert werden müssen
- Als Stakeholder möchte ich auf konsistente und aktuelle Informationen zugreifen können
- Als Quality Assurance möchte ich die Dokumentenqualität sicherstellen können
- Als Neues Teammitglied möchte ich die Dokumentenstruktur verstehen können

#### Akzeptanzkriterien:
- [ ] DocumentStructure.md ist erstellt und alle Dokumente sind aufgeführt
- [ ] Update-Frequenzen für jedes Dokument sind definiert
- [ ] Verantwortlichkeiten für jede Dokumentenart sind zugewiesen
- [ ] Checkliste für Dokumenten-Updates existiert
- [ ] Prozess für regelmäßige Dokumenten-Reviews ist etabliert
- [ ] Letzte Aktualisierungsdaten werden in allen Dokumenten gepflegt
- [ ] Konsistenz zwischen allen Dokumenten ist gewährleistet
- [ ] Dokumenten-Status wird im Strategy Interface angezeigt

#### Wiederkehrende Aufgabe:
**Jeden Sprint:** Alle Dokumente gemäß DocumentStructure.md überprüfen und aktualisieren:
- VisionLog.md (bei strategischen Änderungen)
- FirstResponseStrategy.md (monatlich)
- Backlog.md (jeden Sprint)
- Sprint-Dokumente (pro Sprint)
- LatestChanges.md (bei Änderungen)
- Character-Dokumente (kontinuierlich)
- StoryLog.md (bei Story-Entwicklungen)
- Strategy Interface (bei Status-Änderungen)
- PlayerExperienceLog.md (jeden Sprint)
- GitHub-Setup.md (bei Repository-Änderungen)
- Prototyp-Strategie.md (täglich während Prototyp-Entwicklung)

---

### Epic 10: Point & Click Interaction Framework
**Ziel:** Einfaches Framework für Point & Click Interaktion mit visuellen Hotspots und Event-System

> **Hinweis:** Point & Click ist nicht das Hauptspielziel, sondern ein Werkzeug für schnellen Einblick in Spielgeschehen. Bestehende Unity-Bibliotheken oder Asset-Store-Komponenten sollen genutzt werden, um manuelle Arbeit zu vermeiden.

#### User Stories:
- Als Entwickler möchte ich einfach anklickbare Hotspots auf Bildern erstellen können
- Als Spieler möchte ich visuelles Feedback beim Hovern über interaktive Elemente erhalten
- Als Entwickler möchte ich Events durch Klicks auslösen können
- Als Designer möchte ich Hotspots als Rechtecke mit leuchtenden/blinkenden Rahmen definieren
- Als QA möchte ich schnell neue Interaktionspunkte hinzufügen können

#### Akzeptanzkriterien:
- [ ] Framework unterstützt einfache Rechteck-Hotspots
- [ ] Hover-Effekte mit leuchtenden/blinkenden Rahmen sind implementiert
- [ ] Event-System für Klick-Aktionen funktioniert
- [ ] Integration mit Unity UI oder Asset-Store-Lösungen
- [ ] Editor-freundliche Erstellung von Hotspots
- [ ] Performance-optimiert für mobile Geräte
- [ ] Dokumentation für Framework-Nutzung vorhanden

---

### Epic 11: Entscheidungs-Framework
**Ziel:** System für Ereignissteuerung und Dialogoptionen mit Verzweigungslogik

> **Hinweis:** Dieses Framework ergänzt das Story-System und fokussiert auf die technische Umsetzung von Entscheidungslogik.

#### User Stories:
- Als Writer möchte ich Dialogoptionen mit verschiedenen Konsequenzen definieren können
- Als Entwickler möchte ich Ereignisse basierend auf Spielerentscheidungen auslösen
- Als Designer möchte ich komplexe Entscheidungs-Bäume erstellen können
- Als Spieler möchte ich klare Rückmeldung auf meine Entscheidungen erhalten
- Als QA möchte ich Entscheidungspfade testen können

#### Akzeptanzkriterien:
- [ ] Dialog-System mit verzweigten Optionen
- [ ] Ereignis-Trigger basierend auf Entscheidungen
- [ ] Konsequenz-System für langfristige Auswirkungen
- [ ] Integration mit Charakter-System
- [ ] Visualisierung von Entscheidungspfaden im Editor
- [ ] Speicherung von Entscheidungs-States
- [ ] Debug-Tools für Entscheidungs-Testing

---

### Epic 12: Point & Click Editor
**Ziel:** Editor für die Erstellung von Point & Click Seiten, Dialogen und Ereignissen

> **Hinweis:** Zunächst werden Ereignisse als Text ausgegeben. Bestehende Unity-Editor-Extensions oder Asset-Store-Tools sollen evaluiert werden.

#### User Stories:
- Als Content Creator möchte ich visuell Hotspots auf Bildern platzieren können
- Als Writer möchte ich Dialoge direkt im Editor schreiben und verknüpfen können
- Als Entwickler möchte ich Ereignisse ohne Code-Änderungen konfigurieren können
- Als Designer möchte ich den gesamten Point & Click Flow im Editor sehen können
- Als QA möchte ich schnell Test-Szenarien erstellen können

#### Akzeptanzkriterien:
- [ ] Visueller Editor für Hotspot-Platzierung
- [ ] Dialog-Editor mit Verknüpfungsfunktionen
- [ ] Ereignis-Konfiguration ohne Programmierung
- [ ] Vorschau-Modus für erstellte Szenen
- [ ] Import/Export-Funktion für Inhalte
- [ ] Integration mit Epic 10 & 11 Frameworks
- [ ] Text-Ausgabe für Ereignisse (initiale Implementierung)
- [ ] Benutzerfreundliche Oberfläche für Nicht-Techniker

---

### Epic 13: Player Experience Monitoring
**Ziel:** Systematische Beobachtung und Optimierung des Spielerlebnisses basierend auf Ästhetik of Play

> **Hinweis:** Dieses Epic etabliert ein kontinuierliches Monitoring-System für die 7 Kern-Aspekte des Spielerlebnisses nach Brian Akten: Entscheidung, Konsequenz, Kohärenz, Planbarkeit, Unwägbarkeit, Erfolg und Variation.

#### User Stories:
- Als Game Designer möchte ich das Spielerlebnis systematisch analysieren können
- Als QA möchte ich die Balance der Spiel-Aspekte messen und bewerten können
- Als Producer möchte ich datengestützte Entscheidungen über Design-Änderungen treffen
- Als Spieler möchte ich ein ausgewogenes und spannendes Spielerlebnis haben
- Als Team möchte ich konsistente Kriterien für Spielqualität haben

#### Akzeptanzkriterien:
- [ ] PlayerExperienceLog.md ist erstellt und strukturiert
- [ ] Bewertungs-System für 7 Kern-Aspekte ist implementiert
- [ ] Templates für Gesamt-, Story-, Szenen- und Situations-Analyse existieren
- [ ] Prototyp-Testing-Workflow ist etabliert
- [ ] Balance-Optimierungs-Strategien sind definiert
- [ ] Regelmäßige Review-Prozesse sind etabliert
- [ ] Design-Entscheidungen werden basierend auf Player Experience Log dokumentiert

#### Wiederkehrende Aufgabe:
**Jeden Sprint:** Player Experience Analyse durchführen:
- Bewertung der aktuellen Spiel-Szenen
- Analyse von Test-Feedback
- Balance-Optimierungs-Maßnahmen
- Dokumentation von Design-Entscheidungen

---

## Technical Tasks (Beispiele)

### Player Experience Monitoring-Technical Tasks:
- PlayerExperienceLog.md erstellen und strukturieren
- Bewertungs-System für 7 Kern-Aspekte implementieren
- Templates für Analyse-Ebenen entwickeln
- Prototyp-Testing-Workflow etablieren
- Balance-Optimierungs-Tools erstellen
- Review-Prozesse automatisieren
- Design-Entscheidungs-Dokumentationssystem

### Strategy Interface-Technical Tasks:
- HTML-Seite mit Projektübersicht erstellen
- JavaScript-Funktionen für Strategie-Editor implementieren
- Markdown-Inhalt in JavaScript einbetten
- Responsive Design für Mobile/Desktop
- GitHub Pages Deployment konfigurieren
- Lokale Speicherfunktion für bearbeitete Strategie
- Echtzeit-Update für Projektstatus

### Point & Click Framework-Technical Tasks:
- Unity UI Hotspot-System implementieren
- Hover-Effekte mit leuchtenden/blinkenden Rahmen erstellen
- Event-System für Klick-Aktionen entwickeln
- Asset-Store-Bibliotheken evaluieren und integrieren
- Performance-Optimierung für mobile Geräte
- Editor-Tools für Hotspot-Erstellung entwickeln
- Framework-Dokumentation erstellen

### Entscheidungs-Framework-Technical Tasks:
- Dialog-System mit verzweigten Optionen entwickeln
- Ereignis-Trigger basierend auf Entscheidungen implementieren
- Konsequenz-System für langfristige Auswirkungen erstellen
- Charakter-System-Integration
- Entscheidungs-Baum-Visualisierung im Editor
- State-Speicherung für Entscheidungen
- Debug-Tools für Entscheidungs-Testing

### Point & Click Editor-Technical Tasks:
- Visueller Editor für Hotspot-Platzierung entwickeln
- Dialog-Editor mit Verknüpfungsfunktionen erstellen
- Ereignis-Konfiguration ohne Programmierung ermöglichen
- Vorschau-Modus für erstellte Szenen implementieren
- Import/Export-Funktion für Inhalte
- Unity Editor Extension entwickeln
- Text-Ausgabe für Ereignisse implementieren

### Dokumentenpflege-Technical Tasks:
- DocumentStructure.md erstellen und pflegen
- Update-Frequenzen für alle Dokumente definieren
- Verantwortlichkeiten für Dokumentenpflege zuweisen
- Checkliste für Dokumenten-Reviews erstellen
- Prozess für regelmäßige Aktualisierungen etablieren
- Automatisierte Erinnerungen für Updates einrichten
- Konsistenz-Checks zwischen Dokumenten implementieren
- Dokumenten-Status im Strategy Interface integrieren

### Character-Perspektiven-Technical Tasks:
- Charakter-Wechsel-System implementieren
- Perspektiven-spezifische Kamera-Positionen
- Charakter-spezifische Dialog-Filter
- Visuelle Unterscheidung der Perspektiven
- Speicherstand-System für Charakter-States

### Erste-Hilfe-Simulation-Technical Tasks:
- Medizinische Prozeduren implementieren
- Schritt-für-Schritt Anleitungs-System
- Feedback-System für Maßnahmen
- Schwierigkeitsgrad-System
- Animations-Integration für Erste-Hilfe

### Atmosphäre-Technical Tasks:
- Audio-System implementieren
- Emotionale Musik-Tracks
- Soundeffekte für Unfallszene
- Charakter-Animations-System
- Lighting- und Atmosphäre-System

### Mobile-Plattform-Technical Tasks:
- Touch-Input-System entwickeln
- Responsive UI-System
- Performance-Optimierung
- Cross-Plattform-Build-System
- Plattform-spezifische Features

### Character Development-Technical Tasks:
- Charakterdokumente mit detaillierten Eigenschaften ausarbeiten
- Entwicklungs-Arcs mit konkreten Meilensteinen definieren
- Charakter-Skills für Gameplay spezifizieren
- Authentische Dialog-Beispiele erstellen
- Charakter-Beziehungen detaillieren
- Visuelle Entwicklungskonzepte entwerfen
- Gameplay-Elemente pro Charakter definieren

### Prototyp-Technical Tasks:
- Unity-Szene mit grundlegendem Unfall-Setup
- Dialog-System mit einfachen UI-Elementen
- Input-System für Erste-Hilfe-Aktionen
- Platzhalter-Assets integration
- Grundlegendes Save/Load-System

### Priorisierung:
1. **Hochste Priorität:** Epic 16 (MVP-Szenen), Epic 15 (Point&Click-System), Epic 14 (Ink-Dialogsystem - MVP-Kernkomponente), Epic 1 (Prototyp), Epic 7 (Strategy Interface), Epic 9 (Dokumentenpflege), Epic 10 (Point & Click Framework), Epic 11 (Entscheidungs-Framework)
2. **Medium Priority:** Epic 2, Epic 3, Epic 8 (Character Development)
3. **Low Priority:** Epic 4, Epic 5, Epic 6, Epic 12 (Point & Click Editor)

---

## 🎯 Sprint 1 Fokus: Spielbare Szene

### Ziel der ersten Iteration
Eine spielbare Szene, die alle Aspekte des Spiels anreißt:
- **Spannende Szene** mit schwierigen Entscheidungen
- **Erste Hilfe oder Präventions-Thema** 
- **Adrenalin** und emotionale Intensität
- **Dialog** mit Charakter-Interaktion
- **Geloggte Entscheidungen** mit Konsequenzen
- **Auswertung als Text** am Ende

### Sprint 1 Epic-Kombination
**Hauptfokus:** Epic 16 (MVP-Szenen) + Epic 15 (Point&Click-System) + Epic 14 (Ink-Dialogsystem) + Epic 1 (Prototyp) + Epic 10 (Point & Click Framework) + Epic 11 (Entscheidungs-Framework)

#### Minimale spielbare Szene umfasst:
1. **Szene 1:** "Unfall-Schock & Flucht" mit Stefania/Regina
2. **Szene 2:** "Ablenkung & Verantwortung" mit Lukas/Kinder
3. **Unity UI Canvas** mit statischen Hintergrundbildern und Hintergrundvideo
4. **Interaktive Hotspots** (Bild+Text und Outline-Schaltflächen)
5. **Ink-Dialogsystem** mit KI-kompatibler Syntax
6. **Point&Click Interaktion** mit Hover-Feedback
7. **Fokuswechsel-Mechanik** in Szene 2 (Handy vs. Straße)
8. **Story-State-gesteuerte** Hotspot-Aktualisierung

#### Technical Tasks für Sprint 1:
- Szene 1: Verkehrsunfall mit Stefania/Regina Dialog-System (Epic 16)
- Szene 2: Autofahrt mit Fokuswechsel-Filter und Hintergrundvideo (Epic 16)
- Unity UI Canvas mit Image/Text Buttons einrichten (Epic 15)
- Transparente Hitboxen mit Outline-Visualisierung (Epic 15)
- Unity Ink-Plugin einrichten und konfigurieren (Epic 14)
- Dialog-Manager für Ink-Integration entwickeln (Epic 14)
- Ink-Integration für ChooseChoiceIndex() implementieren (Epic 15)
- Unity-Szene mit Unfall-Setup (Epic 1)
- Story-State-Lese-System für Hotspot-Aktualisierung (Epic 15)
- Point & Click Hotspot-System (Epic 10)
- Entscheidungs-Logging mit Story-Variablen (Epic 11 + 14)
- Fokus-Filter-System für Szene 2 (Blur-Effekte) (Epic 16)
- Audio-System für emotionale Immersion (Epic 16)
- KI-generierte Assets als Platzhalter (Epic 16)
- Grundlegendes Save/Load-System

#### Sprint 1 Player Experience Aufgaben (Epic 13):
- Bewertung der Unfallszene nach 7 Kern-Aspekten (manueller Test)
- Analyse der Entscheidungs-Konsequenz-Balance (Design-Review)
- Prototyp-Testing mit 3+ Testern (manuelle Tests)
- Balance-Optimierung basierend auf Feedback (Design-Anpassung)
- Dokumentation der Design-Entscheidungen

> **Hinweis:** Player Experience Kriterien sind vor allem in Vorüberlegungen der Szenen und Spielmechaniken sowie in manuellen Tests relevant - kaum coderelevant.

## Definition of Done:
- User Story ist implementiert und getestet
- Code Review abgeschlossen
- Dokumentation aktualisiert
- Akzeptanzkriterien erfüllt
- Keine bekannten Bugs

> **Hinweis:** Player Experience Kriterien sind vor allem in Vorüberlegungen der Szenen und Spielmechaniken sowie in manuellen Tests relevant - kaum coderelevant. Sie werden in Epic 13 (Player Experience Monitoring) separat behandelt.
