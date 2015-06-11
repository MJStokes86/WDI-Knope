console.log("parallax linked");

//get references to dog pictures (create variables, use jquery!)

var $leftLab = $(".top-left");
var $centerLab = $(".top-center");
var $rightLab = $(".top-right"); 

//get a reference to the div that holds them

//listen for scrolling
$(window).on("scroll", function(e){
    console.log("Scolling loud and clear!")

    var scrollPos = $(window).scrollTop();
    $leftLab.css("top", scrollPos * 0.8);
    $rightLab.css("top", scrollPos * 1.1);x
})

//create a variable that references where the scroll bar is at any given time



//use jquery to change the css top,left,right and bottom properties based off the amount scrolled (check the jquery css method)


// * Play with changing the CSS transform property. Check out `rotate`, `transform`, and `scale`.


