function deframmenta() {
    // Seleziona tutte le righe con la classe "libera"
    const spazi = document.querySelectorAll('tr.libera');
    
    // rimuove le righe libere: gli spazi piccoli della memoria
    spazi.forEach(riga => {
        riga.remove();
    });
}




//Curtain menu 
let Aperto = false;

// Funzione per aprire e chiudere il menu
function toggleNav() {
    if (Aperto) {
        closeNav();  
    } else {
        openNav();  
    }
    Aperto = !Aperto; 
}

// Funzione per aprire il menu
function openNav() {
    document.getElementById("myNav").style.width = "10%";
}

// Funzione per chiudere il menu
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}