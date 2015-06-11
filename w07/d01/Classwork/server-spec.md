##Server Spec

---

The server has a IP and is listening for HTTP traffic on port 3000


The server can accept a action of `get` and a resource of `/`
 - Will respond with string containing welcome message.


 The server can accept an action of `get` and a resource of `/kittens/1`, the number can go up to 3
 - Will respond with JSON string of kitten info.
 - Any number above 3 will respond with a string containing an error.


 The server can accept an action of `get` and a resouce of `/kittens/1/image`, the number can go up to 3
 - Will respond with string containing HTML that has kitten name and image
 - Any number above 3 will respond with a string containing an error.
