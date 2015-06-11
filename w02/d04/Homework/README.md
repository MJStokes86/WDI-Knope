# Message App

## Spec

* A user can view a list of sent messages.
  ```bash
  node app.js received
  Hello
  Wee
  ```

* A user can leave a message
  ```bash
  $ node app.js leave 'hello there Jeff!'
  Thanks!

  $ node app.js received
  Hello
  Wee
  hello there Jeff!
  ```

* A user can clear messages
  ```bash
  $ node app.js clear
  All messages cleared.

  $ node app.js received
  No messages...
  ```

## Assignment

Transform this command line app into a **networked application**!

Success looks like this:

In one terminal window:
```bash
node app.js
```

In another window:
```bash
$ telnet 127.0.0.1 8124
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
received
Hello
Wee
Connection closed by foreign host.
```

```bash
$ telnet 127.0.0.1 8124
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
leave 'hey there man'
Thanks!
Connection closed by foreign host.
```

### Explore how to open a TCP Server in Node.js

Please review the code in tcp-example.js.

* What is the purpose of this code?
* How does it work?
* How could you find out?

Follow the assumption -> test -> assumption -> test cycle we described earlier to make your way through the code.

In one terminal window, start the `tcp-example.js` code:
```bash
$ node tcp-example.js
server bound
```

In another terminal window:
```bash
$ telnet 127.0.0.1 8124
```