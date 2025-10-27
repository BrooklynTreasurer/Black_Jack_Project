// cards array with image sources and values
const cards = [
    // clubs
    { src: "PNG-cards-1.3/2_of_clubs.png", value: 2 },
    { src: "PNG-cards-1.3/3_of_clubs.png", value: 3 },
    { src: "PNG-cards-1.3/4_of_clubs.png", value: 4 },
    { src: "PNG-cards-1.3/5_of_clubs.png", value: 5 },
    { src: "PNG-cards-1.3/6_of_clubs.png", value: 6 },
    { src: "PNG-cards-1.3/7_of_clubs.png", value: 7 },
    { src: "PNG-cards-1.3/8_of_clubs.png", value: 8 },
    { src: "PNG-cards-1.3/9_of_clubs.png", value: 9 },
    { src: "PNG-cards-1.3/10_of_clubs.png", value: 10 },
    { src: "PNG-cards-1.3/jack_of_clubs.png", value: 10 },
    { src: "PNG-cards-1.3/queen_of_clubs.png", value: 10 },
    { src: "PNG-cards-1.3/king_of_clubs.png", value: 10 },
    { src: "PNG-cards-1.3/ace_of_clubs.png", value: 11 },
    // PNG-cards-1.3
    { src: "PNG-cards-1.3/2_of_hearts.png", value: 2 },
    { src: "PNG-cards-1.3/3_of_hearts.png", value: 3 },
    { src: "PNG-cards-1.3/4_of_hearts.png", value: 4 },
    { src: "PNG-cards-1.3/5_of_hearts.png", value: 5 },
    { src: "PNG-cards-1.3/6_of_hearts.png", value: 6 },
    { src: "PNG-cards-1.3/7_of_hearts.png", value: 7 },
    { src: "PNG-cards-1.3/8_of_hearts.png", value: 8 },
    { src: "PNG-cards-1.3/9_of_hearts.png", value: 9 },
    { src: "PNG-cards-1.3/10_of_hearts.png", value: 10 },
    { src: "PNG-cards-1.3/jack_of_hearts.png", value: 10 },
    { src: "PNG-cards-1.3/queen_of_hearts.png", value: 10 },
    { src: "PNG-cards-1.3/king_of_hearts.png", value: 10 },
    { src: "PNG-cards-1.3/ace_of_hearts.png", value: 11 },
    // spades
    { src: "PNG-cards-1.3/2_of_spades.png", value: 2 },
    { src: "PNG-cards-1.3/3_of_spades.png", value: 3 },
    { src: "PNG-cards-1.3/4_of_spades.png", value: 4 },
    { src: "PNG-cards-1.3/5_of_spades.png", value: 5 },
    { src: "PNG-cards-1.3/6_of_spades.png", value: 6 },
    { src: "PNG-cards-1.3/7_of_spades.png", value: 7 },
    { src: "PNG-cards-1.3/8_of_spades.png", value: 8 },
    { src: "PNG-cards-1.3/9_of_spades.png", value: 9 },
    { src: "PNG-cards-1.3/10_of_spades.png", value: 10 },
    { src: "PNG-cards-1.3/jack_of_spades.png", value: 10 },
    { src: "PNG-cards-1.3/queen_of_spades.png", value: 10 },
    { src: "PNG-cards-1.3/king_of_spades.png", value: 10 },
    { src: "PNG-cards-1.3/ace_of_spades.png", value: 11 },
    // diamonds
    { src: "PNG-cards-1.3/2_of_diamonds.png", value: 2 },
    { src: "PNG-cards-1.3/3_of_diamonds.png", value: 3 },
    { src: "PNG-cards-1.3/4_of_diamonds.png", value: 4 },
    { src: "PNG-cards-1.3/5_of_diamonds.png", value: 5 },
    { src: "PNG-cards-1.3/6_of_diamonds.png", value: 6 },
    { src: "PNG-cards-1.3/7_of_diamonds.png", value: 7 },
    { src: "PNG-cards-1.3/8_of_diamonds.png", value: 8 },
    { src: "PNG-cards-1.3/9_of_diamonds.png", value: 9 },
    { src: "PNG-cards-1.3/10_of_diamonds.png", value: 10 },
    { src: "PNG-cards-1.3/jack_of_diamonds.png", value: 10 },
    { src: "PNG-cards-1.3/queen_of_diamonds.png", value: 10 },
    { src: "PNG-cards-1.3/king_of_diamonds.png", value: 10 },
    { src: "PNG-cards-1.3/ace_of_diamonds.png", value: 11 }
];

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");

let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = 0;
let playerCards = [];

// draw random card function
function getRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}

// start game
function startGame() {
    hasBlackJack = false;
    isAlive = true;
    playerCards = [getRandomCard(), getRandomCard()];
    sum = playerCards[0].value + playerCards[1].value;
    renderGame();
}

// draw new card
function newCard() {
    if (isAlive && !hasBlackJack) {
        const card = getRandomCard();
        playerCards.push(card);
        sum += card.value;
        renderGame();
    }
}

// display game state
function renderGame() {
    cardsEl.innerHTML = "Cards: ";
    playerCards.forEach(card => {
        const img = document.createElement("img");
        img.src = card.src;
        img.alt = card.value;
        img.style.width = "60px";
        img.style.marginRight = "5px";
        cardsEl.appendChild(img);
    });

    sumEl.textContent = "Sum: " + sum;

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
}
