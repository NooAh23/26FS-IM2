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
    
    // URL Wetter
    const pageUrl = window.location.href;
    console.log("Aktuelle Seite:", pageUrl);

    // Stadt Isolieren http://127.0.0.1:5500/brienz.html
    let city = pageUrl.split('/').pop().split('.html')[0].toLowerCase();
    
    // Korrektur für Städte auf "Schweizerdeutsch"
    if (city === "interlaken") {
        city = "interlake";
    }
    
    console.log("Erkannte Stadt (API-konform):", city);
    
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

            // Datenanzeige
            document.getElementById('ort').textContent = ortschaft;
            document.getElementById('temp').textContent = temperatur;
            document.getElementById('sonne').textContent = sonneHeute;

            // Umrechnung Sonnestunden
            const zeitParts = sonneHeute.split(':');
            const sonneStunden = parseInt(zeitParts[0]) + (parseInt(zeitParts[1]) / 60);

            // Drinks Logik
            let drinkKategorie = "Ordinary_Drink"; // Standard

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
                drinkKategorie = "Ordinary_Drink"; // Coffee / Tea Ersatz
            }
            else if (temperatur < 0 && sonneStunden <= 5) {
                drinkKategorie = "Homemade_Liqueur";
            }
            else if (temperatur >= 10 && temperatur <= 24 && sonneStunden >= 2 && sonneStunden <= 6) {
                drinkKategorie = "Shake";
            }
            else if (temperatur >= 10 && temperatur <= 16 && sonneStunden >= 1 && sonneStunden <= 3) {
                drinkKategorie = "Shot";
            }
            else if (temperatur >= 10 && temperatur <= 35 && sonneStunden <= 10) {
                drinkKategorie = "Soft_Drink";
            }

            console.log("Berechnete Kategorie:", drinkKategorie);
            
            // Drinkkategorie
            if (document.getElementById('drinkAnzeige')) {
                document.getElementById('drinkAnzeige').textContent = drinkKategorie.replace(/_/g, " ");
            }

            // Zufälliger Drink
            const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkKategorie}`;

            fetch(drinkUrl)
                .then(res => res.json())
                .then(drinkData => {
                    if (drinkData && drinkData.drinks) {
                        const randomIndex = Math.floor(Math.random() * drinkData.drinks.length);
                        const selectedDrink = drinkData.drinks[randomIndex];

                        // Drink Name anzeigen
                        if (document.getElementById('spezifischerDrink')) {
                            document.getElementById('spezifischerDrink').textContent = selectedDrink.strDrink;
                        }
                        // Drink Bild anzeigen
                        if (document.getElementById('drinkBild')) {
                            document.getElementById('drinkBild').src = selectedDrink.strDrinkThumb;
                            document.getElementById('drinkBild').style.display = 'block';
                        }
                    }
                })
                .catch(err => console.error("Fehler Cocktail-API:", err));
        })
        .catch(error => {
            console.error('Fehler Wetter-API:', error);
        });
});