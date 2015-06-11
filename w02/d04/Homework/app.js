var fs = require('fs');
var command = process.argv[2];
var DATA_FILE = './data.json';
var messages = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

function save(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data), 'utf8');
}

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