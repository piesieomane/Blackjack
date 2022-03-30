let cards = [];
let sum = 0;
let hasbackjack = false;
let isalive = false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
     name : "Piesie",
     chips: 145 
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

console.log(cards);

function getRandomCard() {
    let randomnumber = Math.floor( Math.random() * 13) + 1;

    if (randomnumber === 1) {
        return 11
    }
    else if (randomnumber > 10 ) {
        return 10
    }
    else {
        return randomnumber
    }
   // return randomnumber;
}

function startgame() {
    isalive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard,secondcard];
    sum = firstcard + secondcard;
    rendergame();
    
}


function rendergame() {
    
    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++ ) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
         
     }
     else if (sum === 21) {
         message = "Woooo! You've got Blackjack! "
         hasbackjack = true
     }
     else {
         message = 'You are out of the game'
         isalive = false
     }
     messageEl.textContent = message;
     
}

function newcard() {
    //console.log("Draw out a new card")
    if (isalive === true && hasbackjack === false) {
    let thirdcard = getRandomCard();
    sum += thirdcard; 
    cards.push(thirdcard);
    console.log(cards);
    rendergame();

    }
    
    
}
