var fs = require('fs');

var text = fs.readFileSync('./hipster.txt', 'utf8');

console.log(text);