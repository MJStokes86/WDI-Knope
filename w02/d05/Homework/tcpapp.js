var net = require('net');
var server = net.createServer();
var fs = require('fs');
var michaelAccount = [];
var nestaAccount = [];
var juiliaAccount = [];

michaelAccount.push({
	title: process.argv[3],
	body: process.argv[4]
});
nestaAccount.push({
	title: process.argv[3],
	body: process.argv[4]
});
juiliaAccount.push({
	title: process.argv[3],
	body: process.argv[4]
});





server.on('connection', function (client){
var user = process.argv[2];
switch (user) {
	case "Michael": 
	console.log('Michael connected');
	break;
	case "Nesta":
	console.log('Nesta connected');
	break;
	case "Julia":
	console.log('Julia connected')
default:
	console.log('Client connected')
}
	client.setEncoding('utf8');


	client.on('data', function(stringFromClient) {
		console.log(stringFromClient)
		var input = stringFromClient.trim();
		var splitInput = input.split(' ');
		console.log(splitInput);
		client.write(splitInput + '\n');


if (user === "Michael"){
var jsonMichael = JSON.stringify(michaelAccount);
fs.readFileSync('./michaelAccount.json', jsonMichael, 'utf8')
var michael = JSON.parse(jsonMichael);
}


		







});

});
var user = process.argv[2]
if (user === 'Michael'){

server.listen(8124, function() { //'listening' listener
  console.log('Server bound ("Michael")');
});
} else if (user === 'Nesta') {
	server.listen(8125, function() {
		console.log('Server bound ("Nesta")');
	});
} else if (user === 'Julia') {
	server.listen(8126, function() {
		console.log('Server bound ("Julia")');
	});
}

else {
	server.listen(1234, function() {
		console.log('Server bound')
	});
}
