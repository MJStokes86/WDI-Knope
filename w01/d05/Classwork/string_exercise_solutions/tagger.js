//once again, reassign user input to semantic, meaningful variables
var tag = process.argv[2];
var content = process.argv[3];

//use string concatenation to log a new string back to the screen
console.log("<" + tag + "/>" + content + "</" + tag + ">");