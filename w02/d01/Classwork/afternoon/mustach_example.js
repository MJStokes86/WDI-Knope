var Mustache = require('mustache');

var story = "Today is {{day}} and it is {{temperature}} outside."

var newStory = Mustache.render(story, {"day": "Monday", "temperature": "37 degrees"});

console.log(newStory)