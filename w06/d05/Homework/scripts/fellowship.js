console.log("LINKED");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
// Our Setting
var lands = ['The Shire', 'Rivendell', 'Mordor'];
// Starter code for the body
var body = document.querySelector('body');
var section = document.createElement('section');
function makeMiddleEarth() {
    for (var i = lands.length; i++;){
	var article = document.createElement("article") 
	var artH1 = document.createElement('h1');
	var attachH1 = article.appendChild(artH1);
	article.className = lands[i];
	attachH1.innerText = lands[i];
	section.appendChild(article);
}

body.appendChild(section);


 
}

makeMiddleEarth();


function makeHobbits() {
  for(i = hobbits.length; i++;){
  var uL = document.createElement("ul");
  var lI = document.createElement("li");
  lI.innerText=hobbits[i];
  lI.appendChild(uL);
 var shire = document.querySelector("lands")[0];
 hobbits.className = hobbits[i];
 hobbits.appendChild(shire);

}
}

makeHobbits();


