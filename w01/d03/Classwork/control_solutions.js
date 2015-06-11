
//meaning of life
var life = "pursuit of material gain";

if(life === "ending suffering"){
	console.log("sounds about right.");
}else{
	console.log("I suppose that could be it.");
}


//jeff color
var color = prompt("enter your fav color");

if(color === "chartreuse"){
	console.log("That's my fave");
} else if(color === "magento"){
	console.log("Second fave");
} else if(color === "slate"){
	console.log("third fav");
} else {
	console.log("nope!");
}


//neel
var shirt = prompt("enter shirt");
var pants = prompt("enter pants");
var cardigan = prompt("enter cardigan");

if(shirt === "alexander wang" && pants === "alexander wang" && cardigan === "alexander wang"){
	console.log("Great outfit!");
}else if(pants === "alexander wang" && shirt === "alexander wang" && cardigan !== "alexander wang"){
	console.log("ok for today");
}else{
	console.log("just stay home dude");
}

	
//fritz
var choice = prompt("would you like a wrap or a plate");

if(choice === "wrap"){
	var grain = prompt("whole grain or flour?")
	if(grain === "whole grain"){
		alert("healthy!");
	}else{
		alert("empty calories!");
	}
}else if(choice === "plate"){
	var protein = prompt("which protein? chicken, beef or falafel");
	var sauce = prompt("which sauce? tahini or sriracha?");
	if(protein === "falafel" && sauce === "sriracha"){
		alert("ultimate choice!");
	}
}else{
	alert("you're holding up the line!");
}




