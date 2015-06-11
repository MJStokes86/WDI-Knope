console.log("solution.js linked");

var house = document.createElement('div');
house.setAttribute('class', 'dwelling');

var body = document.querySelector('body');
body.appendChild(house);

var topLevelHeader = document.createElement('h1');

var span = document.createElement('span');

span.textContent = 'Seeming Wasteland';
span.setAttribute('class', 'shadowed');


topLevelHeader.appendChild(span);
body.appendChild(topLevelHeader);

var waldo = document.createElement('div');
waldo.setAttribute('id', 'waldo');
body.appendChild(waldo);

var birds = [
  "Luther the Bird",
  "Tim the Bird",
  "Lucy the Bird",
  "Sara the Bird",
  "Tommy the Bird",
  "Billy the Bird",
];
var ul = document.createElement('ul');

for(var i = 0; i < birds.length; i++){
  var li = document.createElement('li');
  li.setAttribute('class', 'bird');
  li.textContent = birds[i];
  ul.appendChild(li);
}

body.appendChild(ul);

span.textContent = "Knope's Teeming Funland"

var button = document.querySelector("#removebird");

var birdex = 5
var blist = document.querySelector("ul").children
var parentList = document.querySelector("ul");
button.addEventListener("click", function(e){
  console.log("hey");
  var bird = blist[birdex]
  parentList.removeChild(bird)
  birdex = birdex - 1

})
