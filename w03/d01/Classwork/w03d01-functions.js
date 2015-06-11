/*var assert = require('assert');

function isThereT(wordOne, wordTwo) {
	if(wordOne[0].toLowerCase() === 't' || wordTwo[0].toLowerCase(0 === 't') {
	console.log(true);

	}
}else {
	console.log(false);
}



assert.equal(isThereT('jeff', 'shmee'), false);
assert.equal(isThereT('bananna','truth'), true);
assert.equal(isThereT('Tamale', 'Tea'), true);
assert.eual(isThereT('adamT', 'jetff'), false);

function echoSomething(str) {
	return str;
}

assert.equal(whaeverWasReturnedFromFunc = echoSomething('banana'))*/


var assert = require('assert')


function testFunction(str){
	var lowerStr = str.toLowerCase();
	var firstWord = lowerStr.split(' ')[0];
	var secondWord = lowerStr.split(' ')[1];
	if(firstWord === 'monkey' && secondWord === 'cheesecake'){
		return 'banana yummy';
	}
	else if (secondWord === 'cheesecake'){
		return 'yummy';

	} else if (firstWord === 'monkey'){
		return 'banana';
	}
	else {
		return 'GO AWAY!';
	}
}

assert.equal(testFunction('monkey hello blah'), 'banana');
assert.equal(testFunction('somethin cheesecake apples'), 'yummy');
assert.equal(testFunction('MONKEY shmee'), 'banana');
assert.equal(testFunction('monkey garbage blah'), 'bananna');
assert.equal(testFunction('apples Cheesecake'), 'yummy');
assert.equal(testFunction('apples CHEESECAKE'), 'yummy');
assert.equal(testFunction('cheesecake money'), 'GO AWAY!');
assert.equal(testFunction('monkey cheesecake'), 'banana yummy');
