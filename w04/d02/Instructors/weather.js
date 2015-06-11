var request = require("request");
var colbysKey = "49807b9f8418a122";
var express = require("express");
var linkHome = "<a href='/'> home </a>"

var app = express();

app.get('/', function (req, res) {
  res.send('VELCOME TO ZEE WEATHER');
});

app.get('/:city/:state', function(req,res){
    var city = req.params.city
    var state = req.params.state
    var url = "http://api.wunderground.com/api/"+colbysKey+"/conditions/q/"+ state + "/" +city+".json"
    request(url, function(error,response,body){
        var parsed = JSON.parse(body);
        var temp = parsed.current_observation.temp_f
        if(temp < 50){
            res.send("<span style='color: blue'>" + temp.toString() + "</span>" + linkHome)
        }else{
            res.send("<span style='color: red'>" + temp.toString() + "</span>" + linkHome)        }
    });
});

app.get('/:city/:state/:hour', function(req,res){
    var city = req.params.city
    var state = req.params.state
    var hour = req.params.hour
    var url = "http://api.wunderground.com/api/"+colbysKey+"/hourly/q/"+ state + "/" +city+".json"
    request(url, function(error,response,body){
        var parsed = JSON.parse(body);
        //below we declare and properly scope the temp variable so it can be accessed OUTSIDE our foreach callback
        var temp;
        parsed.hourly_forecast.forEach(function(e){
            if(e.FCTTIME.hour === hour){
                //set the temp variable
                temp = e.temp.english
            }
        })
        //send the response oustide of the foreach callback. this was the issue for anyone getting headers errors. Come
        //to me if you have any questions about that.
        res.send("<span> The temp in " + city + " is " +temp + "degrees </span>" + linkHome)
    })

});






var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});






