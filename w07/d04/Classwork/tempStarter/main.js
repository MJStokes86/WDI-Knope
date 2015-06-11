console.log("main linked")



function peopleMaker(name, age){

var template = "<h1> {{name}} </h1> <h2> {{age}} </h2"
var personObject = {name: name, age:age}
var rendered = Mustache.render(template, personObject)
$('#people').append(rendered)


}







