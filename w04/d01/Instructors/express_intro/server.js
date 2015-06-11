var express = require('express');
var app = express();

app.get('/', function(request, response){
  console.log("User has hit resource '/'");
  response.send("Hello World!");
});

app.get('/colors/:num/', function(request, response){
  console.log("User has hit resource for 'colors'");

  switch (request.params.num) {
    case "1":
      var data = {color: "orange", hue: "sunset", inCrayola: true};
      response.send(JSON.stringify(data));
      break
    case "2":
      var data = {color: "teal", hue: "dolphin", inCrayola: true};
      response.send(JSON.stringify(data));
      break
    default:
      response.send("ERROR");
  }  
})

app.get('/colors/1/image', function(request, response){
  var html = "<h1> Orange </h1><img src='http://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg'>";
  response.send(html);
});

app.get('/:name/:message', function(request, response){
  var text = request.params.name + " said " + request.params.message;
  response.send(text);
});


app.listen(3000, function(){
  console.log("Listening on port 3000!");
});