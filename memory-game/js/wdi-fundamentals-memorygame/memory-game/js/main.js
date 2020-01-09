console.log("Up and running!");
var cards = [
{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

function flipCard(cardId) {

cardsInPlay.push(cards[cardId].rank);

if (cardsInPlay.length === 2) {
	  if (cardsInPlay[0] === cardsInPlay[1]){ 
	   alert("You found a match!");
} else if(cardsInPlay[0] !== cardsInPlay[1]){
    alert("Sorry, try again.");
}return flipCard
;}
console.log("User flipped " + cards[cardId].rank);
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);
 checkForMatch();
}



function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
};

var cardsInPlay = [];
