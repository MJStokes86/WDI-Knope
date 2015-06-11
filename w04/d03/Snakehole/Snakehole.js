var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request')
var key = '80b05dc3c5a4a55b6a4b2711fb70b05';
//var url = 'https://api.instagram.com/v1/tags/{tag-name}?access_token=80b05dc3c5a4a55b6a4b2711fb70b05'

app.get('/', function(req, res){
	fs.readFile('./snakehole.html', 'utf8', function(err , data){
		res.send(data);
	});
	});

app.get('/tags/search/', function(req, res){
	var url = 'https://api.instagram.com/v1/tags/search/?access_token= ' + key;
	request.get(url, function(req, res){
		var parsed = JSON.parse(body)

app.get('/search', function(req, res){
	var input = toString(request.query.input);
	res.send("")
});

});
});


app.listen(3000, function(){
	console.log("Listening to Snakehole!")
});