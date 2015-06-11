
//grab input and split it, resulting in an array
var word = process.argv[2].split("")
//create an empty array we can push into
var newWord = []
//loop through our array of letters
for(i = 0; i < word.length; i++){
	//use even and odd numbers to alternate letters
	if(i % 2 === 0){
		//even index numbers result in an uppercased letter
		var newLetter = word[i].toUpperCase()
		//push the uppercased letter into our array
		newWord.push(newLetter);
	}else{
		//push unchaned letter into array
		newWord.push(word[i])
	}
}

//reassign new word to the result of joining it
newWord = newWord.join("")

//log it
console.log(newWord)