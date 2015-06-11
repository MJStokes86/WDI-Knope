var counter = 0;

$('button').on('click', function() {
  counter++;
  $('h1').text(counter + ' times!');
  $('body').append('<p>Woah</p>')
});

$('img').on('hover', function() {
  counter++;
  $('h1').text(counter + ' times!');
  $('body').append('<p>Woah</p>')
})