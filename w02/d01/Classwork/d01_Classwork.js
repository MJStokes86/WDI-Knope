var stuff = ['breh', 'bre', 'braaahhh'];

for(var i = 0; i < stuff.length; i++){
	console.log(stuff[i]);
}

###The Royal We

var names = ['Jeffrey Of Westchster', 'Neel Of Jersey', 'Fritz Of Suburban Chicago'];
var royalNames = []
for ( var i = 0; i < names.length; i++) {
	var sirNames = console.log('Sir ' + names[i])
	royalNames.push(sirNames)
};

for (var i = 0; i < names.length; i++) {
	console.log("His royal highness " + royalNames[i] " is a great fan of Maroon Five")
};

###Name Lengths

var names = ['Thom', 'Phil', 'Colin', 'Ed', 'Johnny'];

for (var i = 0; i < names.length; i++) {
	var currentLength = names[i].length;
	var currentName = names[i];
	if ( currentLength < 3) {
		console.log( names[i] + " is a short name")
	}

	else if (names[i].length >= 3 && names[i].length <= 5) {
		console.log("NAME is a medium name")
	}

	else if (currentLength > 5) {
		console.log("NAME is a loooooong name")
	}
	
};

###Emphasis

var moz = "And if a ten ton truck kills the both of us, to die be your side, well the pleasure, the privilege is mine...";

for ( var i = 0; i < moz.length; i++) {
	if (mozArray[i].charAt(0) === 't'){
		newArray.push(mozArray[i].replace('t', 'T'))
	}

	else {
		newArray.push(mozArray[i]);
	}

}
console.log(newArray.join(""))