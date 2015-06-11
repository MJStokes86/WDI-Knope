#Iteration Fun

> We can use for loops in javascript to not only loop through an array, but do run a block of code for each element

```javascript
var stuff = ["breh", "bre", "braaahhhh"];

for(var i = 0; i < stuff.length; i++){
  console.log(stuff[i]);
}
```


###The Royal We

```javascript
var names = ["Jeffrey Of Westchester", "Neel Of Jersey", "Fritz Of Suburban Chicago"];
```
- Write code to log each name to the console, only with the word "sir" in front of it.

- We want our names to echo through the ages. Create a new array and store the changed names in it.

- Loop through the new array, and announce (console log) each of the royal instructors, like this

> "His Royal Highness and Great Fan of Maroon Five: Sir Jeffrey Of Westchester "

###Name lengths

```javascript
var names = ["Thom", "Phil", "Colin", "Ed", "Johhny"];
```

- Iterate through the names above. If the name has two letters or less, log "NAME is a short name" to the console. If it's between 3 and 5 letters, log "NAME is a medium name" to the console. If it's got more than 5 letters, log "NAME is a loooooooong name" to the console.


###Emphasis

```javascript
var moz = "And if a ten ton truck kills the both of us, to die be your side, well the pleasure, the privilege is mine...";
```
- write code that uppercases any word in this lyric that starts with the letter t, and return it to a new array.
