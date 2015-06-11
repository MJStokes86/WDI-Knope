

$(document).ready(function(){
console.log('Linked!')




var $button = $("#Click")




// API Docs at: 
// https://developer.spotify.com/technologies/web-api/search/

  
   	
  $button.on("click", function(e){
  	e.preventDefault();

  	var $select = $("#search-type").val();
  	console.log($select)
  	var $keyword = $("#search-keyword")
  	var $input = $keyword.val()



  
  	switch($select) {

  		case "artist":
  		$.ajax({
  		url: 'http://ws.spotify.com/search/1/artist.json?q=' + $input,
  		type: "GET",
  	}).done(function(data){
  		// console.log(data.artists[0].name)
  		for(var i = 0; i < data.artists.length; i++){
  		var artistName = data.artists[i].name;
  		var $artistList = $("#results")
  		
		$artistList.append("<h4>" + artistName + "</h4>")
		
		}

		var x = data.artists.length
		$artistList.append("<h3>Showing " + x + " - " + x + " of " + x + " results found.</h3>")
		$artistList.append("<a href><h3>Next page of results</h3></a>")
  })

  break; 

  		case "track":
  		$.ajax({
  			url: 'http://ws.spotify.com/search/1/track.json?q='+ $input,
  			type: "GET",
  		}).done(function(data){
  			// console.log(data.tracks[0].name)
  		for(var i =0; i < data.tracks.length; i++){
  			var trackName = data.tracks[i].name
  			var $trackList = $("#results")
			$trackList.append("<h4>" + trackName + "</h4>")
  		}

  		var x = data.tracks.length
		$trackList.append("<h3>Showing " + x + " - " + x + " of " + x + " results found.</h3>")
		$trackList.append("<a href><h3>Next page of results</h3></a>")


  		})

  break;


}




})
})