var assert = require('assert');

function monkeyChecker(str) {
  if (str.split(' ')[0] === 'monkey') {
    return 'banana';
  } else {
    return 'GO AWAY!'
  }
}

assert.equal( monkeyChecker('monkey hello'), 'banana' )
assert.equal( monkeyChecker('basketball hello'), 'GO AWAY!' )

// A function which takes a string as an argument. If the first word in the string is 'monkey' then return 'banana'. If the second word in the string is 'cheesecake', return 'yummy'.


// write a function that takes two strings as arguments
// and returns whether or not either of them starts with a T

function isThereT(wordOne, wordTwo) {
  if (wordOne[0].toLowerCase() === 't' || wordTwo[0].toLowerCase() === 't') {
    return true;
  } else {
    return false;
  }
}

assert.equal(isThereT('jeff', 'shmee'), false);
assert.equal(isThereT('banana', 'truth'), true);
assert.equal(isThereT('Tamale', 'Tea'), true);
assert.equal(isThereT('adamt', 'jetff'), false);

function echoSomething(str) {
  return str;
}

var whateverWasReturnedFromFunc = echoSomething('banana')

// equivalent!
assert.equal( whateverWasReturnedFromFunc , 'banana' );
assert.equal( echoSomething('banana') , 'banana' );

// self executing anonymous function - rarely used, but interesting like a rare bird
assert.equal( ( function(str) { return str } )('hello'), 'hello');




