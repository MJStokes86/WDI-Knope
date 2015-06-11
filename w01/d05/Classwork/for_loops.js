var name = ['andy', 'fritz', 'jeff', 'knonowitch', 'neel', 'patel'];

console.log(names[0].toupperCase())


for(var i = 0; i < 6; i++){
	console.log(names[i])


}

var bigNames = [];
for(var i =0; i < names.length; i++){
	var demoName = names[i].toUpperCase()
	bigNames.push(demoName);

}