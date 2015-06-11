var request = require('request');

/*request.get('http://ShakeItSpeare.com/api/sentence', function(error, response, body){
	    var parsedBody = JSON.parse(body);
		var sentence = parsedBody.sentence;*/

		var finalSentence = [];
	for ( i = 0; i < 10; i++) {
		request.get('http://ShakeItSpeare.com/api/sentence', function(error, response, body){
	    var parsedBody = JSON.parse(body);
		finalSentence.push(parsedBody.sentence + '\n');
		
		if(finalSentence.length === 10)console.log(finalSentence.join(''));


	
});

}