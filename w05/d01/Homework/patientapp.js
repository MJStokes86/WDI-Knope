var express = require('express');
var sqlite3 = require('sqlite3');
var fs = require('fs');
var Mustache = require('mustache');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// var db = sqlite3.database('./patients.db');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('method'));

app.get('/', function(req, res){
	res.send(fs.readFileSync('./views/index.html', 'utf8'));
})





app.listen(3000, function(){
	console.log("WORKING!")
})