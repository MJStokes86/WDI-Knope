var evidence = [
	{"name":"Jay","residence":"Baltimore","age":16,"relationship_to_hae":"Friend of Ex Boyfriend"},
	{"name":"Adnan","residence":"Baltimore","age":17,"relationship_to_hae":"Ex Boyfriend"},
	{"name":"Neel","residence":"Prospect Heights","age":29,"relationship_to_hae":"God only knows"},
	{"name":"Don","residence":"Maryland","age":22,"relationship_to_hae":"Ex Boyfriend"},
	{"name":"Fritz","residence":"Gowanus","age":28,"relationship_to_hae":"admirer from a distance"},
	{"name":"David Schwimmer","residence":"Manhattan","age":42,"relationship_to_hae":"friend"}
]


//1 create an array of suspects' names
//create a new array to hold names. we will push names into this array

var suspectNames = [];


//we want to iterate through the evidence array, so we will create a for loop
for(var i = 0; i < evidence.length; i++){
	//we use dot notation below to access the name property of each object as we loop through
	//then we push that name into the array of names
	suspectNames.push(evidence[i].name);
}

//2 Create an array that holds all suspects older than 20 and younger than 30//

//create an array to hold our suspects. This time, we want to hold objects themselves, not just names (strings)
var suspectsBetweenTwentyAndThirty = [];

//loop again
for(var i = 0; i < evidence.length){
	//now we need some control flow to check each object's age property
	if(evidence[i].age > 20 && evidence[i].age < 30){
		//if they are older than 20 and younger than 30, push the
		//WHOLE OBJECT into our array
		suspectsBetweenTwentyAndThirty.push(evidence[i])
	}
}

//3 Create an array of suspects that are ex boyfriends

//create an array to hold ex boyfriends
var exBoyFriends = [];

//start our loop, looking for any objects whose relationship_to_hae property is "ex boyfriend"
for(var i = 0; i < evidence.length; i++){
	//writing evidence[i] is annoying, we can just assign that to a variable
	//the variable will be reassigned each time we loop through
	var suspect = evidence[i];
	if(suspect.relationship_to_hae === "Ex Boyfriend"){
		exBoyFriends.push(suspect);
	}
}



//4 Create an array holding any suspects younger than 20, that are ex boyfriends and live in baltimore
var adnans = [];

for(var i = 0; i < evidence.length; i++){
	var suspect = evidence[i];
	if(suspect.residence === "Baltimore" && suspect.age < 20 && suspect.relationship_to_hae === "Ex Boyfriend"){
		adnans.push(suspect);
	}
}










