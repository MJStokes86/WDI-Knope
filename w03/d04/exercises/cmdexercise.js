

var userInput = process.argv[2];

if ('Andy' === userInput){
	console.log(userInput.toUpperCase() + ' has ' + userInput.length + ' letters.')
}




var userInput = process.argv[2];

if (userInput.length > 10) {
	console.log('big string yo!');
}else if(userInput.length < 3){
	console.log('small string yo!');
}
else {
	console.log('Run of the mill length');
}


var fs = require('fs');
var json = fs.readFileSync('./addressBook.json', 'utf8')
var bigArrayofObjects = JSON.parse(json)
var nameInput = process.argv[3];
var emailInput= process.argv[4];
var command = process.argv[2];
var addressBook = {
	name: nameInput,
	email: emailInput
}

switch(command) {
	case 'add':
	bigArrayofObjects.push(addressBook)
	console.log('Thanks for adding')
	break;
	case 'list':
	bigArrayofObjects.forEach(function(key){
		console.log(key.name)
	})
	break;
default:
}



var backToJson= JSON.stringify(bigArrayofObjects);
fs.writeFileSync('./addressBook.json', backToJson);




