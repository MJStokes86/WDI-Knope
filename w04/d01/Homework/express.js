var express = require('express');
var app = express();


app.get( '/', function(request, response) {
	response.send("Please choose either 'heads' or 'tails' .")
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
		
})




app.listen(3000, function(){

	console.log('Listening on port 3000!')
});