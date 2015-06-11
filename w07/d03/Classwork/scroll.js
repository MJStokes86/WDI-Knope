console.log("main linked");
$(window).on("scroll", function(event) {
  console.log("user scrolled");
  console.log("current scroll position is " + $(window).scrollTop() );
});