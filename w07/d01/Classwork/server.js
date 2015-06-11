var express = require('express');
var app = express();
var colors = require ('colors')


// if(stringFromClient === 'GET' && resource === '/'){
// 	console.log("user has connect to'/' " )
// };

app.get('/', function(request, response){
	console.log("user has hit resource'/'");
	response.send("Hello World!")
});

app.get('/colors/:num', function(request, response){
	console.log("User has hit resource for 'colors'");

	switch(request.params.num){
		case "1":
		var data = {color: 'black', hue:'sunset', inCrayola:true};
	response.send(JSON.stringify(data));
	break;
	case "2":
	var data = {color: 'blue', hue:'sunset', inCrayola:true};
	response.send(JSON.stringify(data))

			
	break;
	default:
	response.send("ERROR");
}
	console.log(request.params);
	// var data = {color: 'black', hue:'sunset', inCrayola:true};
	// response.send(JSON.stringify(data));
});

app.get('/colors/1/image', function(request, response){
	var html = "<h1>Carrie</h1><img src='http://www.southernhillsanimalhospital.com/sites/site-1450/images/kittens.jpg'>"
	response.send(html);
});

app.get('/name/:message', function(request, response){
	var text = request.params.name + " said " + request.params.message;
	response.send(text);

});


app.listen(3000, function(){
console.log('Listening on port 3000!')
});