# Javascript Basics Answer Key

Record the answers to the following IN THIS FILE where we have indicated 'answer here'. We won't be looking at any other files so make sure you save them in here before submitting!

## Question 1

```javascript
var a = 5
var b = 4
a = b
```

At the end of this program, what are the values of a and b? Try to explain, in plain English, how you got your answer for each one.


>We use a single equals sign to `assign` values in javascript. The first line assigns the integer 5 to the variable a. The following line assigns the integer 4 to the variable b. The final line `reassigns` to the value of a to that of b, hence both variables have the value of 4.


## Question 2

```javascript
var e = 3
var f = 9
var g = e + f
var f === g
var e = 3
```

At the end of this program, what are the values of e, f, and g? Try to explain, in plain English, how you got your answer for each one.


>The first two lines assign values to the variables e and f, respectively. The next line declares a variable g, and assigns it's value to the sum of e and f.

>The following line introduces the javascript 'comparison operator'. Here we are not `assigning`, but `comparing` two values. Since the value of f is 9 and g is 12, this comparison will evaluate to 'false'. Even though it evaluates to false, it does NOT actually assign false to variable f.

>The last line simply reassigns the value of e, and by coincidence the value it is reassigned to is the value it already was.


## Question 3

```javascript
var weather = "cloudy"
var weather === "cloudy"
```

What is the difference between these two statements? Explain your answer.

>The first line here is an example of variable assignment; we are assigning the value of the variable weather to the string 'cloudy'.

>The second line is a comparison. We are comparing the values on both sides of the three equals signs. Since the value of the weather variable is the same as the string 'cloudy', this will evaluate to 'true'


## Question 4

```javascript
var x = 2

if(x === 3) {
  console.log("sushi is tasty");
} else if (x > 0) {
  console.log("sushi is delicious");
}
```

Imagine that you run this code in your browser. What would be the output? Explain your answer.


>This question is an example of 'control flow' in javascript. We establish a condition. If that condition is met, one block of code will be executed. If not, the second block will run.

>Initially, we declare a variable x, and assign that to the value of 2. Our control flow uses a `comparison` operator to compare the value of the variable x to the integer 3. Since this comparison evaluates to `false`, the block of code under `else if` will be executed, and 'sushi is delicious' will be printed to the log.


## Question 5

```javascript
var food = "walnut"

if (food === "walnut"){
  console.log("i love walnuts");
}
```

Imagine that you run this code in your browser. What would be the output? Explain your answer.

>This is another example of control flow in javascript. We assign the string "walnut" to the variable food.

>In our control flow, or `if statement`, we compare the value of the variable food to the string "walnut" itself. Since these are equal, our condition is met, and the code inside is executed. "i love walnuts" is printed to the console.

## Question 6

```javascript
  var a = "4" + 10
```

What would happen here and why? How could I change this code.

> The focus of this question is different data types, and how javascript handles them. Here we are trying to add the `string` "4" to the `integer` `10`

> Javascript will automatically parse any integer as a string in this situation, and will `concatenate` the two strings together. Thus, the value of a will be the `string` "410"

## Question 7

```javascript
 var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]
```
What is the index of "Michelangelo"?

>Arrays are fundamental data structure in programming. Arrays are constructed of an ordered series of `elements`. Each element is identified by its `index` number, beginning at 0. "Michelangelo" has the index number of 2 in this case.


## Question 8

```javascript
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]

for(i = 0; i < 2; i++){
  console.log(turtles[i]);
}
```

* Examine the above code and imagine that you run it.
* What do you expect the outcome will be? Explain your answer.
* Would you make any changes to this code?

> This question introduces us to a `for loop` in javascript.

> We initially declare a variable, turtles, and set this equal to an array of turtle strings. The goal of our loop is to move individually through each of these elements and execute behavior on each one.

> There are three key components for for loops in javascript, and we can see these separated by semicolons between the parentheses.

> 1. A variable we use as a counter, conventionally set to 0 at the outset.

> 2. The condition that keeps our loop going. If this condition is no longer met, or 'breaks', our loop will stop.

> 3. An incrementer. Each time the loop runs and executes the below behavior, the counter will be incremented.

> Inside our loop, we are simply logging the name of the turtles to the screen. However, running this loop will only print the first two names in the array, because our loop is set to break if the value of i is not less than 2.


## Question 9

* Write a function that returns an array with two names as strings inside of it. (don't overthink this)

> There are several ways to satisfy this question. Below is a very simple example:

```javascript
function returnArrayOfNames(){
  return ["Andrew", "Fritz"]
};
```
