
  var $template = $("#template").text();

  function grabPeople(){
    $.ajax({
      url: "http://api.randomuser.me/",
    }).done(function(data){
        var rendered = makeTemplate(data);
        $("body").append(rendered);
        var $draggable = $('.draggable').draggabilly();  
    })
  }

  function makeTemplate(data){
    var userName = data.results[0].user.username;
    var picture = data.results[0].user.picture.medium;
    var html = Mustache.render($template, {picture: picture, userName: userName});
    console.log(html);
    return html;
  }

  $("#grabPeople").on("click", grabPeople);









