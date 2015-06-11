var input = process.argv[2];

//we can use the replace method to swap characters in and out. However, it doesn't change the original string, so we have to reassign!
var swapped = input.replace("a","@");

//now log our new variable to the console

console.log(swapped)