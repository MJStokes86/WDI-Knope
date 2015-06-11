#Method Man's Method (function) Madness &copy;
**Note: this exercise was born in ruby, hence the use of the word 'method' in the title**
<img src="http://www.billboard.com/files/styles/promo_650/public/stylus/110276-method_man_617_409.jpg">

> Write tests for each function before you begin writing the function itself.

> Before writing your tests, ask yourself, 'What should my function be evaluating? An object? An array? A string?'

1. Write a function, `singleSampler`, that takes a wu-tang album object and prints out the names of all the singles.

* Write a function, `singleCounter`, that returns the number of singles for a given wu-tang album.

* Write a function, `albumLength`, that returns an album's play time.

* Write a function, `wuMarathon`, that returns the total playtime of all the Wu-Tang albums combined.

* Write a function, `classicFinder`, that returns an array of any Wu-Tang albums released before the year 2000.

* Write a function, `playTheHits`, that returns an array of all the singles the Wu-Tang clan has released.

* Write a function, `singleGram`, that returns an object of the single count for the wu-tang discography, like this:

  - ```javascript
  {"Enter the Wu Tang": 4,
    "Wu-Tang Forever": 3,
    }
  ```




```javascript
var wuTangDiscography = [

  {
    title:"Enter the Wu Tang",
    release_date:"11-09-1993",
    singles:["Protect ya neck", "Method Man", "C.R.E.A.M.", "Can it be all so simple"],
    label:"Loud",
    length:"61:00",
  },
  {
    title:"Wu-Tang Forever",
    release_date:"06-03-1997",
    singles:["Triumph", "Itz yours", "reunited"],
    label:"RCA",
    length:"45:00",
  },
  {
    title:"The W",
    release_date:"11-21-2000",
    singles:["Protect Ya Neck", "Gravel Pit", "Careful"],
    label:"Loud",
    length:"59:00",
  },
  {
    title:"Iron Flag",
    release_date:"12-21-2001",
    singles:["Uzi", "Rules"],
    label:"Columbia",
    length:"54:00",
  },
  {
    title:"Eight Diagrams",
    release_date:"12-11-2007",
    singles:["The Heart Gently Weeps"],
    label:"Universal Motown",
    length:"71:00",
  },

]

```
