var fs = require('fs');
var Mustache = require('mustache');





var fileName = fs.readFileSync('./dear_diary/diary.txt', 'utf8');
var fileNameCount = fileName.split()

for ( var i = 0; i < fileNameCount.length; i++){
	console.log(fileNameCount[i])

}


