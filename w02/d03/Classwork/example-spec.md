* A user can edit a list of movies.
  * The movies will be stored in a text file.
  * Movie data will be entered in the following format; each movie will be separated by a newline
  ```text
  Title,Year,Runtime,Rating,Year,Actor1,Actor2
  Title,Year,Runtime,Rating,Year,Actor1,Actor2
  ```

* A user can provide a properly formatted movie data file, and generate posters based on that data.
  ```bash
  node app.js /Users/jeff/Documents/movie-data.txt /Users/jeff/Documents/now_playing
  5 posters were generated and stored in /Users/jeff/Documents/now_playing
  ```

  Mockup of poster:
  ![Alt poster](./poster.png)

* A user can see if their movie data file is improperly formatted.
  ```bash
  node app.js /Users/jeff/Documents/movie-data.txt /Users/jeff/Documents/now_playing
  Error! There was a problem with the way your movie data file was formatted. Please use the following format:
  Title,Year,Runtime,Rating,Year,Actor1,Actor2
  Title,Year,Runtime,Rating,Year,Actor1,Actor2
  ```

* A user is informed when they do not provide the correct number of arguments.
  ```bash
  node app.js
  You must provide 2 arguments! First, path to a properly formatted movie data file. Second, a folder where you want the generated posters saved.
  ```