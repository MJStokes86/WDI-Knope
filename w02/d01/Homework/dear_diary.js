var fs = require('fs');
var Mustache = require('mustache');

var title = process.argv[2];
var author = process.argv[3];
var body = process.argv[4];


var diaryEntry = fs.readFileSync('./dear_diary/diary.txt', 'utf8');

var updatedEntry = Mustache.render(diaryEntry, {title: " "}, {author: " "}, {body: " "});

console.log(updatedEntry);