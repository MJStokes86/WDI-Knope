// var net = require('net');
// var server = net.createServer();

// server.on('connection', function(client) {
// 	console.log('client connected');
// 	client.setEncoding('utf8');

// 	client.on('data', function(stringFromClient){
// 		console.log(stringFromClient);
// 		var input = stringFromClient.trim();
// 		var splitInput = input.split( ' ');
// 		console.log(splitInput);
// 		var command = splitInput[0];

// 		if (command === 'hello'){
// 			client.write("hello!?!?! That's what you say to me? hello??");
// 		}else if (command === 'sorry'){
// 			client.write("sorry!?!?! That's what you say to me? sorry??")
// 		}


// 	});
// });



// server.listen(8124, function(){
// 	console.log('server bound');
// });

var net = require('net');
var server = net.createServer();
