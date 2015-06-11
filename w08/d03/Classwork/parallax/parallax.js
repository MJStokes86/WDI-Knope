console.log("parallax linked");

//get references to dog pictures (create variables, use jquery!)
var $leftLab = $(".top-left");
var $centerLab = $(".top-center");
var $rightLab = $(".top-right");
var $leftPup = $(".bottom-left");
var $centerPup = $(".bottom-center");
var $rightPup = $(".bottom-right");
//get a reference to the div that holds them

//listen for scrolling

$(window).on("scroll", function(e){
	console.log("Scrolling lou and clear!")

	var scrollPos = $(window).scrollTop();
	$leftLab.css("top", scrollPos * 0.8);
	$rightLab.css("top", scrollPos * 1.1);
	$leftPup.css("top", scrollPos * 0.8);
	$rightPup.css("top", scrollPos * 0.8);

	// $('.bg').css('top', scrollPos * 0.8);
	$('.break').css('left', scrollPos *1.1);

})
//create a variable that references where the scroll bar is at any given time



//use jquery to change the css top,left,right and bottom properties based off the amount scrolled (check the jquery css method)


// * Play with changing the CSS transform property. Check out `rotate`, `transform`, and `scale`.


