var request = require('request');
var fs = require('fs')




request.get('http://pokeapi.co/api/v1/pokedex/1/', function(error, response, body){
	var userInput = process.argv[2];
	var jsonData = fs.readFileSync('./pokemon.json', body);
	var pokeBody = JSON.parse(body)
	var data = pokemon.data;

	for (i = 0; i < pokemon.data; i++) {
		

	}




});