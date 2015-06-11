var express = require('express');
var app = express();

var calculator = require('./calc.js');

console.log(calculator);

// function hello(name) {
//   return "Hello " + name + ". Welcome to the calculator";
// };

// function calculate(num1, num2, operation) {
//   if(operation === "add"){
//     return num1 + num2;
//   } else if (operation === "subtract"){
//     return num1 - num2;
//   } else (
//     return "Unknown operation";
//   )
// };

// var num1 = process.argv[2]
// var num2 = process.argv[3]

console.log(calculator.add(2, 3));
console.log(calculator.subtract(10, 7));