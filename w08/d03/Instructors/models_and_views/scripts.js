// var Car = Backbone.Model.extend({
//   whatAmI: function(){
//     console.log('I am a ' + this.get('model'));
//   },
//   addToDom: function(){
//     $('body').append("<h2>" + this.get("make") + "</h2>")
//   }
// });

var Car = Backbone.Model.extend( {} );

// var CarView = Backbone.View.extend({
//   render: function(){
//     this.$el.append("<h2>" + this.model.get('type') + "</h2>")
//   }
// });

var CarView = Backbone.View.extend({
  initialize: function(){
    console.log('View made for ' + this.model.get('type'));
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'change', this.ajaxCall);
  },
  tagName: 'li',
  template: $('WHEREVER THE TEMPLATE IS'),
  render: function(){
    console.log('Firing render')
    // this.template; 
    this.$el.html("<h2>" + this.model.get('color') + " " + this.model.get('type') + "</h2>")
  },
  ajaxCall: function(){

  }
});



var sedan = new Car({make: "Honda", type:"Civic", color: "Silver"});
var truck = new Car({make: "Hummer", type:"H2", color: "Orange"});
var convertible = new Car({make: "Mazda", type:"Miata", color: "Red"});

// var sedanView = new CarView({model: sedan, el: $('body')});
// var truckView = new CarView({model: truck, el: $('body')});
// var convertibleView = new CarView({model: convertible, el: $('body')});

var sedanView = new CarView({model: sedan});
var truckView = new CarView({model: truck});
var convertibleView = new CarView({model: convertible});

sedanView.render();
truckView.render();
convertibleView.render();

// $('body').append(sedanView.$el);
// $('body').append(truckView.$el);
// $('body').append(convertibleView.$el);

$('ul').append(sedanView.$el);
$('ul').append(truckView.$el);
$('ul').append(convertibleView.$el);

// sedan.on('change', function(){
//   sedanView.render();
// });

// truck.on('change', function(){
//   truckView.render();
// });

// convertible.on('change', function(){
//   convertibleView.render();
// });

