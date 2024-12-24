let processi = []; 
let ordine = []; 

// Funzione che prende i valori e li aggiunge in tabella
function aggiungi() {
    // Prendo valori in input
    const PID = document.getElementById("PID").value;
    const durata = parseInt(document.getElementById("Durata").value); 
    const arrivo = parseInt(document.getElementById("arrivo").value);

    // Controllo se è stato riempito il form
    if (PID && durata) {
        // Creazione dizionario per metterlo nell'array generale
        let processo = {"PID": PID, 
                        "durata": durata, 
                        "arrivo": arrivo, 
                        "entrata": 0, 
                        "uscita": 0, 
                        "attesa": 0}; 
        
        //Inserimento valori
        processi.push(processo);
        aggiungiProcesso(); 
        tabellina();       
        tAttesa();  

        // Reset del form
        document.getElementById('processo').reset();
    } else {
        alert("PCB insufficente");  
    }
}

// Funzione che aggiorna la tabella principale
function aggiungiProcesso() {
    const tab = document.querySelector("#processi tbody"); 
    tab.innerHTML = '';  // Resetta il corpo della tabella

    let durataTOT = 0;  // Durata totale


    for(let i = 0; i < processi.length; i++){
        const riga = document.createElement("tr");

        //Var da usare
        processi[i].entrata = durataTOT + 1;  // Tempo di entrata
        processi[i].uscita = processi[i].durata + processi[i].entrata; 

        // Aggiungi una riga per ogni processi[i]
        riga.innerHTML = `<td>${processi[i].PID}</td>
                          <td>${processi[i].durata}</td>
                          <td>${processi[i].arrivo}</td>
                          <td>${processi[i].entrata}</td>         
                          <td>${processi[i].uscita}</td>`; 

        // Aggiorna la durata totale per l'entrata del prossimo processi[i]
        durataTOT += processi[i].durata;

        processi[i].durata = processi[i].durata - 5; 

        if(processi[i].durata > 0){
            processi.push(processi[i]);
        }

        tab.appendChild(riga);  
    }
}

// Funzione per l'ordine di esecuzione
function tabellina() {
    const tabellina = document.querySelector("#tabellina thead tr"); 
    tabellina.innerHTML = ''; 

    //itera per inserire i processi in ordine creando nuove colonne
    processi.forEach((processo, index) => {
        const colonna = document.createElement("th");
        if(index === 0){
            colonna.innerText = `${processo.PID}`; 
        }
        else{
            colonna.innerText = ` -- ${processo.PID}`; 
        }
        tabellina.appendChild(colonna);  
    });
}

function tAttesa(){
    let nP = processi.length; 
    let MediaAttesa = 0; 
    const testo = document.getElementById("tAttesa"); 

    //Calcolo dell'attesa per ogni P
    processi.forEach((processo) => {
        processo.attesa = processo.entrata - processo.arrivo; 
        MediaAttesa += processo.attesa; 
    })

    let TAttesa = MediaAttesa / nP; 
    testo.innerHTML = `TEMPO MEDIO DI ATTESA: ${TAttesa.toFixed(1)}`;
}





//Curtain menu 
let isMenuOpen = false;

// Funzione per aprire e chiudere il menu
function toggleNav() {
    if (isMenuOpen) {
        closeNav();  
    } else {
        openNav();  
    }
    isMenuOpen = !isMenuOpen; 
}

// Funzione per aprire il menu
function openNav() {
    document.getElementById("myNav").style.width = "10%";
}

// Funzione per chiudere il menu
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
