### Start Up

1. In this directory, run `npm install .`
* Also in this directory run `./node_modules/json-server/bin/index.js ./db.json`
* To check if this has worked, go to `http://localhost:3000/countries` and `http://localhost:3000/index.html`

### Part One

Write five separate functions which make AJAX calls to do each of the following...

1. fetch all of the countries
  * `GET /countries`
* fetch one country by id
  * `GET /countries/:id`
* create a new country (name, capital)
  * `POST /countries`
* update a country
  * `PUT /countries/:id`
* delete a country
  * `DELETE /countries/:id`

The functions should log results to the console. Write this code in `public/app.js` and test your functions by calling them in the console.

### Part Two

Create five buttons on the page. Each one should trigger one of the functions listed above. IE when you click a button you should see the result of the ajax call it triggered in the console.

### Part Three

1. Make a form with an input for name and capital. When you click the submit button, you should make an AJAX call to create a new country on the server with the data from the form.

2. The button that fetches all countries from the server should now, instead of logging it's results to the console, create a `ul` with each country and it's capital as an `li` on the DOM.