/*###The Weekend

var input = process.argv[2];

if ( input === 'Monday' || input === 'Tuesday' || input === 'Wednesday' || input === 'Thursday' || input === 'Friday') {
	console.log('Weekday')
} else if (input === 'Saturday' || input === 'Sunday'){
	console.log('Weekend')
};


###The Telephone 

var input = process.argv[2];

if (input.length >= 9) {
	console.log('Valid')
} else if (input.length < 9) {
	console.log('Invalid')
}; 

###Countr*/

var start = parseInt(process.argv[2]);
var end = parseInt(process.argv[3]);


for ( var i = start + 1; i < end; i++) {
	console.log(i)
};


