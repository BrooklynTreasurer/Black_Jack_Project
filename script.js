//Black jack game(player's cards sum)
let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

console.log("First Card: " + firstCard);
console.log("Second Card: " + secondCard);
console.log("Sum: " + sum);
if (sum < 21) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true;
} else {
    message = "You're out of the game!"
    isAlive = false;
}

//cash out function
console.log(message);

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