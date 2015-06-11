var fs = require('fs');
var command = process.argv[2];
var DATA_FILE = './data.json';
var messages = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

function save(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data), 'utf8');
}


var net = require('net');

var server = net.createServer();

server.on('connection', function(client) { //'connection' listener
  console.log('client connected');
  client.setEncoding('utf8');

  

client.on('data', function(stringFromClient) {
    console.log(stringFromClient);


if (command === 'received') {
  if (messages.length > 0) {
    messages.forEach(function(msg){
      console.log(msg);
    });
  } else {
    console.log("No messages...")
  }

} else if (command === 'leave') {
  var msg = process.argv[3];

  messages.push(msg);
  save(messages);

  console.log("Thanks!");

} else if (command === 'clear') {
  // save an empty array to data file - ie overwrite whatever was there
  save([]);

  console.log("All messages cleared.")

} else {
  console.log("Incorrect command. Try `leave MSG`, `received`, or `clear`");
}


client.write('Hello computer!');
    client.end();
  });
});

server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});


