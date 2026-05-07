console.log("blub");
// Dropdown-Logik für Desktop/Tablet
const navDropdown = document.querySelector('.nav-dropdown');

if (navDropdown) {
    navDropdown.addEventListener('click', (e) => {
        // Verhindert das sofortige Springen zum Anker #locations auf Tablets
        if (window.innerWidth > 768) {
            // Hier könnte man ein manuelles Toggle einbauen, 
            // falls das CSS-Hover nicht ausreicht.
        }
    });
}