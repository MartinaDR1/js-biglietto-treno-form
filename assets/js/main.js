// Valutare il prezzo del biglietto sulla base ai km (0.21 € al km)
const btnSend = document.getElementById('send');

btnSend.addEventListener('click', function(){
    let kmEl = Number(document.getElementById('km').value);
    let userAge = Number(document.getElementById('age').value);


    console.log(kmEl, userAge);

    priceTotal = kmEl * 0.21;
    console.log(priceTotal);
    
    // Applicare sconto del 20% per i minorenni e del 40% per gli over65

    
    if(userAge < 18){
        const under18 = priceTotal * 20 / 100;
        priceTotal = priceTotal - under18;
    } else if (userAge >= 65){
        const over65 = priceTotal * 40 / 100;
        priceTotal = priceTotal - over65;
    }
    
});
