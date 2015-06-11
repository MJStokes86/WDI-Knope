var request = require('request');

request.get('http://data.cityofnewyork.us/resource/sxx4-xhzg.json', function(err, res, body){
  console.log(body);
});