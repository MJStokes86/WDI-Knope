var Counter = function() {
  this.times = 0;
  this.observers = [];

  this.inc = function() {///In reference to c variable
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

c.onChange(function() {///Takes a function as an argument. Whenever it changes, it calls that function. 
  $('h1').html(c.times + " times!");
});

$('button').on('click', function() {
  c.inc();
})

 

///.inc = "increment"
