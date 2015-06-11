var request = require('request');

// request.get('http://www.example.com', function(error, response, body){
//   console.log(response.statusCode);
//   // console.log(body);
// });

// request.get('http://ShakeItSpeare.com/api/poem', function(err, res, body){
//   var parsedBody = JSON.parse(body);
//   var poem = parsedBody.poem;
//   console.log(poem);
// });

// request.get('http://ShakeItSpeare.com/api/sentence', function(err, res, body){
//   console.log(body);
//   // var parsedBody = JSON.parse(body);
//   // var poem = parsedBody.poem;
//   // console.log(poem);
// });

var finalPoem = [];

for (var i = 0; i < 10; i++) {
  request.get("http://ShakeItSpeare.com/api/sentence", function(error, response, body) {

    var text = JSON.parse(body);
    finalPoem.push(text.sentence + "\n");
    // finalPoem.push('\n');

    if (finalPoem.length === 10) console.log(finalPoem.join(""));

  });
}
