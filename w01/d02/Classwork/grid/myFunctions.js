/*function makeASandwich(){
	console.log('getbread');
	console.log('get peanut butter and jelly');
	console.log('Hand smear peanut butter on bread');
	console.log("hand smear on jelly");
	console.log('combine two pieces of bread')
};
makeASandwich();*/

function fillSquare(x, y){

	g.fill(x,y,'color red');

}

fillSquare(0,0);

function fillSquare(color) {
var fillStatusTopLeft = g.at(0,0);
var fillStatusTopRight = g.at(19,0);
if (fillStatusTopLeft === 0 && fillStatusTopRight === 0){
g.fill(0,0,'color ' + color)
g.fill(19,0,'color ' + color)
}
else {
g.unFill(0,0);
g.unFill(19,0);
}
};

fillSquare('red')


function saySomething(name, message){
	console.log(name + "said " + message)
}
 saySomething('Mike', 'hello')


function fillSquare(x, y, color, x2, y2, color2){
	g.fill(x,y,'color ' + color);
        g.fill(x2,y2, 'color ' + color2);

}

fillSquare(3,6,'red',4,5,'black');


var squareInfo = [4,6,'red']
function colorizedSquare(squareInfo){
	return g.fill(squareInfo[0], squareInfo[1], 'color ' + squareInfo[2])
}

colorizedSquare(squareInfo)

var squares = [['orange', 1, 10], ['purple', 2, 4]];

function colorizeSquares(arrayOfSquares){
g.fill(arrayOfSquares[0][1], arrayOfSquares[0][2], 'color ' + arrayOfSquares[0][0])
g.fill(arrayOfSquares[1][1], arrayOfSquares[1][2], 'color ' + arrayOfSquares [1][0])

}

