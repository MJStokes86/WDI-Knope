console.log('linked')
$(document).ready(function(){

var body = document.querySelector("body");
var button = document.getElementById("movie");

console.log(button)

button.addEventListener("click", function(event){
	console.log('clicked')
	var $inputBox = $("#movieinput");
	
	var $dynamicInput = $inputBox.val()
	
	
	$.ajax({
	url: "http://www.omdbapi.com/?t= " + $dynamicInput,
	type:'GET',
	}).done(function(data){
		console.log(data)
	var title = data.Title;
	var year = data.Year;
	var rated = data.Rated;
	var poster = data.Poster
	var $movieList = $("#movielist")
	
	$movieList.append("<h3>" + title + "</h3>");
	$movieList.append("<h3>" + year + "</h3>");
	$movieList.append("<h3>" + rated + "</h3>");
	$movieList.append("<img src = " + poster + " >")



})


})














})