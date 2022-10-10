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

let ticketUser = document.getElementById("ticket")


submit.addEventListener("click", function() {
    let nameUser = nameUserInput.value;
    let ageUser = ageUserInput.value;
    let kmUser = parseInt(kmUserInput.value);
    console.log(nameUser, ageUser, kmUser);

    firstPrice = kmUser * 0.21;
    console.log(firstPrice);

    let price;
    let offer;

    if (ageUser === "minorenne") {
        price = (firstPrice*0.8).toFixed(2);
        offer = "20%";
    } else if (ageUser === "over65") {
        price = (firstPrice*0.6).toFixed(2);
        offer = "40%";
    } else {
        price = (firstPrice).toFixed(2);
        offer = "0%";
    }

    console.log("prezzo col sconto: " + price + " €");


    nameUserContent = document.getElementById("nameuser");
    nameUserContent.innerHTML = `${nameUser}`

    let offerLabel = document.getElementById("offerta");
    offerLabel.innerHTML = offer;

    let carrozza = document.getElementById("carrozza");
    carrozza.innerHTML = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;

    let cp = document.getElementById("cp");
    cp.innerHTML = Math.floor(Math.random() * (10000 - 1 + 1) ) + 1;

    let costo = document.getElementById("costo");
    costo.innerHTML = price + " €";

    nameUserInput.value = "";
    ageUserInput.value = "";
    kmUserInput.value = "";


    ticketUser.classList.remove("ms_not");
    ticketUser.classList.add("ms_yes");


})

let anulla = document.getElementById("anulla");

anulla.addEventListener("click", function() {
    nameUserInput.value = "";
    ageUserInput.value = "";
    kmUserInput.value = "";

    ticketUser.classList.add("ms_not");
    ticketUser.classList.remove("ms_yes");
})









