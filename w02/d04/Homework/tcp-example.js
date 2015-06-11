var fs = require('fs');
var command = process.argv[2];
var jsonData = fs.readFileSync('./data.json', 'utf8');
var messages = JSON.parse(jsonData);



var net = require('net');

var server = net.createServer();

server.on('connection', function(client) { //'connection' listener
  console.log('client connected');
  client.setEncoding('utf8');

  client.on('data', function(stringFromClient) {
    console.log(stringFromClient);
    var input = stringFromClient;
    var newObject = {name: input};

    client.write('Hello other computer!');
    client.end();
  });
});

server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});