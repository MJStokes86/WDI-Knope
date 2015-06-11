var express = require('express');
var fs = require('fs');
var Mustache = require('mustache');
var request = require('request');

var app = express();

var url = 'http://api.randomuser.me/'




request.get(url, function(err, response, body){
var parsed = JSON.parse(body);
var name = parsed.results[0].user.name;
var gender = parsed.results[0].user.gender;
var nationality = parsed.results[0].user.nationality;
var picture = parsed.results[0].user.picture.medium;


})

app.get('/', function(req, res){
	res.send('Make Human')
	

});

app.get('/randomHuman', function(req, res){
	res.send(fs.readFileSync('./exercise.html', 'utf8'))

function randomHuman(name, gender, nationality, picture){
	this.name = 'mike',
	this.gender = 'male',
	this.nationality = 'usa',
	this.picture = 'adsdasf'
	this.render = function(){
		console.log("working")
		var template = fs.readFileSync('./exercise.html', 'utf8')
		var html = Mustache.render(template, {
			name: this.name,
			gender: this.gender,
			nationality: this.nationality,
			picture: this.picture
		})
		// return html;
			

	}
	
}


// var newHuman = new randomHuman(name, gender, nationality, picture);
//     res.send(newHuman.render());



});






app.listen(3000, function(){
	console.log('Listening!')
})

