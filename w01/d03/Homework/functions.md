###Evening Lab

> Create a `homework.js` file in tonight's Homework directory. For the first three exercises, you can use the same grid we've been using in class to test your code. You can find a grid in d03/classwork.

> Remember to use the javascript console in Chrome to test your code. `command` + `option` + `j`

> For the 'National Treasure' exercise, use the included 'secret grid' to do your work.


##Filler

  - Write code to, second by second, fill in a whole row and then unfill it one by one.

  - Wrap that code in a function and run it!
  - Fills in the row, backs it upppppppppppppp

##Strobe
- Write a function that takes no arguments, but will fill every space on the board with the color purple.

- Pass the function you wrote into a `setInterval` and create a strobelight!

- Experiment with the second argument passed to `setInterval` to change how often your strobe light flashes.

##Mover

- Using setInterval, write a function that will first fill in box (0,0), but then every second make it look like the box is moving one space to the right.
- Add behavior so that once the box hits the last tile, the whole row fills up!


##National Treasure (minus Nicholas Cage)

> For this exercise, use the hw-starter directory in today's homework folder. It contains a grid specific to this exercise.

- This special grid has words hidden in it!

- You can find them by calling g.at() on a box.

- We can use the keyword `typeof` in javascript to determine datatypes.
  ```javascript
  typeof "andy"
  // "string"
  ```

- Look through the entire grid and find all of the hidden messages. After you have found them all, combine them to form a sentence.
