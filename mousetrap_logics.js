let deck = []
let play_card = ""

let msg1 = "Winner!<br>Everyone Else Drink!"
let msg2 = "Loser!<br>You Drink!"
let msg3 = "Everyone Drink"
let score = 0
let tally = 0
const card = document.querySelector('.card');

function startGame(){
	deck = []
	let suits = ["spades","clubs","diamonds", "hearts"]
	let face = ["Ace of ","2 of ","3 of ","4 of ","5 of ","6 of ","7 of ","8 of ","9 of ","10 of ","Jack of ","Queen of ","King of "]
	let val = 1
	
	for (let i=0; i<=face.length-1; i++){
		//deck[i] = [];
		for (let j=0; j<=suits.length-1; j++){
			if (j<2){
				deck.push( [face[i]+suits[j],val, "black"] )
			} else{
				deck.push( [face[i]+suits[j],val, "red"] )
			}
		}
		val = val+1
	}
	
	
	play_card = newCard()
	updateCard()
	document.getElementById("prompt").innerHTML = "Make a guess!"
	console.log(deck)
}

function newCard(){
	let new_card = deck.splice(Math.floor(Math.random() * deck.length),1)
	return new_card
}

function makeGuess(player_guess){
	let new_card = newCard()
	tally = tally+1
	card.classList.toggle('is-flipped');
	console.log(play_card[0][0])
	console.log(new_card[0][0])
	console.log(( ((new_card[0][1] < play_card[0][1]) && (player_guess == "Lower")) ||
		((new_card[0][1] > play_card[0][1]) && (player_guess == "Higher")) ))
	
	if ( (new_card[0][1] == 1) || (play_card[0][1] == 1) ){
		document.getElementById("prompt").innerHTML =(msg3)
		score = score + 1

	}else{
		if ( ((new_card[0][1] < play_card[0][1]) && (player_guess == "Lower")) ||
			((new_card[0][1] > play_card[0][1]) && (player_guess == "Higher")) ){
				
			document.getElementById("prompt").innerHTML =(msg1)
			score = score + 1
		
		} else if ((new_card[0][1] == play_card[0][1]) && (player_guess == "Same")){
			document.getElementById("prompt").innerHTML =(msg1)
			score = score + 1


		} else{	
			document.getElementById("prompt").innerHTML =(msg2)

		}
	}
	
	document.getElementById("score").innerHTML =(score + "/" + tally)
	
	// console.log(deck)
	if (deck.length == 0){
		document.getElementById("prompt").innerHTML =("Game Over!")
	} else {
		setPreviousCard(new_card)
		setTimeout(updateCard, 100); 
	}

}

function setPreviousCard(new_card){
	play_card = new_card;
}

function updateCard(){
	
	document.getElementById("card_face").innerHTML = play_card[0][0];
	document.getElementById("card_face").style.color = play_card[0][2];
}

	
