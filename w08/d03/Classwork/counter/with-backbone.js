var Counter = Backbone.Model.extend({
  defaults: {
    times: 0
  },
  inc: function () {
    this.set('times', this.get('times')  + 1);
  }
});

c = new Counter();

c.on('change', function() {
  $('h1').html(c.get('times') + " times!");
});

// c.on('change', function(){
// 	$('body').append('<p>Woah!</p>')
// })

$('button').on('click', function() {
  c.inc();
});

$('img').on('mouseover', function(){
	c.inc();

});

var Image = Backbone.Model.extend({
  defaults: {
    height: 100,
    width: 100
  }
});

i = new Image();

$('input').on('keyup', function() {
  i.set('src', $('input').val());
})

$('button[data-action="width"]').on('click', function() {
  i.set('width', i.get('width') + 5);
})

$('button[data-action="height"]').on('click', function() {
  i.set('height', i.get('height') + 5);
})

i.on('change', function() {
  $('img').attr('src', i.get('src'));
})

i.on('change:height', function() {
  $('img').css('height', i.get('height'))
})

i.on('change:width', function() {
  $('img').css('width', i.get('width'))
})

$(window).on('keypress', function)


h.on('change:height', function(){
	$('img').css('width', i.get('height'))
})

w.on('change:width', funciton(){
	$('img').css('width', i.get('width'))

})

