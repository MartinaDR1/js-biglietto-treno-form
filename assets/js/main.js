// Valutare il prezzo del biglietto sulla base ai km (0.21 € al km)
const btnSend = document.getElementById('send');


btnSend.addEventListener('click', function(){
    let username = document.getElementById('user').value;
    let kmEl = Number(document.getElementById('km').value);
    let userAge = document.getElementById('age').value;


    console.log(kmEl, userAge, username);

    priceTotal = kmEl * 0.21;
    console.log(priceTotal);
    
    // Applicare sconto del 20% per i minorenni e del 40% per gli over65

    switch(userAge){
        case "under18":
            const under18 = priceTotal * 20 / 100;
            priceTotal = (priceTotal - under18).toFixed(2);
        break;

        case "over65":
            const over65 = priceTotal * 40 / 100;
            priceTotal = (priceTotal - over65).toFixed(2);
        break;

        default:
    }

  
    // Stampare nome passeggero
    const namePass = document.getElementById('name');
    namePass.innerHTML =  username

    // Stampo offerta
    const offerPrice = document.getElementById('offer');
    offerPrice.innerHTML = userAge

    // Stampo numero carrozza
    const number_carriage = document.getElementById('carriage');
    number_carriage.innerHTML =  Math.floor(Math.random() * 9);

    // Stampo codice CP
    const code_cp = document.getElementById('cp');
    code_cp.innerHTML =  Math.floor(Math.random() * 99999);

    // Stampo costo totale
    const priceTotalTicket = document.getElementById('price');
    priceTotalTicket.innerHTML =  priceTotal

    //
    ticket.classList.remove('d-none');
});

