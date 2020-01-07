const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push('cardOne', 'cardTwo');
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardOne);

if (cardsInPlay.length === 2) {
	
  if (cardsInPlay[0] === cardsInPlay[2]) { 
	alert("You found a match!");
}else{
	alert("Sorry, Try again");
}

}