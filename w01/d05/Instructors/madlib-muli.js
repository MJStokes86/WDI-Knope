// Write the data structure in a javascript file in today's
// Classwork folder



// var stories = [
//   "As the NOUN1 went to the ADJECTIVE park, it VERB on the NOUN2"
// ]

// var theChosenStory = stories[0];

// theChosenStory.replace("NOUN1", "butter").replace("ADJECTIVE", "cheesy").replace("VERB", "run").replace("NOUN2", "bench")

// var stories = [
//   {
//     title: "Vacation",
//     content: ["As the ", "went to the ", "park, it ", "on the "]
//   },
//   {

//   },
//   {

//   }
// ]
var noun = process.argv[4];
var adjective = process.argv[5];
var verb = process.argv[6];
var noun2 = process.argv[7];

var stories = [
  "As the " + noun + " went to the " + adjective + " park, it "+ verb + " on the " + noun2,
  "Steven looks at the " + noun + " which is very " + adjective + ". "+ verb + " with the " + noun2
]

console.log(stories[process.argv[3]]);


