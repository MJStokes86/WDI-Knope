var request = require('request');
var country = process.argv[2];
var city = process.argv[3];
var url = 'http://api.wunderground.com/api/1757c7123bdcf21e/geolookup/conditions/forecast/q/ ' + country + '/' + city + '.json'


request.get(url, function(error, response, body){
	var parsedJSON = JSON.parse(body);

	console.log(parsedJSON.current_observation.temperature_string)
})
