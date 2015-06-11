## Exercises

### Monkey Cheesecake

A function which takes a string as an argument. If the first word in the string is 'monkey' then return 'banana'. If the second word in the string is 'cheesecake', return 'yummy'.

### FizzBuzz

Write a function that accepts a single parameter as an argument, a number, and will return the following:

  - The string "Fizz" if the number is evenly divisible by 3
  - The string "Buzz" if the number is evenly divisible by 5
  - The string "FizzBuzz" if the number is evenly divisible by 3 AND 5
  - The string "Sorrels" if the number is not divisible by 3 OR 5

### Tagger


Write a function that takes a string and an HTML tag and returns that string wrapped in the HTML tag.

```javascript
tagger('h1', 'Hello')
// <h1>Hello</h1>
```

Super Bonus: Write a function that takes a nested object and turns it into HTML.

```javascript
advancedTagger([ {h1: "Hello"}, {div: {ul: [{li: "cheese"}, {li: "muffins"}]}} ]);
// <h1>Hello</h1>
// <div>
//    <ul>
//      <li>cheese</li>
//      <li>muffins</li>
//    </ul>
// </div>
```

### Lengths

Write a function that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

```javascript
words = ["hello", "what", "is", "up", "dude"]
lengths(words)
// [5, 4, 2, 2, 4]
```