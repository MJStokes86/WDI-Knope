$(function(){

  $("h1").on('click', function(){

    $.ajax({
      url: '/api/people/random'
      }).done(function(data){
      console.log(data)
    });
      
  })

});