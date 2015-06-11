console.log("easy linked");

//create a backbone model class to package a person's data
var Person = Backbone.Model.extend({

})
//create a backbone view class to visually represent a person's data
var PersonView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, 'change', this.render)
	}
	template: $('[data-template="person"]').html(),

  // the person view class needs an initialize function, a render function, and a template property
  // the initialize function is going to tell the view to observe it's model for changes, and do something in that event
  // the template property should point to a string read in from a script tag in index.html
  // the render view should use the template and update the html of our view to represent the current 'state' of the model!
render: function(){
	var template = this.template
	var data = {name: this.model.get('name'), this.model.get{'age'}}
	var html = Mustache.render(template, data)

	this.$el.html(html):
	$('[data-section="people"]').append(this.$el)

}

})

//insantiate instances of both a Person model and a Person view
//make sure you pass the model to the view when you create it
//try rendering your personview. You should see it on the DOM if it's working
var person1 = new Person ({name: 'Neel', age: '26'})


//now attach event listeners that update the model depending on what the user clicks. If the view is properly
//observing the model, it will re render itself because it's listening for a change!
var person1View = new PersonView ({model: person1})

person1View.render()





/////Now try and make this happen for three models.........


