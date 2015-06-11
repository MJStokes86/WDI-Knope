var fs = require('fs');

var textFromFile = fs.readFileSync('./hello.txt', 'utf8');

console.log(parseInt(textFromFile) + 1000);