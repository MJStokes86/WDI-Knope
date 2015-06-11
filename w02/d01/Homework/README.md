#Inputs, Outputs and Files
>A key concept from today's lesson is to frame our programs as pieces in a chain of inputs and outputs.

> We can read the information from a file into our program as input. We can then execute logic inside our program before writing the result to a file as output.

> As always, think about your program before you start typing. What tools do you have available? What tools do you need?



### Extended MadLibz

- Extend the functionality of your madlibz program so that a user can pass a title along with the rest of the story.
- The title will be written to a file of that name

```bash
$ node madlibz clown murder terrifying > ./completed_games/game1.txt
$ cat ./completed_games/game1.txt
the silly clown liked to murder the terrifying universe
```
**update/bonus**
  - edit the program so you can pass a dynamic title along with the words for your mad lib
    - we can read a file in with fsReadSync, how might we be able to write a file with fs...
    
```bash
$node madlibs filetitlethatipassed horse love amazing
$ls 
filetitlethatipassed.txt
$cat filetitlethatipassed.txt
the silly horse liked to love the amazing universe
```

### More Names
- Your homework folder contains a file called `friends.txt`
- Write a command line program, `printnames` that prints each of the names out to the console.

```bash
$ node printnames
neel
jeff
fritz
ruth
john
clarence
antonin
anthony
elena
sonia
samuel
stephen
```
## Moar Apps

> The directions for these programs are short and fairly vague. Before you start coding, take some time to 'spec out' each program. How should it work? What inputs should it expect? What output should it produce? Give examples like we did for MadLibs!

### DearDiary
- Write a command line program that writes diary entries.
- Entries should consist of a title, author and body.
- Write diary entries to files with their title.

### Word Counter
- Design a program that takes a file name as an argument and returns the amount of words in it.
  - think about how your program should take input. is a filename alone enough?

### Book Marker
- Write a command line program that takes URLs and writes them to a stored list of URLs as bookmarks
  - **bonus** **only do this if you've finished the rest**  write a separate program that randomly opens a bookmarked page in Chrome
