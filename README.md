# raspberry-pi-escape-room-controller
## Beschrijving
Voor de escape room controller maken we gebruik van raspberry pi als hoofd computer.
Op de raspberry pi werd als extra node red en een mqtt broker geinstalleerd.
  - Op de raspberry pi is een scherm aangesloten die in de spelersruimte staat.
  - Via een pc maken we verbinding met de raspberry pi en node red om de escaperoom console op te starten.

De escape room console heeft een algemene sturing.
  - Er kunnen verschillende escape rooms gecontroleerd worden, met verschillende speeltijden en verschillende spelletjes.
  - Start/stop en reset van de totale speeltijd van de volledige escape room.
  - Er kan extra speeltijd gegeven worden of straftijd afgetrokken worden in stappen van 5 minuten.
  - Op het scherm in de speelruimte wordt de nog te spelen tijd constant weergeven.
  - Vanuit de controle ruimte kunnen er hints gegeven worden aan de spelers die dan verschijnt op het spelers scherm.
  - De hint verschijnt ongeveer 10 sec, waarna die dan terug verdwijnt. De hint wordt ook voorgelezen door text to speech.
  - De hints kunnen voorgeschreven hints zijn die te selecteren zijn uit een tabel of die kunnen adhoc ingegeven worden.
  - Via de console kan er een video gestart worden die afgespeeld wordt op het spelers scherm.

Ieder escape spel is uitgerust met een afzonderlijke ESP8266 die geprogrameerd wordt via Arduino IDE.
Alle draadloze communicatie tussen de esp8266 en de raspberry pi wordt doorgegeven via mqtt.
Het escape spel is volledig bestuurbaar en opvolgbaar via de escape room console.
  - Aan/uit schakelen van het spel.
  - Controle van de draadloze verbinding en doorgeven van de toestand waarin het spel zich bevind.
  - Iedere verandering van het spel kan gevolgd worden op afstand op de escape room console.
  - Als het spel is opgelost gaat het spelslot open en dit wordt ook getoond door een open slot op de console.
  - Kan de speler het spel niet oplossen, is er een toets op de console om het spel in "Auto solve" te plaatsen en het spel lost zichzelf op. Dit door alle stappen te doorlopen die nog nodig zijn om het spel op te lossen. Dit in vertraagde snelheid.
  - Reset van het spel.
  


## Bronnen
Youtube voorbeelden/help node red.<br>
Mqtt en Arduino voorbeelden.<br>
w3school

## Hardware
raspberry pi.<br> 
esp8266 en esp32

## Software
node red en Mosquitto mqtt broker op raspberry pi.<br>
Arduino IDE.<br>



### Eigen scripts en programma's
C-programmeer taal voor de esp8266 en esp32.<br>
Html voor de scherm layout.<br>
Javascript voor programmeren van node red functies.<br>

Voorbeeld => time format on screen => zie javascript.js
 

## Escape room Console
![dit is een afbeelding uit onze image map](images/console.jpg)
## Scherm in de speelruimte
![dit is een afbeelding uit onze image map](images/escaperoom.jpg)
## Een Node-red flow voor het scherm in de speelruimte
![dit is een afbeelding uit onze image map](images/nodered_flow.jpg)
