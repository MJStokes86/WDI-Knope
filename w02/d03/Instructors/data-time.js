var fs = require('fs');
var puppies = [];

puppies.push({
  name: "fluffy",
  breed: "golden lab"
});

puppies.push({
  name: "jenkins",
  breed: "italian greyhound"
});

puppies.push({
  name: "molly",
  breed: "terrier"
});

var csvString = "";

for (var i = 0; i < puppies.length; i++) {
  csvString += puppies[i].name + "," + puppies[i].breed + "\n";
}

var jsonString = JSON.stringify(puppies);
console.log(typeof puppies)
console.log(typeof jsonString)

//fs.writeFileSync('./puppies.csv', csvString, 'utf8');
// fs.writeFileSync('./puppies.json', jsonString, 'utf8')

// SOME code that your write that deconstructs puppies

// "fluffy,golden lab\njenkins,italian greyhound\nmolly,terrier"

// console.log(puppies);