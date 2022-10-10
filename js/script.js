//Scrivere un programma che chieda all’utente:
//- Il numero di chilometri da percorrere
//- Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.

//PSEUDOCODICE---------------------------------
// 1. Chiedere il numero di km e la età 

// 2. Prezzo base é km * 0.21 €

// 3. Sconti:
//      SE età < 18 ALLORA Prezzo = Prezzo*0.8  €
//      SE età > 65 ALLORA Prezzo = Prezzo*0.6  €
//      ALTRIMENTI Prezzo = Prezzo 

let nameUserInput = document.getElementById("name");
let ageUserInput = document.getElementById("age");
let submitInput = document.getElementById("submit");

let kmUserInput = document.getElementById("km");


submit.addEventListener("click", function() {
    let nameUser = nameUserInput.value;
    let ageUser = ageUserInput.value;
    let kmUser = parseInt(kmUserInput.value);
    console.log(nameUser, ageUser, kmUser);

    firstPrice = kmUser * 0.21;
    console.log(firstPrice);

    let price;

    if (ageUser === "minorenne") {
        price = (firstPrice*0.8).toFixed(2);
    } else if (ageUser === "over65") {
        price = (firstPrice*0.6).toFixed(2);
    } else {
        price = (firstPrice).toFixed(2);
    }

    console.log("prezzo col sconto: " + price + " €");

    document.getElementById("p_answer").innerHTML = `Ciao ${nameUser}! Il prezzo del tuo biglietto é: ${price} €`
})









