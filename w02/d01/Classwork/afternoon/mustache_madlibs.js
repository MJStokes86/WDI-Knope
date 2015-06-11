var fs = require('fs');
var Mustache = require('mustache');

var noun = process.argv[4];
var adjective = process.argv[5];
var verb = process.argv[6];
var noun2 = process.argv[7];

var story = fs.readFileSync('./stories/story1.txt', 'utf8');

var updatedStory = Mustache.render(story, {"noun" : noun, "adjective": adjective,"verb": verb, "noun2": noun2});

console.log(updatedStory);