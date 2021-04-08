var nrKm = parseInt(prompt("Indica il numero di km che devi percorrere, a partire da 5km"));

if (Number.isNaN(nrKm) || nrKm < 5) {
    alert("Si prega di inserire un numero di km valido, a partire da 5km.")

} else {
        
    var userAge = parseInt(prompt("Indica la tua età attuale"));

    if (Number.isNaN(userAge)) {
        alert("Il dato inserito deve essere un numero");
    
    } else if (userAge < 0 || userAge > 119) {
        alert("L'età che hai inserito non è valida.")

    }  else {
        
        console.log("Devi percorrere " + nrKm + " km.");
        console.log("Hai " + userAge + " anni.");
    
        var costPerKm = 0.21; 
        var costTicket = nrKm * costPerKm; 
    
        var promoYoung = costTicket * 20 / 100;
        var promoSenior = costTicket * 40 / 100; 
    
        if (userAge < 18 ) {
            console.log("Con uno sconto già applicato del 20%, il costo del tuo biglietto è di €" + (costTicket - promoYoung).toFixed(2));
    
        } else if (userAge >= 65) {
            console.log("Con uno sconto già applicato del 40%, il costo del tuo biglietto è di €" + (costTicket - promoSenior).toFixed(2));
    
        } else {
            console.log("Il costo del tuo biglietto è di €" + costTicket.toFixed(2));
        }
    } 

}