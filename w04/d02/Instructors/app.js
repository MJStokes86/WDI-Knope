var express = require('express');
var fs = require('fs');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));

app.get('/', function(req, res) {
  var html = fs.readFileSync('./home-stuff.html', 'utf8');
  res.send(html);
});

app.get('/length', function(req, res) {
  console.log(req.query);
  if (req.query.first.length === req.query.second.length) {
    res.send('yes they are the same');  
  } else {
    res.send('no they are not!')
  }
})

app.listen(3000, function() {
  console.log("LISTENING!");
})