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

            
            document.getElementById('ort').textContent = ortschaft;
            document.getElementById('temp').textContent = temperatur;
            document.getElementById('sonne').textContent = sonneHeute;
        })
        .catch(error => {
            console.error('Fehler in der Konsole:', error);
        });
});




// document.getElementById('wetter_button_interlaken').addEventListener('click', function() {
//     const url = 'https://aareguru.existenz.ch/v2018/current?city=interlaken';

//     console.log("Anfrage gestartet... Warte auf API-Antwort.");

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
            
//             console.log("Komplette API-Daten erhalten:", data);

            
//             const ortschaft = data.aare.location;
//             const temperatur = data.aare.temperature;
//             const sonneHeute = data.sun.today.suntotal;

            
//             console.log("--- Gefilterte Daten ---");
//             console.log("Ort:", ortschaft);
//             console.log("Temp:", temperatur + " °C");
//             console.log("Sonne heute:", sonneHeute);
//             console.log("------------------------");

            
//             document.getElementById('ort').textContent = ortschaft;
//             document.getElementById('temp').textContent = temperatur;
//             document.getElementById('sonne').textContent = sonneHeute;
//         })
//         .catch(error => {
//             console.error('Fehler in der Konsole:', error);
//         });
// });