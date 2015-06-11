#Using Mustache to Render Each Element in an Array

> Recall that thus far we've used mustache to render HTML templates from javascript objects.

> We create a template file, written as HTML, and use {{}} brackets to indicate dynamic fields

```html
<body>
  <h1> {{name}} </h1>
  <h2> {{age}}  </h2>
</body>
```
> Then, we read in that file as a variable, and render out html using the mustache render function. The values in our object replace the keys waiting to be swapped in our HTML template.

```javascript
var template = fs.readFileSync('./template.html', 'utf8')

var personAsObject = {name: "Andy", age: "28"}

var html = mustache.render(template, personAsObject)
```
> But what if we have an array of objects with indentical keys and unique data, and we want to render them all as HTML? Mustache has a built in feature that lets us handle that scenario very easily.

```javascript
var template = fs.readFileSync('./template.html', 'utf8')

var people = [
  {name: "Andy", age: "28"},
  {name: "Neel", age: "29"},
  {name: "Alf", age: "unknown"}
]
```
> Notice that the people variable is an array of objects, a data structure that we will get very familiar with. We render the HTML similarly, except we pass in the whole array, not just one object. This must be passed in with a key of our choosing pointing to a value that is an array.

```javascript
var html = mustache.render(template, {people: people})
```
> Above, the people key points to the people array, declared above.

> Now let's look at the HTML template designed to take an array of objects as input

```html
<body>
  {{#people}}
    <h1> {{name}} </h1>
    <h2> {{age}} </h2>
  {{/people}}
</body>
```

> We use a `#` to begin our loop through the objects, and end the loop with a `/`. Notice that the name of the collection being looped through is the same as the key in the object we pass in to be rendered.
> Then we just print out the key associated with each key/value pair. The resulting HTML would be:

```html
<body>
  <h1> Andy </h1>
  <h2> 28 </h2>
  <h1> Neel </h1>
  <h2> 29 </h2>
  <h1> Alf </h1>
  <h2> Unknown </h2>
</body>
```
