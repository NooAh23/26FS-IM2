console.log("blub");
// Dropdown für Desktop/Tablet
const navDropdown = document.querySelector('.nav-dropdown');

if (navDropdown) {
    navDropdown.addEventListener('click', (e) => {
        
        if (window.innerWidth > 768) {
           
        }
    });
}






document.getElementById('wetter_button').addEventListener('click', function() {
    
    // page url aus url param auslesen
    const pageUrl = window.location.href;
    console.log("Aktuelle Seite:", pageUrl);

    // isolate city from url http://127.0.0.1:5500/brienz.html
    const city = pageUrl.split('/').pop().split('.html')[0];
    console.log("Erkannte Stadt:", city);
    
    const url = `https://aareguru.existenz.ch/v2018/current?city=${city}`;

    console.log("Anfrage gestartet... Warte auf API-Antwort.");

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            console.log("Komplette API-Daten erhalten:", data);

            
            const ortschaft = data.aare.location;
            const temperatur = data.aare.temperature;
            const sonneHeute = data.sun.today.suntotal;

            
            console.log("--- Gefilterte Daten ---");
            console.log("Ort:", ortschaft);
            console.log("Temp:", temperatur + " °C");
            console.log("Sonne heute:", sonneHeute);
            console.log("------------------------");

            
            // --- DATEN ANZEIGEN ---
            document.getElementById('ort').textContent = ortschaft;
            document.getElementById('temp').textContent = temperatur;
            document.getElementById('sonne').textContent = sonneHeute;

            const zeitParts = sonneHeute.split(':');
            const sonneStunden = parseInt(zeitParts[0]) + (parseInt(zeitParts[1]) / 60);

            // --- NEU: DRINK LOGIK (BILD) ---
            let drinkKategorie = "Ordinary Drink"; // Standard

            if (temperatur > 23 && sonneStunden >= 4.5 && sonneStunden <= 8) {
                drinkKategorie = "Cocktail";
            } 
            else if (temperatur > 15 && sonneStunden >= 2 && sonneStunden <= 5) {
                drinkKategorie = "Beer";
            }
            else if (temperatur < 10 && sonneStunden <= 4) {
                drinkKategorie = "Cocoa";
            }
            else if (temperatur < 10 && sonneStunden <= 5) {
                drinkKategorie = "Coffee / Tea";
            }
            else if (temperatur < 0 && sonneStunden <= 5) {
                drinkKategorie = "Homemade Liqueur";
            }
            else if (temperatur >= 10 && temperatur <= 24 && sonneStunden >= 2 && sonneStunden <= 6) {
                drinkKategorie = "Shake";
            }
            else if (temperatur >= 10 && temperatur <= 16 && sonneStunden >= 1 && sonneStunden <= 3) {
                drinkKategorie = "Shot";
            }
            else if (temperatur >= 10 && temperatur <= 35 && sonneStunden <= 10) {
                drinkKategorie = "Soft Drink";
            }

            console.log("Berechnete Kategorie:", drinkKategorie);
            
            // Drink auf der Seite anzeigen
            if (document.getElementById('drinkAnzeige')) {
                document.getElementById('drinkAnzeige').textContent = drinkKategorie;
            }
        })
        .catch(error => {
            console.error('Fehler:', error);
        });
});
