function namer () {
	console.log("Michael J. Stokes")
};

namer()

function typeChecker(arg) {
	console.log(typeof(arg))
};

typeChecker()

function caller(arg) {
	arg();
};

function callerInception(arg1, arg2) {
	arg1();
	arg2();
}

function callMe() {
	console.log("867-5309") 
}

function blondie(callMe) {
	console.log("Call me on the line at " + callMe())
}


var cars = ['Toytota', 'Honda', 'Ford', 'Uber'];


for(i=0; i<cars.length; i++){
	console.log(cars[i], i, cars)
}

cars.forEach(consoleStuff)

function consoleStuff(arg1, arg2, arg3, arg4){
	console.log(arg1)
	console.log(arg2)
	console.log(arg3)
	console.log(arg4)
}