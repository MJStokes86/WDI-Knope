# MadLib!

## Features

1. User can ask what parts of speech are required for every story.
  ```bash
  node madlib.js words
  noun adjective verb noun
  ```
2. User can play a chosen game by providing words.
  ```bash
  node madlib.js play 1 'monkey' 'chunky' 'jump' 'orange'
  The monkey face is chunky. I jump on the orange.
  ```
3. User can list the possible games.
  ```bash
  node madlib.js games
  1 Vacation
  2 The Opera
  3 Doggies
  4 Random
  ```
4. User is informed if they don't play the game correctly!
  ```bash
  node madlib.js play 1 orange
  You provided one word where 5 were required. Words should be wrapped in single quotes and separated by a space. Ie 'San Francisco' 'cheese'
  ```