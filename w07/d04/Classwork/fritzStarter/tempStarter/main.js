console.log("main linked")


// // function peopleMaker(name, email){
// //     //take two arguments, use mustache to create html
// //     //append rendered html to DOM
// //     var template = $("#personTemplate").text()
// //     var personObject = {userName: name, email:email}
// //     var rendered = Mustache.render(template,personObject)
// //     $("#people").append(rendered)

   
    
// }


function grabPeople(){

	$.ajax({
	  	url: 'http://api.randomuser.me/',
	 	dataType: 'json',
	    }).done(function(data){
	    var rendered = makeTemplate(data);
	    $("body").append(rendered)
	    var $draggable = $('.draggable').draggabilly;
	});

}

function makeTemplate(data){


}



 	var $button = $("#grabPeople")
    var $body = $('body')


    $button.on('click', grabPeople)