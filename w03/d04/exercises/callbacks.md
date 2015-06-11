#CallBacks

> Callbacks are functions that we pass into other functions as arguments. That's it.

###Simple Callback
> We can write our own functions that take callbacks as arguments. Then we can write our own functions to pass in as callbacks.

- write a function `invoker`, that takes a callback function as an argument. It should invoke the callback function when called.

- now practice passing arguments to `invoker`
  - what happens when you pass in a string?
  - create a function `namer` that console.logs("andy") when invoked. Try passing that into invoker.
  - now try passing an anonymous callback into invoker.


###ForEach
> ForEach is a useful function for iterating. It takes a callback as an argument.

- Create an array of strings and assign it to a variable. Then use `forEach` to loop through the array and console log each element.
  - remember, `forEach` takes a callback, and an argument gets passed into that callback. Call that argument whatever you want; it represents each element in the array.
