// Blackjack game (player's cards sum)
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");

let hasBlackJack = false;
let isAlive = true;
let message = "";
let firstCard, secondCard, sum;

// start game function
function startGame() {
    firstCard = Math.floor(Math.random() * 11) + 2;
    secondCard = Math.floor(Math.random() * 11) + 2;
    sum = firstCard + secondCard;
    isAlive = true;

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;

    console.log("First Card:", firstCard);
    console.log("Second Card:", secondCard);
    console.log("Sum:", sum);

    // check cards
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
    console.log("Message:", message);
}

// new card function — now global and visible to button
function newCard() {
    if (isAlive && !hasBlackJack) {
        let thirdCard = Math.floor(Math.random() * 11) + 2;
        sum += thirdCard;

        cardsEl.textContent += " " + thirdCard;
        sumEl.textContent = "Sum: " + sum;

        console.log("New Card:", thirdCard);
        console.log("Updated Sum:", sum);

        if (sum < 21) {
            message = "Do you want to draw a new card?";
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack!";
            hasBlackJack = true;
        } else {
            message = "You're out of the game!";
            isAlive = false;
        }

        messageEl.textContent = message;
        console.log("Message:", message);
    }
}
