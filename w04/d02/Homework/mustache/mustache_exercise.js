var Mustache = require('mustache');
var fs = require('fs');
var dataArray = fs.readFileSync('./data.json', 'utf8')
var parsedArray = JSON.parse(dataArray)
var list = fs.readFileSync('./list.html','utf8');
var random = fs.readFileSync('./random.html', 'utf8');
var command = process.argv[2];
//var parsedList = JSON.parse(list)
// var postList = Mustache.render(random, {blog: parsedArray})
// var postList2 = Mustache.render(list, {blog:parsedArray});





if (command === 'list'){
	var postList2 = Mustache.render(list, {blog:parsedArray});
	console.log(postList2)
	fs.writeFileSync('./list-name.html',postList2, 'utf8');

}else if (command === 'random'){
	var randomList = Math.floor((Math.random() * parsedArray.length) + 1)
	var postList = Mustache.render(random, {blog: parsedArray})
	console.log(parsedArray[randomList])
	fs.writeFileSync('./random-name.html', postList, 'utf8');

}


