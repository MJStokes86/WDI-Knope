var express = require('express');
var app = express();
var fs = require('fs');



app.get('/', function(request, response){
	 fs.readFile('./calculator.html', 'utf8', function(err, data){
		response.send(data);
	});
	});

app.get('/add', function(request, response){
	var num1 = parseInt(request.query.num1);
	var num2 = parseInt(request.query.num2);
	var sum = num1 + num2;

response.send("<h1>Sum: " + sum + "</h1>");
});

app.get('/sub', function(request, response){
	var sub1 = parseInt(request.query.num1);
	var sub2 = parseInt(request.query.num2);
	var subtract = sub1 - sub2;

response.send("<h1>Subtract: " + subtract + "</h1>");
});


app.listen(3000, function(request, response){
	console.log('Listening on port 3000')
});