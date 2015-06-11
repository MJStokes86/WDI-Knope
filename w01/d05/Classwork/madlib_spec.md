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

