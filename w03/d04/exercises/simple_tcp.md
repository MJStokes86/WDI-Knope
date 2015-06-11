#Simple TCP Servers

> TCP is an internet protocol that establishes a relationship between a server (a program) and a client (the user accessing said program), and makes sure strings back and forth arrive in one piece.

> The leap in logic between a simple Command Line Application and a simple TCP application is very minimal. The only change is where our inputs come from, and where the program sends the output to. All our logic still applies: loops, functions, control flow, etc.


#AttitudeTron
- write a simple TCP program that returns user input with some attitude

```bash
> hello
hello!?!?! That's what you say to me? hello??

> sorry
sorry!?!?! That's what you say to me? sorry??
```

#RussianServer
- write a simple TCP program that only understands 'privet', Russian for Hello. If any other string is received, the server should return 'ebat, zakroi rot'

```bash
>privet
Privet, Tovarish!

>hello
ebat, zakroi rot
```

#ChineseMenu
- write a simple TCP program that allows the owner of a chinese restaurant to add items to his menu, and list them. Items should have a name and msg level.

```bash
> add pork fried rice*23
added!
> add orange chicken*99
added!
> list
pork fried rice
orange chicken
```
