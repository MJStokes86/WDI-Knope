console.log("LINKED");
$(document).ready(function(){


var $button1 = $("#button1");
var $button2 = $("#button2");
var $button3 = $("#button3");
var $button4 = $("#button4");
var $button5 = $("#button5");
var $body = $('body');






$button1.on('click', function(e){
	e.preventDefault();
	console.log("clicked!")


$.ajax({
	url: "/countries",
	type: 'GET',
	dataType: 'json',
}).done(function(data){
	for(var i = 0; i < data.length; i++){
		var name = data[i].name;
		var capital = data[i].capital;
		var $country = $("#countryList");
		$country.append("<li>" + name + " , " + capital + "</li>")
		console.log(data[i].name + ',' + data[i].capital);
	
	}



})
})

$button2.on('click', function(e){
	e.preventDefault();
	console.log('clicked')

for (var i = 0; i < data.length; i++){

var id = data[i].id;

$.ajax({
	url: "/countries/:id",
	data:{id:id},
	type: "GET",
	dataType: 'json',

}).done(function(data){
	console.log(data[i].id)


}
})
})


$button3.on('click', function(e){
	e.preventDefault();
	console.log()

	var $input1 = $("#id1");
	var $input2 = $("#id2");
	var name = $input1.val();
	var capital = $input2.val();


$.ajax({
	url: "/countries",
	data: {name: name, capital: capital },
	type: "POST",
	dataType: 'json',
}).done(function(data){
	



})
})



$button4.on('click', function(e){
	e.preventDefault();
	console.log('clicked')

$.ajax({
	url: "/countries/:id",
	type: "PUT",
	dataType:'json',
}).done(function(data){

})
})



$button5.on('click', function(e){
	e.preventDefault();
	console.log('clicked')



$.ajax({
	url: "/countries/:id",
	type: "DELETE",
	dataType:'json',
}).done(function(data){

})
})













})