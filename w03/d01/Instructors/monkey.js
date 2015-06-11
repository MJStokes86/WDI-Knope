var assert = require('assert');

// function isEqual(actual, expected) {
//   if (actual != expected) {
//     throw new Error('' + actual + ' == ' + expected + ' failed!');
//   }
// }

// isEqual('hello', 'cheese')

function monkeyChecker(str) {
  var lowerStr = str.toLowerCase();
  var firstWord = lowerStr.split(' ')[0];
  var secondWord = lowerStr.split(' ')[1];

  if (firstWord === 'monkey' && secondWord === 'cheesecake' ) {
    return 'banana yummy';
  } else if (firstWord === 'monkey') {
    return 'banana';
  } else if (secondWord === 'cheesecake') {
    return 'yummy'
  } else {
    return 'GO AWAY!'
  }
}

assert.equal( monkeyChecker('monkey hello'), 'banana' )
assert.equal( monkeyChecker('basketball hello'), 'GO AWAY!' )
assert.equal( monkeyChecker('MONKEY shmee'), 'banana');
assert.equal( monkeyChecker('monkey,garbage blah'), 'GO AWAY!')
assert.equal( monkeyChecker('apples CHEESECAKE'), 'yummy');
assert.equal( monkeyChecker('apples cheesecake'), 'yummy');
assert.equal( monkeyChecker('cheesecake monkey'), 'GO AWAY!')
assert.equal( monkeyChecker('monkey cheesecake'), 'banana yummy');
