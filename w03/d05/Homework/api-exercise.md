# API Exercises

The following exercises use [mashape](https://www.mashape.com) APIs. Remeber, you will need to sign up and get an API key to send along with your request.

Mashape wants API keys in the header:

```http
GET /yoda?sentence=You+will+learn+how+to+speak+like+me+someday
Host: yoda.p.mashape.com
X-Mashape-Key: YOUR_API_KEY
```

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 72
Content-Type: text/html; charset=utf-8
Date: Fri, 03 Apr 2015 17:22:14 GMT
Server: Mashape/5.0.6
Via: 1.1 vegur
X-Powered-By: Express

Learn how to speak like me someday, you will.
```

To alter HTTP headers using `request`, you will do the following:

```javscript
var options = {
  url: 'https://some-api.mashable.com/whatever',
  method: 'GET',
  headers: {
    'X-Mashape-Key': 'YOUR_KEY'
  }
};

request(options, function(err, res, body) {
  // ... stuff
});
```

## Speak Like Me, You Will [Simple]

Write a command line program that uses the [Yoda Speak API](https://www.mashape.com/ismaelc/yoda-speak) to print the user's sentence as Yoda Speak.

```bash
$ node yoda.js 'You are learning how to use APIs.'
Learning to use APIs, you are.
``` 

## Whereami? [Harder]

Write a command line program that gives the weather for the city you are currently in.

You should **not** input the city - see below.

```bash
node whereami.js
It is 62 degrees F in NY, NY
```

### Hint

You can use your IP address to find your current location

1. Find your current IP: http://www.ipify.org/
2. Use your IP to find a location: https://www.mashape.com/montanaflynn/geocode-location-lookup#ip-1