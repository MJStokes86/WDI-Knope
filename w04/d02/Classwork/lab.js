var express = require('express');
var app = express();
var fs = require('fs');


app.get('/', function(req, res){
	fs.readFileSync('./madlibs.html', 'utf8', function(err, data){
		res.send(data);
	})
})




app.listen(3000, function(){
	console.log("Listening to port 3000!")
})