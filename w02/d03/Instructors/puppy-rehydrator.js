var fs = require('fs');

var puppies = fs.readFileSync('./puppies.json', 'utf8');

console.log(typeof puppies);
console.log(puppies[0].breed)

var backFromTheDead = JSON.parse(puppies);

console.log(typeof backFromTheDead);
console.log(backFromTheDead[0].breed)