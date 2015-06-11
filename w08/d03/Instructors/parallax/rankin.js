console.log("parallax linked");

//get references to dog pictures (create variables, use jquery!)

var $puppyTL = $('.top-left')
var $puppyTC = $('.top-center')
var $puppyTR = $('.top-right')
var $puppyBL = $('.bottom-left')
var $puppyBC = $('.bottom-center')
var $puppyBR = $('.bottom-right')

//get a reference to the div that holds them

//listen for scrolling

$(window).on('scroll', function(event) {
 var scrollPos = $(window).scrollTop();
 console.log(scrollPos)
 $puppyTL.css('top', scrollPos * 0.8)
 $puppyTL.css('transform', 'rotateX(' + (scrollPos / 1.5) + 'deg)')
 $puppyTC.css('top', scrollPos * 1.25)
 $puppyTC.css('left', Math.sin(scrollPos/125)* 300)
 $puppyTC.css('transform', 'rotateY(' + (scrollPos / 2.5) + 'deg)')
 $puppyTR.css('top', scrollPos * .9)
 $puppyTR.css('transform', 'rotateZ(' + (scrollPos / 2) + 'deg)')

 $puppyBL.css('top', (Math.cos(scrollPos / 150) * 300))
 $puppyBL.css('left', (Math.sin(scrollPos / 150) * 300) + 300)

 $puppyBC.css('transform', 'rotate3d(' + scrollPos + ', ' + scrollPos + ', ' + scrollPos + ', ' + scrollPos + 'deg)')
 $puppyBR.css('transform', 'scale(' + Math.sin(scrollPos / 200) + ', ' + Math.sin(scrollPos / 200) + ')')
 $puppyBR.css('border', "dotted " + (scrollPos/40) + "px #fff")

})