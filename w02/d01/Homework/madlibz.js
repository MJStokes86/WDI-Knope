var fs = require('fs');
var Mustache = require('mustache');

var noun = process.argv[2];
var verb = process.argv[3];
var adjective = process.argv[4];


var story = fs.readFileSync('./stories/story1.txt', 'utf8');

var updatedStory = Mustache.render(story, {"noun" : noun, "adjective": adjective,"verb": verb});

console.log(updatedStory);