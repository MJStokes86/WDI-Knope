var request = require('request');
var util = require('util');

request.get("https://api.instagram.com/v1/tags/kitten/media/recent?client_id=72e9a921a5b14994adc6e7dc48de1f31", function(err, response, body) {
  var parsedBody = JSON.parse(body);
  debugger
  console.log( util.inspect(parsedBody, {showHidden: true, depth: null, colors: true}) );
});