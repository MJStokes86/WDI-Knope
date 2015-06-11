var express = require ('express');
var app = express();
var request = require('request');
//var url = 'http://api.wunderground.com/api/1757c7123bdcf21e/conditions/q/'


app.get('/', function(request, response){
	response.send("<h1>Welcome! Let's check the weather!</h1>");
});

app.get('/forecast/:state/:city', function(request, response){
 var city = request.params.city
 var state = request.params.state
 var url = 'http://api.wunderground.com/api/1757c7123bdcf21e/conditions/q/ ' + state + ' / ' + city + '.json'
request.get(url, function(error, response, body){
	var parsedBody = JSON.parse(body);
	var temp = parsedBody.current_observation.temp_f

response.send(temp)
});
});






app.listen(3000, function(response, request){
	console.log('Listening on port 3000');
});