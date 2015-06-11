console.log("main.js linked");


var birds = [
  "Luther the Bird",
  "Tim the Bird",
  "Lucy the Bird",
  "Sara the Bird",
  "Tommy the Bird",
  "Billy the Bird",
];


var body = document.querySelector('body');


var house = document.createElement("div");
house.setAttribute("class","dwelling");
body.appendChild(house);
var topLevelHeader = document.createElement("h1");
var span = document.createElement('span');

span.innerText = "seeming wasteland";
span.setAttribute('class','shadowed');
span.appendChild(topLevelHeader);
topLevelHeader.appendChild(span);
var waldo = document.createElement('div');
waldo.setAttribute('id', 'waldo');
waldo.appendChild(body);
var uL = document.createElement('ul');
for(i = birds.length; i++;){
	var lI = document.createElement('li');
	lI.setAttribute("class", "bird");
	lI.textContent = birds[i];
	uL.appendChild(lI);

}
 body.appendChild(uL);
