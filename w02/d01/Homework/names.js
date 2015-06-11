var fs = require('fs');


var printNames = fs.readFileSync('./names.txt', 'utf8');
var updatedNames = printNames.split(" ")

for ( var i = 0; i < updatedNames.length; i++) {
	console.log(updatedNames[i])

};

