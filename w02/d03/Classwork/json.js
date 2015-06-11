puppies = [];

puppies.push({
	name: "fluffy",
	breed: "golden lab"
});

puppies.push({
	name:"jenkins",
	breed: "italian greyhound"
});

//"fluffy,golden lab\njenkins, italian greyhound"
//var myString =  puppies[0].name + "," + puppies[0].breed + "\n" + puppies[1].name

var myString = "";

for (var i = 0; i < puppies.length; i++) {
	myString +=  puppies[0].name + "," + puppies[0].breed + "\n";
}

//var jsonString = JSON.stringify(puppies);
//console.log(typeof puppies)
//console.log(typeof jsonString)

//fs.writeFileSync('./puppies.csv', csvString, 'utf8')
//fs.writeFileSync('./puppies.json', puppies, 'utf8')

console.log(myString)

