var Counter = function() {
  this.times = 0;
  this.observers = [];

  this.inc = function() {
    this.times++;
    this.notifyObservers();
  }

  this.onChange = function(callBack) {
    this.observers.push(callBack);
  }

  this.notifyObservers = function() {
    this.observers.forEach(function(cb) {
      cb();
    });
  }
}

var c = new Counter();
var anotherOne = new Counter();

c.onChange(function() {
  $('h1').html(c.times + " times!");
});

c.onChange(function() {
  $('body').append('<p>WOAH</p>')
})

$('button').on('click', function() {
  c.inc();
});

$('img').on('mouseover', function() {
  c.inc();
});