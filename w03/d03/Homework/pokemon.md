###Pokemon API

<a href="http://pokeapi.co/docs/"> API Docs </a>

<a href="https://www.npmjs.com/package/request"> request NPM docs </a>

> Tonight, we are going to use the request npm to access data about Pokemon. We'll write a simple command line program to return data about Pokemon.

> Remember that you'll be running into a big old string of JSON, which you can parse into a big old nested data structure to work with.

> Bear in mind that although it may take some time to get there, at the end of the day, you are just working with another nested data structure. Don't get overwhelmed!


# Part 1
- Explore the Api Docs, linked above.
- Make sure you understand how to access Pokemon. What process do you need to follow to access individual Pokemon? Hint: it's kind of a pain in the ass!

# Part 2
Write a program that meets the following specs:
  - A user can list all Pokemon

  ```bash
  $ node pokefinder list
  Pikachu
  Bulbasaurus
  Squirtle
  etc.. (there are like over 1000. jesus.)
  ```

  - A user can input an individual pokemon's name, and get some data back

  ```bash
  $ node pokefinder bulbasaur
  bulbasaur has an attack of 49 and a defense of 49 and a speed of 45
  ```
  - A user can list all of the 'moves' a pokemon has

  ```bash
  $ node pokefinder moves bulbasaur
  tackle
  growl
  vine whip
  ```

#Part 3
  Expand your program
  - A user can enter two pokemon and battle them!

  ```bash
  $ node pokefinder bulbasaur jefflypuff
  bulbasaur defeated jefflypuff!

  ```
