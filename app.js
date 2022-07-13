
// CARD VARIABLES
let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let stillAlive = true;
let message = "";
// DOM VARIABLES
let cardsEl = document.getElementById("cardsEl");
let sumEl = document.getElementById("sumEl");
let messageEl = document.getElementById("messageEl");

const startGameEl = document.getElementById("startGame");
const drawCardEl = document.getElementById("drawCard");
const newGameEl = document.getElementById("newGame")

// FUNCTIONS

function startGame() {
  renderGame();
}

startGameEl.addEventListener("click", renderGame);
function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game.";
    stillAlive = false;
  }
  messageEl.textContent = message;
}

drawCardEl.addEventListener("click", function newCard() {
  let newCard = Math.floor(Math.random() * 11) + 1;
  sum += newCard;
  cards.push(newCard);

  renderGame();
});

newGameEl.addEventListener("click", function newGame(){
    window.location.reload();
})


