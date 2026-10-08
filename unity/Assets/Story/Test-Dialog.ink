// Test-Dialog.ink
// Saubere Test-Story für die Ink-Anbindung des HTML-Prototyps "First Response".
//
// Löst nachgewiesene Fehler der ersten Testdatei (ReginaStefania.ink):
//   1) Toter Code: "+ Choice -> divert" hat die darunter eingerueckten ~-Zeilen
//      nie ausgefuehrt (stefania_trust blieb 0, ohne Ink-Warnung).
//      -> Divert steht JETZT NACH den Anweisungen im Choice-Body.
//   2) Choice-Echo: Ink schreibt den gewaehlten Choice-Text in den Ausgabe-Stream
//      und zerstoerte den Speaker-Parsing im HTML.
//      -> Choice-Syntax "[Label]" unterdrueckt den Echo.
//   3) Szenen-Erkennung: inkjs currentPathString ist an Choice-Punkten null,
//      sodass der aktuelle Knoten aus dem Pfad nicht lesbar war.
//      -> Jeder Knoten deklariert seine Szene ueber VAR "scene".
//         Das HTML liest nur diesen Wert (keine Story-Logik im HTML).

VAR scene = "intro"
VAR stefania_trust = 0
VAR player_perspective = ""

-> intro

=== intro
~ scene = "intro"
Regina: "Stefania, bleiben Sie bei der Person!"
Stefania: "Ich... ich kann nicht. Die Polizei kommt!"

+ [Gefährderin]
    ~ stefania_trust -= 1
    ~ player_perspective = "Regina hat Stefania verraten, Konsequenzen absehbar"
    -> polizei_warnt

+ [Stefania beruhigen]
    ~ stefania_trust += 1
    ~ player_perspective = "Regina beruhigt Stefania, Vertrauen steigt"
    -> stefania_beruhigt

+ [Nachfragen]
    -> nachfragen

=== nachfragen
~ scene = "nachfragen"
Regina: "Was ist genau passiert?"
Stefania: "Sie ist umgefallen und reagiert nicht."

+ [Gefährderin]
    ~ stefania_trust -= 1
    ~ player_perspective = "Regina hat Stefania verraten, Konsequenzen absehbar"
    -> polizei_warnt

+ [Stefania beruhigen]
    ~ stefania_trust += 1
    ~ player_perspective = "Regina beruhigt Stefania, Vertrauen steigt"
    -> stefania_beruhigt

=== polizei_warnt
~ scene = "polizei_warnt"
Regina: (funk) "Achtung, Person könnte gewaltbereit sein."

+ [Einsatzstelle alarmieren]
    -> einsatzstelle

+ [Stefania beruhigen]
    ~ stefania_trust += 1
    -> stefania_beruhigt

=== stefania_beruhigt
~ scene = "stefania_beruhigt"
Regina: "Alles ist gut. Kein Grund zur Panik."
Stefania: "Danke. Ich versuche ruhig zu bleiben."

+ [Weiter zur Einsatzstelle]
    -> einsatzstelle

=== einsatzstelle
~ scene = "einsatzstelle"
Regina: "Die Einsatzstelle ist eingetroffen."
Stefania: "Endlich."

-> DONE
