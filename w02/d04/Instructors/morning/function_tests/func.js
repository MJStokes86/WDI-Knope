function hello(){
  console.log("hello world!")
};

function namer(){
  console.log('neel');
};

function typeChecker(arg){
  console.log( typeof(arg) );
};

function sayAName(arg){
  arg();
}

function caller(arg1, arg2){
  arg1();
  arg2();
};

function callerInception(arg1, arg2){
  arg1(arg2);
};

var cars = [{"brand": "Toyota"}, "Honda", "Ford", "Uber"];

for (i = 0; i < cars.length; i++){
  // console.log(cars[i]);
  consoleStuff(cars[i], i, cars);
};

function consoleStuff(arg, arg2, arg3){
  console.log(arg);
  console.log(arg2);
  console.log(arg3);
};

cars.forEach(consoleStuff)

cars.forEach(function(arg, arg2, arg3){
  console.log(arg);
  console.log(arg2);
  console.log(arg3);
});