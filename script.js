//Black jack game(player's cards sum)
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
let hasBlackJack = false;
let isAlive = true;
let message = "";


//start game function
function startGame() {
let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let sum = firstCard + secondCard;
cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
sumEl.textContent = "Sum: " + sum;

//console log cards
console.log("First Card: " + firstCard);
console.log("Second Card: " + secondCard);
console.log("Sum: " + sum);

//check cards
if (sum < 21) {
    messageEl.textContent = "Do you want to draw a new card?"
} else if (sum === 21) {
    messageEl.textContent = "Wohoo! You've got Blackjack!"
    hasBlackJack = true;
} else {
    messageEl.textContent = "You're out of the game!"
    isAlive = false;
}

//add new card function
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = Math.floor(Math.random() * 11) + 2;
        sum += thirdCard;
        console.log("New Card: " + thirdCard);
        console.log("Updated Sum: " + sum);
        if (sum < 21) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack!"
            hasBlackJack = true;
        } else {
            message = "You're out of the game!"
            isAlive = false;
        }
    }
};
        
        console.log(message);
}