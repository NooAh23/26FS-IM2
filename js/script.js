console.log("blub");
// Dropdown für Desktop/Tablet
const navDropdown = document.querySelector('.nav-dropdown');

if (navDropdown) {
    navDropdown.addEventListener('click', (e) => {
        
        if (window.innerWidth > 768) {
           
        }
    });
}



const button = document.getElementById("wetterButton");

button.addEventListener("click", async () => {

  const url = "https://aareguru.existenz.ch/v2018/current";

  const antwort = await fetch(url);

  const daten = await antwort.json();

  console.log(daten);

  console.log("Bern Temperatur:");
  console.log(daten.values.bern.temperature);

});