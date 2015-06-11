console.log("LINKED");

var template = "<tr data-id = '{{id}}'>{{client_name}}<td contenteditable='true' ></td><td ><i class='icon dollar'></i><span contenteditable='true'>0</span></td><td><button class='ui button small green'>Save</button><button class='ui button small red'>Iced</button></td></tr>";


$('.ui.label.blue').on('click', function() {
  
$.ajax({
	method: 'POST',
	url: "/debts",
	data: JSON.stringify({amount:0}),
	contentType: 'application/json'
}).done(function(data){
	console.log(data)
	var html = Mustache.render(template,data)
})



$('tbody').append(template);
})

$('tbody').on('click', '[data-action="saved"]', function(e){
	var row = $(e.target).parents('tr');
	console.log(row)
})