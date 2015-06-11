var x = 0;
var y = 0;
while (y< 20) {
	
x=0;
	while(x < 20 && y % 2 === 0){
		g.fill(x,y,'color red');
		x+=2;
	}
y+=1;
x=1;
	while (x < 20 && y % 2 !== 0) {
		g.fill(x,y,'color red');
		x+=2;
	}
}

