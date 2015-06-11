function makeASandwich(){
  console.log("get bread");
  console.log("get peanut butter and jelly");
  console.log("Hand smear peanut butter on bread");
  console.log("Hand smear jelly on bread");
  console.log("combine two peices of bread");
}

function redFiller(){
  g.fill(0, 0, "color red")
  g.fill(0, 19, "color red")
}

function saySomething(message){
  console.log("You said " + message);
}

function fillTopCorners(color){
  g.fill(0, 0, "color " + color);
  g.fill(19, 0, "color " + color);
}

function cornerFiller(color){
  var fillStatusTopLeft = g.at(0,0);
  var fillStatusTopRight = g.at(19, 0);
  if (fillStatusTopLeft === 0 && fillStatusTopRight === 0 ){
    g.fill(0, 0, "color " + color)
    g.fill(19, 0, "color " + color)
  } else {
    g.unFill(0, 0);
    g.unFill(19, 0);
  }
};

function cornerFiller(){
  var fillStatusTopLeft = g.at(0,0);
  var fillStatusTopRight = g.at(19, 0);
  if (fillStatusTopLeft === 0 && fillStatusTopRight === 0 ){
    g.fill(0, 0, "color red")
    g.fill(19, 0, "color red")
  } else {
    g.unFill(0, 0);
    g.unFill(19, 0);
  }
};

var i = 0;
while(i < 50){
  cornerFiller();
  i++
}

setInterval(cornerFiller, 500)

function saySomething(message, name){
  console.log(name +" said " + message);
}

function colorizeSquare(x, y, color){
  g.fill(x, y, "color " + color)
}

function colorizeSquares(x, y, color, x2, y2, color2){
  g.fill(x, y, "color " + color)
  g.fill(x2, y2, "color " + color2)
}

var data = [ "red", 4, 6, ["hello world", [false] ] ]

data[3][1][0]
// false

function colorizeSquare(squareInfo){
  g.fill(squareInfo[1], squareInfo[2], "color " + squareInfo[0])
}

colorizeSquare(["orange", 1, 10])

var squares = [ ["orange", 1, 10], ["purple", 2, 4] ];

function colorizeSquares(arrayOfSquares){
  g.fill(arrayOfSquares[0][1], arrayOfSquares[0][2], "color " + arrayOfSquares[0][0])
  g.fill(arrayOfSquares[1][1], arrayOfSquares[1][2], "color " + arrayOfSquares[1][0])
}


