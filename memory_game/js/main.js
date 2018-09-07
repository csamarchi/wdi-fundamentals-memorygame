var cards = ["queens", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = [0];
console.log("User flipped" + cardOne);

var cardTwo = [1];
console.log("User flipped" + cardTwo);

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("You Found A Match");
	}
	else {alert("Sorry, Try Again!")}
}

	
