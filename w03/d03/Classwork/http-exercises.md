# HTTP!

## Instructions

For each of the following HTTP interactions - ie request, response - specify the following:

1. Summarize, in human words, what both client and server are saying.
* Identify the `action` and the `resource` that the client is interacting with.
* Record whatever else you notice!

### Google

```http
GET / HTTP/1.1
Host: www.google.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 Safari/537.36
```

```http
HTTP/1.1 200 OK
Date: Wed, 01 Apr 2015 10:42:28 GMT
Content-Type: text/html; charset=ISO-8859-1

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Google</title>
</head>
<body>
  <form>
    Search:
    <input type="text" />
  </form>
</body>
</html>
```

### Where'd ya go?

```http
GET /some-article HTTP/1.1
Host: nytimes.com
```

```http
HTTP/1.1 302 Found
Location: http://www.nytimes.com/some-article-revised-headline
```


### Top Secret

```http
GET /situation-room/top-secret HTTP/1.1
Host: whitehouse.gov
```

```http
HTTP/1.1 401 Unauthorized
Date: Wed, 01 Apr 2015 10:42:28 GMT
Content-Type: text/plain

Woah, you are totally trying to hack into the government. Your IP has been recorded and the FBI is on the way to your house.
```

### Puppies!

```http
POST /puppies HTTP/1.1
Host: animals.com
Content-Type: application/json
Content-Length: 38

{"name": "Butterball", "breed": "collie"}
```

```http
Status: 201 Created
Location: http://animals.com/puppies/4
Content-Type: application/json

{"id": 4, "name": "Butterball", "breed": "collie"}
```

### Facebook

#### One

```http
GET /accounts/jkonowitch HTTP/1.1
Host: facebook.com
```

```http
HTTP/1.1 200 OK
Date: Wed, 01 Apr 2015 10:42:28 GMT
Content-Type: text/html

<html>
  <body>
    <h1>Jeffrey Konowitch</h1>
    <h4>Location: NYC</h4>
    <p>Jeffrey is a person who like things. Here is his profile picture.</p>
  </body>
</html>
```

#### Two

```http
PATCH /accounts/jkonowitch HTTP/1.1
Host: facebook.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 41

name=Jarfrey+Kolnowitch&location=Timbuktu
```

```http
HTTP/1.1 200 OK
Content-Type: text/html

<html>
  <body>
    <h1>Jarfrey Kolnowitch</h1>
    <h4>Location: Timbuktu</h4>
    <p>Jarfrey is a person who like things. Here is his profile picture.</p>
  </body>
</html>
```

#### Three

```http
DELETE /accounts/jkonowitch HTTP/1.1
Host: facebook.com
```

```http
HTTP/1.1 204 No Content
```

#### Four

```http
GET /accounts/jkonowitch HTTP/1.1
Host: facebook.com
```

```http
HTTP/1.1 404 Not Found
Date: Wed, 01 Apr 2015 10:42:28 GMT
Content-Type: text/html

<html>
  <body>
    No such user here! Maybe they deactivated their account?
  </body>
</html>
```