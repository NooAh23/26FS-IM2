console.log("blub");
// Dropdown für Desktop/Tablet
const navDropdown = document.querySelector('.nav-dropdown');

if (navDropdown) {
    navDropdown.addEventListener('click', (e) => {
        
        if (window.innerWidth > 768) {
           
        }
    });
}


<<<<<<< HEAD
const button = document.getElementById("wetterButton");
=======
document.getElementById('wetterButton').addEventListener('click', function() {
    const url = 'https://aareguru.existenz.ch/v2/current?city=brienz';

    console.log("Test API Aare Guru");
>>>>>>> f663a2611a1cdf09e42d805a63e1e52b9951a60c

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            console.log("Komplette API-Daten erhalten:", data);

            //Einz elne Werte extrahieren
            const ortschaft = data.aare.location;
            const temperatur = data.aare.temperature;
            const sonneHeute = data.sun.today.suntotal;

<<<<<<< HEAD
  const antwort = await fetch(url);

  const daten = await antwort.json();

  console.log("Bern Temperatur:");
  console.log(daten.values.bern.temperature);
=======
            //Ausgabe Console
            console.log("--- Gefilterte Daten ---");
            console.log("Ort:", ortschaft);
            console.log("Temp:", temperatur + " °C");
            console.log("Sonne heute:", sonneHeute);
            console.log("------------------------");
>>>>>>> f663a2611a1cdf09e42d805a63e1e52b9951a60c

            //Daten im HTML
            document.getElementById('ort').textContent = ortschaft;
            document.getElementById('temp').textContent = temperatur;
            document.getElementById('sonne').textContent = sonneHeute;
        })
        .catch(error => {
            console.error('Fehler in der Konsole:', error);
        });
});