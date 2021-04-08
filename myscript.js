var nrKm = parseInt(prompt("Indica il numero di km che devi percorrere"));

var userAge = parseInt(prompt("Indica la tua età attuale"));

var costPerKm = 0.21; 

console.log(nrKm, userAge);

var costTicket = nrKm * costPerKm; 

var promoYoung = costTicket * 20 / 100;

var promoSenior = costTicket * 40 / 100;


if (userAge < 18 ) {
    console.log("Il costo del tuo biglietto è di €" + (costTicket - promoYoung));

} else if (userAge >= 65) {
    console.log("Il costo del tuo biglietto è di €" + (costTicket - promoSenior));

} else {
    console.log("Il costo del tuo biglietto è di €" + costTicket);
}