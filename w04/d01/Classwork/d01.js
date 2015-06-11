// ip: 45.55.139.14
// Port: 3000


// Action		Resource
// Get			/
// Get			/kittens1/1
// Get			/kittens/1/image

//Response header and body



var request = require('request');

// request.get('http://45.55.139.14:3000', function(error, response, body){
// 	console.log(response) It returns a string
// })

// request.get('http://45.55.139.14:3000/kittens/1', function(error, body, response){
// 	console.log(response) //Returns an object
// })


request.get('http://45.55.139.14:3000/kittens/1/image', function(error, body, response){
console.log(response)
})