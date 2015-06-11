 var fs = require('fs')
 var nycTrip = [];
 

nycTrip.push({
	hotel: 'The Ritz Carlton',
	flight: 'American Airlines',
	spa: 'The Nickel Spa',
	haircut: 'The Diamond Cut Salon and Barber Shop',
	outfit: 'Giorgio Armani'
});



var jsonString = JSON.stringify(nycTrip);
fs.writeFileSync('./nyc.json', jsonString, 'utf8')
var list = JSON.parse(jsonString)


for (var i = 0; i < list.length; i++) {
	if (process.argv[2] === 'list') {
		console.log(list[i]);
	}

	if (process.argv[2] === 'book' && process.argv[3] === 'hotel') {
		console.log("Congratulations! You have successfully booked your hotel room at " + list[i].hotel);
		
	}

	if (process.argv[2] === 'book' && process.argv[3] === 'flight') {
		console.log("Congratulations! You have successfully booked your flight at " + list[i].flight + "!");
	}

	if (process.argv[2] === 'book' && process.argv[3] === 'spa') {
		console.log("Congratulations! You have successfully booked your spa appointment at " + list[i].spa + "!");
	}

	if (process.argv[2] === 'get' && process.argv[3] === 'haircut') {
		console.log("Congratulations! You are set to have your hair done at " + list[i].haircut + "!");
	}

	if (process.argv[2] === 'buy' && process.argv[3] === 'outfit') {
		console.log("Congratulations! You are all set to wear your " + list[i].outfit + " suit to the wedding!");
		console.log("Congratulations! You are all set for the weekend!")
}




};
