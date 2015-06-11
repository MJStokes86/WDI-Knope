console.log("main linked!")

$(window).on("scroll", function(event){
    console.log("user scrolled!")
    console.log("the current scroll position is " + $(window).scrollTop())
})