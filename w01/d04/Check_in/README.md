# Travelling Dwarf

## Objective

Write code to move the dwarf through the maze. You have ~1.5 hours to work.

## Instructions

Open `index.html` and look at the grid. You will see a dwarf and a maze. Your task is to write code to move the dwarf through the maze to the end.

If you open the console, there is a variable, `d`, which you can call the following methods on to manipulate the dwarf.

```javascript
d.orient('left'); // also 'right', 'up', and 'down'
d.move();
```

You will also find a file called `solution.js`. Any code you write in here will be run against the grid in `index.html`. This is where you should write your solution!

NOTE: We are not expecting that you write a program that 'figures out' a way out of the maze. That is the bonus. You should plot a course and implement it.

## Criteria

We will review these, and be looking for three things:

1. Code solves the problem - ie, how well does the code work?
* Code is indented and properly spaced
* Number of steps is minimized - ie, appropriate use of functions and loops to reduce repetitive steps.

## Bonus

Only move on to this step if you finish the program described above.

In `bonus-solution.js` write a new program that moves the dwarf through the maze *without* foreknowledge of the maze design. In other words, the dwarf will have to detect impediments and decide which way to turn.