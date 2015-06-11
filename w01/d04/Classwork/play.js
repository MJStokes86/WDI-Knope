
var word = ['New York', 'Mr. Williams', 'Cab Driver','subway','sleep', 'ate','bus', '34th Street','Manhattan', 'nauseating','shower', 'dressed']
var noun = word[0], word[1], word[2], word[3], word[6], word[7], word[8], word[10]
var verb = word[4], word[5]
var adjective = word[9], word[11]

///Word List///
console.log('***Please choose from the list of words***')
console.log("first: " ,word[0])
console.log("second: ",word[1])
console.log("third: " ,word[2])
console.log("fourth: ",word[3])
console.log("fifth:  ",word[4])
console.log("sixth:  " ,word[5])
console.log("seventh: ", word[6])
console.log("eighth:    ",word[7])
console.log("ninth:    " ,word[8])
console.log("tenth:    " ,word[9])
console.log("eleventh: " ,word[10])
console.log("twelfth:  " ,word[11])

///Nouns////

console.log('***Please choose a noun***')
console.log("first: " ,word[0])
console.log("second: ",word[1])
console.log("third: " ,word[2])
console.log("fourth: ",word[3])
console.log("fifth: ", word[6])
console.log("sixth:    ",word[7])
console.log("seventh:   ",word[8])
console.log("eighth: " ,word[10])

///Verbs///
console.log('***Please choose a verb***')
console.log("first:  ",word[4])
console.log("second:  " ,word[5])

///Adjectives///

console.log('***Please choose an adjective***')
console.log("first:    " ,word[9])
console.log("second:  " ,word[11])


if(word[2]===word) {
	console.log('Please pick three words. Then put your words in order.')
}
else if (word[2]==='play') {
	console.log(word[3]);
}



/*On March 10, 2015, _____person____ arrived in New York City.
When I got off the _____noun___, I met a ____person____ who gave me
a ride to ____noun______.  Once I got there, I met ____person_____, who 
gave me a _____noun____. Then I ____verb____, and got ____verb___. 
On my way out of the ___noun_____, I came across a ___noun____. 
Then I got on a ____noun____, and then headed to ____noun___. 
I got off on ___noun______, then headed to ___noun____. I
___verb____ there, then afterwards, I walked to _____noun___. 
On my way home, I ____verb___. Then I went to sleep and woke up feeling
___adjective____. The end!*/																					

