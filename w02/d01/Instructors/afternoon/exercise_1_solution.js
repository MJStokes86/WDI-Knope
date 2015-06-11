var fs = require('fs');

var textFromFile = fs.readFileSync('./exercise.txt', 'utf8');

var updatedText = textFromFile.replace("World", "universe").replace("today", "this afternoon");

var story = "I went to the noun and did some verb"

console.log(updatedText);