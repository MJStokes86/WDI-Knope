console.log("Success")

var Character = Backbone.Model.extend({})


var CharacterCollection = Backbone.Collection.extend({

url: "/characters",
model: Character


});


var CharacterView = Backbone.View.extend({

	initialize: function(){
		this.listenTo(this.collection, 'add', this.addOne)
	},

	addOne: function(character)

	var view = new

});
	


