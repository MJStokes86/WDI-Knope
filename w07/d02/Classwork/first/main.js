console.log("main linked")

$(document).ready(function() {


var $stubutton = $("#addStudentButton");

 

 $stubutton.on('click', function(event){
 	console.log("clicked")
 	var $inputBox = $("#nameinput");
 	var $namesList = $("#studentNames");
 	var $dynamicInput = $inputBox.val()
 	var $newPerson = $("<li>" + $dynamicInput + "</li>")
 	$namesList.append($newPerson);
 

 })

});
