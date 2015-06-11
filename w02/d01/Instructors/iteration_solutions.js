
//knights
var names = ["Jeffrey Of Westchester", "Neel Of Jersey", "Fritz Of Suburban Chicago"];
var knights = [];

for(var i = 0; i < names.length; i++){
	var newName = "sir " + names[i];
	knights.push(newName);
}

for(var i = 0; i < knights.length; i++){
	console.log("His royal highness " + knights[i]  " is a great fan of maroon five");
}



//name lengths
var names = ["Thom", "Phil", "Colin", "Ed", "Johhny"];


for(var i = 0; i < names.length; i++){
	var currentLength = names[i].length;
	var currentName = names[i];
	if(names[i].length > 3 && names[i].length < 5){
		console.log(names[i] + " is a medium name");
	}else if(currentLength > 5){
		console.log(currentName + " is a long name");
	}else if(currentLength < 3){
		console.log(currentName + " is a short name");
	}
}


//find the capitalize words beginning with t


var moz = "And if a ten ton truck kills the both of us, to die be your side, well the pleasure, the privilege is mine...";
var mozArr = moz.split(' ');
var newArr = [];

for (var i = 0; i < mozArr.length; i++) {
    if (mozArr[i][0] === 't') {
        newArr.push(mozArr[i].replace('t','T'));
    }
}















var input = process.argv[2];

if(input === "saturday" || input === "sunday"){
	console.log("weekend");
}else{
	console.log("weekday");
}









