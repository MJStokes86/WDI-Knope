# MovieHaus Redux

> Our good friend Gerard has decided that he's not satisfied with the functionality of his current program for creating movie posters. It's so limited by the tiny library of movies he has access to, and plus, he has to manually add them to some JSON file. Who wants to do that!?

> Fortunately, we can use a free and easy to use <a href="http://www.omdbapi.com/">API</a> to help Gerard out.

- Gerard can enter a movie title and the app will save an HTML poster of that movie with
  * title
  * poster image
  * year of release

```bash
$ node app.js titanic
Poster created! './titanic.html'
```

**Bonus**
- Use the rotten tomatoes API to fetch a rating for each movie and display that in the poster as well.