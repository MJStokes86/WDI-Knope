var Mustache = require('mustache');

var story = "We went to the {{noun}} and learned {{noun2}}."

var newStory = Mustache.render(story, {"noun": "school", "noun2":"mustache"});

console.log(newStory);