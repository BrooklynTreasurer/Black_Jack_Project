// cards array with image sources and values
const card = [
    //clubs
    {src: "images/2_of_clubs.png", value: 2},
    {src: "images/3_of_clubs.png", value: 3},
    {src: "images/4_of_clubs.png", value: 4},
    {src: "images/5_of_clubs.png", value: 5},
    {src: "images/6_of_clubs.png", value: 6},
    {src: "images/7_of_clubs.png", value: 7},
    {src: "images/8_of_clubs.png", value: 8},
    {src: "images/9_of_clubs.png", value: 9},
    {src: "images/10_of_clubs.png", value: 10},
    {src: "images/jack_of_clubs.png", value: 10},
    {src: "images/queen_of_clubs.png", value: 10},
    {src: "images/king_of_clubs.png", value: 10},
    {src: "images/ace_of_clubs.png", value: 11},
    //hearts
    {src: "images/2_of_hearts.png", value: 2},
    {src: "images/3_of_hearts.png", value: 3},
    {src: "images/4_of_hearts.png", value: 4},
    {src: "images/5_of_hearts.png", value: 5},
    {src: "images/6_of_hearts.png", value: 6},
    {src: "images/7_of_hearts.png", value: 7},
    {src: "images/8_of_hearts.png", value: 8},
    {src: "images/9_of_hearts.png", value: 9},
    {src: "images/10_of_hearts.png", value: 10},
    {src: "images/jack_of_hearts.png", value: 10},
    {src: "images/queen_of_hearts.png", value: 10},
    {src: "images/king_of_hearts.png", value: 10},
    {src: "images/ace_of_hearts.png", value: 11},
    //spades
    {src: "images/2_of_spades.png", value: 2},
    {src: "images/3_of_spades.png", value: 3},
    {src: "images/4_of_spades.png", value: 4},
    {src: "images/5_of_spades.png", value: 5},
    {src: "images/6_of_spades.png", value: 6},
    {src: "images/7_of_spades.png", value: 7},
    {src: "images/8_of_spades.png", value: 8},
    {src: "images/9_of_spades.png", value: 9},
    {src: "images/10_of_spades.png", value: 10},
    {src: "images/jack_of_spades.png", value: 10},
    {src: "images/queen_of_spades.png", value: 10},
    {src: "images/king_of_spades.png", value: 10},
    {src: "images/ace_of_spades.png", value: 11},
    //diamonds
    {src: "images/2_of_diamonds.png", value: 2},
    {src: "images/3_of_diamonds.png", value: 3},
    {src: "images/4_of_diamonds.png", value: 4},
    {src: "images/5_of_diamonds.png", value: 5},
    {src: "images/6_of_diamonds.png", value: 6},
    {src: "images/7_of_diamonds.png", value: 7},
    {src: "images/8_of_diamonds.png", value: 8},
    {src: "images/9_of_diamonds.png", value: 9},
    {src: "images/10_of_diamonds.png", value: 10},
    {src: "images/jack_of_diamonds.png", value: 10},
    {src: "images/queen_of_diamonds.png", value: 10},
    {src: "images/king_of_diamonds.png", value: 10},
    {src: "images/ace_of_diamonds.png", value: 11}   
]


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
    hasBlackJack = false;

    // display initial cards and sum

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
