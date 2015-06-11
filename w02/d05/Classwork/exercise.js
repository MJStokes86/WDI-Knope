var net = require('net');
var server = net.createServer();
var command = process.argv[2];


server.on('connection', function(client) {
	console.log('Client connected');
	client.setEncoding('utf8');


client.on('data', function(stringFromClient) {
	console.log(stringFromClient);
if (command === 'hello') {
	setInterval(function() {
		console.log('are you there?')
	}, 10000);
}

});
});



server.listen(8124, function(){
	console.log('connected')
});