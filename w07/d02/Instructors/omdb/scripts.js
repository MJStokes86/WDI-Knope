var $button = $('button');

$button.on('click', function(e){
  e.preventDefault();

  var $input = $('input')
  var movieTitle = $input.val();
  $.ajax({
    url: 'http://www.omdbapi.com/?t=' + movieTitle,
    type: 'GET'
  }).done(function(data){
    var title = data.Title;
    var plot = data.Plot;
    var rated = data.Rated;

    var $movieInfo = $('#movie-info');

    $movieInfo.append("<h1>" + title + "</h1>");
    $movieInfo.append("<h3>" + plot + "</h3>");
    $movieInfo.append("<h3>" + rated + "</h3>");

    $input.val("");
  });

});

