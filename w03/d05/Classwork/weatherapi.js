//1757c7123bdcf21e

var request = require('request');
var city = process.argv[2];
var state = process.argv[3];

request.get('http://api.wunderground.com/api/1757c7123bdcf21e/conditions/q/' + state + '/' + city +'.json', function(error, response, body){
	var parsedBody = JSON.parse(body);
	var weather = parsedBody.weather

	//console.log(parsedBody);
	console.log( 'The CURRENT CONDITION IS  ' + parsedBody.current_observation.temperature_string + '.')

})