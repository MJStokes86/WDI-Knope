var fs = require('fs');
var Mustache = require('mustache');


var movieInfo = {
	title: process.argv[2],
	actor: process.argv[3],
	release_date: process.argv[4],
	runtime: process.argv[5],
	rating: process.argv[6],
}



var addMovie = fs.readFileSync('./movielist.html', 'utf8');
var editMovie = Mustache.render(addMovie, {'title': movieInfo.title, 'actor': movieInfo.actor, 'release_date':movieInfo.release_date, 'runtime':movieInfo.runtime, 'rating': movieInfo.rating});

console.log(editMovie);
