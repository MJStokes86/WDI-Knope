# MadLib!

## Features

1. User can ask what parts of speech are required for the story.
  ```bash
  node madlib.js words
  noun adjective verb noun
  ```

2. User can play the game by providing the words.
  ```bash
  node madlib.js play 'monkey' 'chunky' 'jump' 'orange'
  The monkey face is chunky. I jump on the orange.
  ```

3. User is informed if they don't play the game correctly!
  ```bash
  node madlib.js play orange
  You provided one word where 5 were required. Words should be wrapped in single quotes and separated by a space. Ie 'San Francisco' 'cheese'
  ```

## Keep in Mind

Break it down!

* start with one feature
* break that feature down into parts. How should this work? What is the simplest possible piece I could implement to start?
* only move on to the next piece of implementation once you've got something working!
* if you are confused or mired you are probably working with too much complexity. articulate to yourself - what problem am I solving? - if it's not simple enough to describe concisely you gotta break it down!!