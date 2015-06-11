console.log("linked")


var Post = Backbone.Model.extend({
	//This is a template/model for the data

});



var PostCollection = Backbone.Collection.extend({
	//Collection of instances (var x = new PostCollection({key:value}))
	url: '/posts',
	model: Post
});

var PostView = Backbone.View.extend({
	tagname: 'li',
	template: $("#message-template").html(),
	render: function(){
		var renderedPost = Mustache.render(this.template, this.model.attributes)
		this.$el.html(renderedPost)
		return this
	}
})

var PostCollectionView = Backbone.View.extend({
	initialize: function(){
		//It will notice the changes we made in the collection
		//Always use "this.listenTo" because it listens to the collection of whatever changes we made.
		this.listenTo(this.collection, 'add', this.addPost)
	},

	addPost: function(modelFromCollection){//Takes an argument from the model from the collection
		var newPostView = new PostView({model: modelFromCollection})
		newPostView.render();
		this.$el.append(newPostView.$el)

	}

})
var FormView = Backbone.View.extend({

initialize: function(options){
		this.postCollection = options.collection

	},


	events: {
		'submit': 'createPost'
	},

	

	createPost: function(event){
		event.preventDefault();
		console.log("I got clicked")
		var name = $("[name='name']").val()
		var body = $("[name='body']").val()
		console.log(name)
		console.log(body)
		//create a new model
		//add to collection
		//save to collection
		var newModel = new Post({name:name, body:body})
		this.PostCollection.create(newModel)
		newModel.save()

		//grab values from text inputs
		//triggered from button
		//create a new model, add to collection, which will trigger
		//the creation of a view
	}
})
var postCollection = new PostCollection()
// var post = new Post({id: 1})
// post.fetch()



var Router = Backbone.Router.extend({

	routes: {
		'': 'index'
	},

	index: function(){

		var postCollectionView = new PostCollectionView({collection: postCollection, el: $('ul')})
		var formView = new FormView({el: $('form')})
		postCollection.fetch()

	}
})

var myRouter = new Router()
Backbone.history.start()