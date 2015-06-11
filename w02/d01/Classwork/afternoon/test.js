var fs = require('fs');

/*var textFromfs = fs.readFileSync('./hello.txt', 'utf8');

console.log(textFromfs + 1000)*/

var textFromfs = fs.readFileSync('./exercise.txt', 'utf8');
console.log(textFromfs.replace('World', 'Universe').replace('today', 'this afternoon'))