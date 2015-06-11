
var noun = process.argv[4];
var adjective = process.argv[5];
var verb = process.argv[6];
var noun2 = process.argv[7];

var stories = [
  "As the " + noun + " went to the " + adjective + " park, it "+ verb + " on the " + noun2,
  "Steven looks at the " + noun + " which is very " + adjective + ". "+ verb + " with the " + noun2
]

console.log(stories[process.argv[3]]);