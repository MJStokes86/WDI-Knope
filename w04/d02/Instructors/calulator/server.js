var fs = require('fs');
var express = require('express');
var app = express();

app.get('/', function(req, res){
  fs.readFile('./index.html', 'utf8', function(err, data){
    res.send(data);
  });
});

app.get('/calculate', function(req, res){
  var num1 = parseInt(req.query.num1);
  var num2 = parseInt(req.query.num2);
  var sum = num1 + num2;

  res.send("<h1>Sum: " + sum + "</h1>");
});

app.get('/add/:num1/:num2', function(req, res) {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var sum = num1 + num2;

  res.send("<h1>Sum: " + sum + "</h1>");
});

app.listen(2000, function(){
  console.log("Listening on port 2000");
});