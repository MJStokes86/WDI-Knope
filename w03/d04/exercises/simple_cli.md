#Command Line Programs

> Command Line Programs are simple programs that can accept user input and print out to the Terminal (the console)

> Remember, once we've got user input, we can execute any kind of logic we're already familiar with; loops, functions, control flow, etc.



#Count and uppercase
- Write a CLP that takes a string and prints that same string out as well as the number of characters in the string

```bash
$ node program.js andy
ANDY has 4 letters
```
#Argument size
- Write a CLP that takes a string. If the string is bigger than 10 letters, log "big string yo!" If it's got less than 3, log "small string yo!". Anything in between, log "Run of the mill string length"

```bash
$ node program.js andy
Run of the mill string length
```

#Address Book
- Write a CLP that acts as a simple address book. A user should be able to add a user by adding their name and email address. There should also be a feature to list all the users. Be sure to persist the data to a file.

```bash
$ node program.js add andy fritzy@ga.co
Thanks for adding

$ node program.js list
andy
jeff
neel
```
