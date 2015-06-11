var net = require('net');
var server = net.createServer();
var colors = require('colors');






server.on('connection', function(client){
console.log('client connected')
client.setEncoding('utf8');

client.on('data', function(stringFromClient){
	console.log(stringFromClient);
	var input = stringFromClient.trim();
	var splitInput = input.split(' ');
	console.log(splitInput);
	client.write(splitInput + '\n')
	

});

});



server.listen(8124, function(){


	console.log('server bound')
});