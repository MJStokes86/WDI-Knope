var counter = 0;

$('button').on('click', function() {
  counter++;
  $('h1').text(counter + ' times!');
});

$('img').on('hover', function(){
    counter++;
  })


