var input = process.argv[2];

//use split to get an array of letters. reassign that array to a new variable

var splitInput = input.split("");

//create an empty array to hold our new word. we will be 'pushing' each thing in letter by letter
var newWord = [];

//loop through our splitInput, adding a hyphen to each letter
//we don't want to add a hyphen to the last letter, so we can check to make sure that
//we only add a hyphen to letters that ARENT the last letter
for(i = 0; i < splitInput.length; i++){
	if(i !== (splitInput.length-1)){
	//create a variable to hold our individual letters after we have concatenated a hyphen on
	var changedLetter = splitInput[i] + "-";
	//push the changed letter into our new word array
	newWord.push(changedLetter);
	}else{
		//we don't want to add anything to the last letter, so we just push the unchanged letter into our array
		var unChangedLetter = splitInput[i];
		newWord.push(unChangedLetter)
	}
}

//join the array and log it 
var joined = newWord.join("");

console.log(joined);