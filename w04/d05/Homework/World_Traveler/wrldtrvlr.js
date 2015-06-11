var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./wrldtrvlr.db');
var command = process.argv[2];






switch (command) {



case 'record':
var id = process.argv[3];
var city = process.argv[4];
var country = process.argv[5];
var arrival = process.argv[6];
var departure = process.argv[7];





db.run("INSERT INTO itinerary(id, city, country, arrival, departure) values (NULL,?,?,?,?);", id, city, country, arrival, departure)
	
console.log('You just entered the following destination to your itinerary: ' + id + ' | '+ city + ' | '+ country + ' | '+ arrival + ' | ' + departure)


	break;

case 'stops':
db.all('select * from itinerary; ', {}, function(err, data){
	data.forEach(function(el){
		console.log(el.city, el.country)
	})
});

	break;

case 'enter':
var title = process.argv[3];
var arrival_date = process.argv[4];
var body = process.argv[5];
var journal_id = process.argv[6];



db.run("INSERT INTO journal_entry(title, arrival_date, body, journal_id) values (?,?,?,?);", title, arrival_date, body, journal_id)
	
console.log('You just logged the following entry to your journal: ' + title + ' | '+ arrival_date + ' | '+ body)









break;

case 'read':


var city = process.argv[3];


db.all("SELECT * FROM journal_entry WHERE title = \'"+city+"\';"  , {}, function(err, data){
	data.forEach(function(el){
		console.log(el.body)

	})
})


break;

case 'weather':

var request = require('request');
var country = process.argv[3];
var city = process.argv[4];
var url = 'http://api.wunderground.com/api/1757c7123bdcf21e/geolookup/conditions/forecast/q/ ' + country + '/' + city + '.json'


request.get(url, function(error, response, body){
	var parsedJSON = JSON.parse(body);

	console.log('THE CURRENT CONDITION IS ' + parsedJSON.current_observation.temperature_string + '.')
})

break;
}

