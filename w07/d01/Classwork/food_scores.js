var request = require('request');
var url = 'https://data.cityofnewyork.us/resource/xx67-kt59.json'
var command1 = process.argv[2];
var command2 = process.argv[3];
var command3 = process.argv[4];




request.get(url, function(error, response, body){
	var parsedBody = JSON.parse(body);

	switch (command1) {

		case 'names':
		console.log(parsedBody[0].dba)
		break;


	}
})
