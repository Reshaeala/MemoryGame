console.log("UP AND RUNNING!");
var cards = [{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
},{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
}];

var cardsInPlay = [];
var score = 0;
var resetButton = document.getElementById('reset');
var flipCount = 0;

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function resetGame () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.querySelector('img');
    cardElement.remove();
    console.log('removeboard' + i);
  }
  score = -1;
  cardsInPlay.length = 0;
  updateScore();
  createBoard();
  alert("New Game! Begin");
  resetButton.style.visibility = "hidden";
  flipCount = 0;
}

 function updateScore () {
  if (score < 2) {
    score++;
    console.log("Score is " + score);
    document.getElementById('score').textContent = "Score: " + score;
    if (score === 2) {
     alert("You Win!");
      resetButton.style.visibility = "visible";
    }
  }
}

 function checkForMatch () {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
       alert("You found a Match!");
      cardsInPlay.length = 0;
      updateScore();
    } else {
      alert("Sorry, Not a Match!");
      cardsInPlay.length = 0;
      resetButton.style.visibility = "visible";
    };
  };
};

function flipCard() {
  if (flipCount > 4) {
    alert("Restart the Game!");
  } else {
    var cardId = this.getAttribute('data-id');
   this.setAttribute('src', cards[cardId].cardImage);
   console.log("User Flipped " + cards[cardId].rank);
   console.log(cards[cardId].suit);
   console.log(cards[cardId].cardImage);
   cardsInPlay.push(cards[cardId].rank);
   checkForMatch();
   flipCount++;
  }
};

resetButton.addEventListener('click', resetGame);
createBoard();