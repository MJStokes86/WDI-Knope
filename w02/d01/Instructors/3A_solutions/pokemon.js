var pokemons = [ 
  ["Squirtle",["HP",[44,["Attack",[48,["Defense",[65,["Speed",[43]]]]]]]]], 
  ["Snorlax",["HP",[160,["Attack",[110,["Defense",[65,["Speed",[30]]]]]]]]], 
  ["Mew",["HP",[100,["Attack",[100,["Defense",[100,["Speed",[100]]]]]]]]]
];

for(i = 0; i < pokemons.length; i++){
  var pokemon = pokemons[i];
  var output = pokemon[0] + " || " + pokemon[1][0] + ":" + pokemon[1][0][0]
}