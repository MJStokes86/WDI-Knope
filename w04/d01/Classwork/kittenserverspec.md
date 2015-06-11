##Server Spec For Kittens

The server has an IP address and is listening for HTTP traffic on port 3000
The server can accept an action of `get` and a resource of `/`



###Location
The user can access the webpage by entering the following IP address and Port number in the url

```bash
IP: 45.55.139.14
Port:3000
URL: 'http://45.55.139.14:3000'
```


###Action / Resource
The user can use the following inputs
```bash
get   /
get   /kittens/1
get   /kittens/1/image
nodejs 'user file'
```


###Resource
The user can access the webpage by using the following resources
```bash
request.get('http://IP:Port/', function(error, response, body){
console.log(response)
})
```
They see a welcome message which the date type is a 'string'.

```bash
request.get('http://IP:Port/kittens/1', function(error, response, body){
console.log(response)
})
```
They get a JSON string which returns as an object with strings that contains the kitten's name, color, and breed

The user can access images with an action with any number up to `3` within the kittens directory
```bash
request.get('http://IP:Port/kittens/1/image', function(error, response, body){
console.log(response)
})
```
They get a html string with an image source which returns as a string

If the user goes beyond the third source....
```bash
request.get('http://IP:Port/kittens/4/image', function(error, response, body){
console.log(response)
})
```

An error message will appear as a string.
