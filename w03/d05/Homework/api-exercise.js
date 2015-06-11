var request = require('request');

var sentence = process.argv[2]
var options = {
 url:  'https://yoda.p.mashape.com/yoda?sentence=<'+ sentence +'>',
 method: 'GET',
 headers: {
   'X-Mashape-Key': 'l2FWJ8wj2ymshbl2Y7GOkYYX5VF6p1cABEojsnbVmoCfNacI4l'
 }
};

request.get(options, function(error, response, body){
console.log(body);

});