var Car = Backbone.Model.extend({////Takes everything that models backbone by using .get, .set, .attributes, .on. It passes an object.

whatAmI: function(){
	console.log('I am a ' + this.get('type'));
}
// addToDom: function(){
// 	$('body').append('<h2>' + this.get("make") + '<h/2>')
// }
})

var CarView = Backbone.View.extend({
	render: function(){
		this.$el.append("<h2>" + this.model.get('type') + "</h2>" )


	}
})

var sedan = new Car({make: "Honda", type: "Civic", color: "Silver:"});
var truck = new Car({make: "Hummer", type: "H2", color: "Orange"});
var convertible = new Car({make: "Mazda", type: "Miata", color: "Red"});

// var sedanView = new CarView({model: sedan, el: $('body')});
// var truckView = new CarView({model: truck, el: $('body')});
// var convertibleView = new CarView({model: convertible, el: $('body')});
////.set means adding a new key:value in an object
////.get means getting something like a value
////.attributes means gives out the entire object
////.on means to operate something
// sedanView.render()
// truckView.render()
// convertibleView.render()



	
