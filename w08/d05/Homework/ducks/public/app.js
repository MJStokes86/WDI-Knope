console.log("app linked!")

///Template model for the data structure
var Duck = Backbone.Model.extend({

	// defaults:{
	// 	img: "image",
	// 	name: "name",
	// 	position:"position",
	// 	number:"number"

	// }
})

///Collection of instances 
/// Instance = "var x = new Duck({name: Charlie Conway, position: center, number: 96})"
///Instance for a view = "var xView = new DuckView({model: x})"

var DuckCollection = Backbone.Collection.extend({
	url: '/ducks',
	model: Duck
});


var DuckView = Backbone.View.extend({
	///This is called when a new instance has been created. It's listening for changes and when something has been deleted. 

	

	initialize: function(){

	

		
	this.listenTo(this.model, 'change', this.render);
	///This is where it knows that the instances has changed. This is where it renders every change. Always use this.listenTo because it tells the other functions when to do something. It's on the lookout. Render means to give something. 

	this.listenTo(this.model, 'destroy', this.remove);
	///This is where it knows when our model has been deleted then deletes it from the database when using the callback 'this.remove.'


	},

	events: {
		///This is done here in the Collection function. This is to trigger any buttons from the HTML to perform an action.
	
	"click button[data-action='edit']": 'change',
	"click button[data-action='delete']": 'destroy' 

	},

	//Setup mustache render here
	tagname: 'tr',
	className:'ui four column table',
	//If you are using mustache place template here.
	template: $('[data-tempate="duck"]').html(),

	render: function() {
   var renderDuck = Mustache.render(this.template, this.model.attributes)
   this.$el.html(renderDuck)
   return this

  	},
	
	


	//Since you are destroying something from the database. You want to add a function for that. 
	destroy: function(){
		this.model.destroy();
	},
	
	

	save: function(){
		this.model.save();

	}

	


})

var DucksView = Backbone.View.extend({
	///This is where it create views for the duck collection
	initialize: function(){
		this.listenTo(this.collection, 'add', this.addDuck)
	},

	addDuck: function(duck) {
		///This adds another duck to the Duck Collection

		var view = new DuckView({model: duck});
		view.render();
		///append to the Dom here
		this.$el.append(view.$el);
	}
})

var Router = Backbone.Router.extend({
	routes:{
		"": 'index'
	},

	index: function(){

var duck = new Duck({model:Duck})

var ducks = new DuckCollection();
///This is where all duck will be put inside of the tbody element
var ducksView = new DucksView({collection: ducks, 
	///We are passing a live piece of the DOM to the view control
	el: $('tbody')
});

ducks.fetch();

	}

})
 var myRouter = new Router()
 Backbone.history.start()









