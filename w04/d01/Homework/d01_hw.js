var express = require('express');
var app = express();


app.get( '/', function(request, response) {
	
	response.send('Please chose either heads or tails')
});


app.get('/cointoss/:num', function(request, response){
		var randomNumber = Math.floor((Math.random() * 2) + 1);

		var heads = "<h1>HEADS WINS!</h1><img src = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'> "
		var tails = "<h1>TAILS WINS!</h1><img src = 'http://www.bernstein-plus-sons.com/.dowling/Probability_Module/www.busyteacherscafe.com/Coin%2520Clipart_files/quarter_tail.jpg'> "

		if ( randomNumber === 1){
			response.send(heads)
		}
		else {
			response.send(tails)
		}
		console.log(randomNumber)
})


app.get('/dice/', function(request, response){
	var randomNumber = Math.floor((Math.random() * 6) +1)
	var n = randomNumber.toString();
	response.send(n);
});
	
app.get('/magic8ball/willitsnowtomorrow/:str', function(request, response){
	

	var randomArray = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes", "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Yes, and Neel's outfit is looking perfectly coordinated today.",
  "Better not tell you now",
  "No, but Jeff LOVES that new Maroon Five song.",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]


var answers = Math.floor((Math.random() * randomArray.length) + 1)

response.send(randomArray[answers]);
console.log(request.params.str)

})

app.get('/rps/:str', function(request, response){

var randomArray = ['rock', 'paper', 'scissors'];
var results = Math.floor((Math.random() * randomArray.length) + 1)
switch (request.params.str){
	
	case 'rock':
	if(randomArray[results] === 'rock'){
		response.send('Tie!')
	}else if(randomArray[results] === 'paper'){
		response.send('Rock Wins!')
	}else if(randomArray[results] === 'scissors'){
		response.send('Rock Wins!')
	}
	break;

	case 'paper':
	if(randomArray[results] === 'paper'){
		response.send('Tie!')
	}else if(randomArray[results] === 'rock'){
		response.send('Paper Wins!')
	}else if(randomArray[results] === 'scissors'){
		response.send('Scissors Wins!')
	}
	break;

	case 'scissors':
	if(randomArray[results] === 'scissors'){
		response.send('Tie!')
	}else if(randomArray[results] === 'rock'){
		response.send('Rock Wins!')

	}else if(randomArray[results] === 'paper'){
		response.send('Scissors Wins!')
	}
	break;
}

})


app.listen(3000, function(){

	console.log('Listening on port 3000!')
});

