// function invokeACallBack(callback){
// 	callback()
// }

// function namer(){
// 	console.log('andy');
// }
// invokeACallBack(namer)


// function invokeACallBack(callback, string){
// 	callback(string)
// }

// function namer(arg){
// 	console.log(arg);
// }

// invokeACallBack(function(){
// 	console.log('heheheheh')
// })

// invokeACallBack(namer, 'daniel')

var tired = ['a','b','c','z']

// tired.forEach(function(elementInArray){
// console.log(elementInArray.toUpperCase())
// })

// function silly(element){
// 	console.log(element.toUpperCase())
// }

// tired.forEach(function(e){
// 	silly(e)
// });


// client.on('data', function(stringFromClient){

// })

// request(function(error, response, body){

// })

var request = require('request');
var colbysKey = '7cc1a9f9455ccda6';
var url = "website url"

request(url, function(error, response, body){
	var parsedBody = JSON.parse(body)
	console.log(response);
})