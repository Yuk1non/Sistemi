function aggiungi() {
    const nome = document.getElementById("Nome").value;
    const cognome = document.getElementById("Cognome").value;
    const lezione = document.getElementById("lezioni").value;

    // Controlla se tutti i campi sono compilati
    if (nome && cognome && lezione) {
        alert(`${nome} ${cognome} ti sei aggiunto alle lezioni di ${lezione}`);
    } else {
        alert("Compila tutti i campi!");
    }
}
