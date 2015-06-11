// Exercise: callback me maybe

// create a function called telephone that logs "867-5309" when called.
// Write a seperate function called Blondie that takes a function as a parameter.
// Blondie should log "call me on the line at " when called, and then execute any function passed to it.

function telephone(){
  console.log('867-5309');
}

function Blondie(callback){
  console.log('Call on the line at');
  callback();
};