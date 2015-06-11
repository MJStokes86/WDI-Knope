console.log("main linked");

$(document).ready(function(){


$(window).on("scroll", function(event){
	console.log("user scrolled");
	console.log("current scroll position is " + $(window).scrollTop() );
});

// $("#stop-button").on("click", function(){
// 	$(window). scrollTop(0);
// 	loadToggle = true;
// 	$("#main-list").empty()
// })


var $button = $("#button");
var body = document.querySelector("body");
var $input = $("#input-box")
var $keyword = $input.val()

$button.on("click", function(){
	console.log("clicked")


$.ajax({
  	url:"http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag= " + $keyword,
	type: "GET",
	}).done(function(data){
		console.log(data.data.image_original_url)
		var image = data.data.image_original_url
		var $imageList = $("#main-list")

		$imageList.append("<img src=' " + image + " '/>")


	})

})
})

