// g.fill(0, 19, 'color orange');
// g.fill(0, 10, 'color orange');

// var i = 0;

// while (i < 20) {
//   g.fill(i, 3, 'color blue');
//   i++;
// }

// var colorTheUserChose = prompt("what color do you want?");
// var colorTheUserChose = prompt("what color do you want again ?");
// colorTheUserChose = 1
// g.fill(0, 0, 'color ' + colorTheUserChose);

// var rowTheUserChose = prompt("What row???");
// var rowAsNum = parseInt(rowTheUserChose) - 1;

// var i = 0;

// while (i < 10) {
//   g.fill(i, rowAsNum, 'color orange');
//   i++;
// }

var colorTheUserChose = prompt("What color you want?");

if ( colorTheUserChose === "red" || colorTheUserChose === "yellow" || colorTheUserChose === "blue" ) {
  alert("Bad job.")
} else {
  g.fill(0, 0, 'color ' + colorTheUserChose);
}













