var fs = require('fs');
var Mustache = require('mustache');

var text = fs.readFileSync('./exercise2.txt', 'utf8');

var updatedText = Mustache.render(text, {"name": "Neel"});

console.log(updatedText);