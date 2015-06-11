#Control Flow

>Control flow refers to the order in which instructions in a program are executed.

>We use `if` and `else if` statements in JavaScript to determine control flow

```javascript
if(condition evaluates to true){
  execute this code
} else if(another condition evaluates to true){
  execute this code
} else {
  execute this code if the above conditions are not met
}
```

#Exercises
- Use the console in Chrome to test all your code. Create a file in classwork called `controlFlow.txt` to save your work.

###The meaning of life
- Declare a variable called life and assign it to a string. If the meaning of life is "to end suffering", log "sounds about right" to the console. If the meaning of life is anything else, log "I suppose that could be it" to the console.

###Jeff's Favorite Color
- Chartreuse is my favorite color. Magenta is my second favorite and Slate is my third. I hate every other color! Write a conditional statement that will check a variable set to a color and tell me (alert) how I feel about that color. It should work for any color I give it.
  - Now make it interactive. Use the `prompt` command to grab user input.

###Neel's New Outfit
- Write code that asks a user to input Neel's fashion label choices for his outfit today. Gather the label for his `shirt`, `pants` and `cardigan`. If all three items are by 'alexander wang', alert, 'great outfit!'. If only his shirt and pants are by 'alexander wang', alert, 'ok, but just for today'. For any other outfit scenario, alert 'just stay home.'
  - we use `===` to check for equality, we can use `!==` to check for inequality!


###Fritz Wants a Falafel
- Write code the prompts a user to enter whether they'd like a 'plate' or a 'wrap'.
- If the user wants a wrap, prompt them to choose a tortilla, either 'whole grain' or 'flour'.
  - If they choose 'whole grain', alert 'healthy choice!', if not alert 'empty calories'
- If the user wants a plate, prompt them to choose a protein: 'chicken', 'lamb' or 'falafel'.
  - Next prompt them to choose a sauce: 'tahini' or 'sriracha'.
  - If the user chooses 'falafel' and 'sriracha', alert them 'ultimate combination'
- If the user doesn't initially enter 'plate' or 'wrap', alert them that they're holding the line up!
