var net = require('net');
var server = net.createServer();

server.on('connection', function(client) { 
  console.log('client connected');
  client.setEncoding('utf8');

  client.on('data', function(stringFromClient) {
    console.log(stringFromClient);
    
  });
});

server.listen(8124, function() { 
  console.log('connected');
});