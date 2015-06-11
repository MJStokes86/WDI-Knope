console.log("linked")

var Post = Backbone.Model.extend({

});

var PostCollection = Backbone.Collection.extend({
    url: '/posts',
    model: Post
});

var PostView = Backbone.View.extend({
    tagName: "li",
    template: $("#message-template").html(),
    render: function(){
        var renderedPost = Mustache.render(this.template, this.model.attributes)
        this.$el.html(renderedPost)
        return this
    }
})

var PostCollectionView = Backbone.View.extend({
    initialize: function(){
        //set behavior that fires on the creation of every instance
        //listen to my collection i'm observing, if somethings added, do something
        this.listenTo(this.collection, 'add', this.addPost)
    },

    addPost: function(modelFromCollection){
        var newPostView = new PostView({model: modelFromCollection});
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
        event.preventDefault()
        console.log("I GOT CLICKEDDD")
        //grab values from text inputs
        var name = $("[name='name']").val();
        var body = $("[name='body']").val();
        console.log(name)
        console.log(body)
        //create a new model
        //add to colleciton
        //save the model
        var newModel = new Post({name: name, body: body})
        this.postCollection.create(newModel)

        //triggered from button
        //create a new model, add to collection, which will trigger 
        //the creation of a view
    }
})


var Router = Backbone.Router.extend({

    routes: {
        '': 'index'
    },

    index: function(){
        var postCollection = new PostCollection()
        var postCollectionView = new PostCollectionView({collection: postCollection, el: $("ul")})
        var formView = new FormView({el: $("form"), collection: postCollection})
        postCollection.fetch()
    }
})

var myRouter = new Router()
Backbone.history.start()
