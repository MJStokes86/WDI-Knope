// IN THE BEGINNING, there was a variable. This variable was called "Country," with a capital C! Why, you ask? BECAUSE.... IT'S A CONSTRUCTOR FUNKSHUN!!!!!!!!111!1!1!one!111

//STEP ONE: Create a model for the data of every country.
//This is simply the template/model for our DATA model objects
var Country = Backbone.Model.extend({});

// this is like seedin a db yo!
// var blah = new Country({name: "whateves", capital})

// THIS IS A COLLECTION OF INSTANCES!!!! This is also a CONSTRUCTOR FUNCTION. Capital C's yo
var CountryCollection = Backbone.Collection.extend({
 // The url defines our RESTFUL ROODTE
 //It's a "GET" route to get information of all countries as JSON data (array of objects).
 //Our collection will contain everything at /countries
 url: '/countries',
 //This is the constructor function/template thing to create new instances of every model that will be in our COLLECSHUN :heart:
 model: Country
});

// This is yet another constructor function. YAY. There will be a view for EVERY DAMN THING on the DOM. This is a View template for a MODEL, NOT a Collection. Each model that is rendered/changed by this View will be an instance defined by/set up by/whatever `new Country()` (the constructor function for the Country models).

//----------------EGGSAMPLE----------------

// butts is a new instance of model 'Country'
// var butts = new Country({name: "Telephones", capital: "kNope"})

// buttsView is a new instances of the view 'CountryView'
// var buttsView = new CountryView({model: butts})

//----------------END EGGSAMPLE----------------

var CountryView = Backbone.View.extend({
 // This is a function! When is it called??? Called when a new instance is created.
 // Turning on our "tools" (eyebrow wiggle) EX: Change listener, destroy listener
 //Nothing is actually happening here dood - it's just listening for these things.
 initialize: function() {
   //this knows when our instance changes!! Then it will render the change.
   // listenTo is the lookout - tells the other functions when to do stuff!
   this.listenTo(this.model, 'change', this.render);
   //this knows when our model is destroyed in the DB, then removes it by invoking the callback 'this.remove'. 
   this.listenTo(this.model, 'destroy', this.remove);
   //This is necessary because the model being removed from the DB isn't yet removed from the DOM. WE TELL IT TO.
 },
 //EEEEEEEEEEEEVENTS. (listeners) Context is always 'this'
 events: {// THIS is AWESOMELY POWERFUL
   //Listener for a click with a data-action attribute of "delete", then telling it to DESTROY whatever "this" instance is. Below is key value pair.
   //On click of button with this data action, go find the function that is set to the 'value' of destroy: function down below
   "click  button[data-action='delete']": "destroy"
 },
 // Template is cool!!!! Using jQuery to get it from the DOM. Using .text() to take the TEST out of the jQuery object.
 template: $('[data-template="country"]').text(),

 // this redefines the DEFAULT kind of element that the View constructor function will create for us. :heart:
 tagName: 'li',
 // ex: this will create an empty, un-appended <li></li> element.
 // This would BY DEFAULT create an empty div.

// destroy is being defined by the function and it's logic
//logic being the destruction of the instance model in the database via a delete call to the database
//destroy:references database and .remove references the DOM
 destroy: function() {
   this.model.destroy();
 },

 //take this instance (of this li) and mustache render to the template in the index file the attributes 
 render: function() {
   this.$el.html( Mustache.render(this.template, this.model.attributes) );

   //this.$el.html()  is going to give us JUST the html- not the metadata and shit we don't need
   console.log(this.$el.html());
    console.log(this.$el);
 }
});


//this var is a constructor function creating views for countries COLLECTION! 

// upon initializtion, CountriesView listens for additions of a country to the collection, then it runs the function of addOne.
var CountriesView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
  },

//now it creates another country view with a country model and renders the view and then appends to the ul of countries view.
  addOne: function(country) {
    // notice here we don't pass an `el` attribute
    // because this view will generate an 'li' from scratch
    var view = new CountryView({model: country});
    view.render();
    // then we append it to the DOM
    this.$el.append(view.el);
  }
});

 
// This view controls the form

//This variable is a constructor function that will create a new view (or instance). It is capital to represent the fact that it is a constructor function- it will be generating instances of itself.
var FormView = Backbone.View.extend({

//IMPORTANT NOTE about submit: Submit will only be triggered by a button within a form. If it's a psudo button it must have the type attribute of submit.
//the events function below is a listener that is listening to the 'submit' button in the form. When it is clicked, run the function addACountry
  events: {
    'submit': 'addACountry'
  },

  addACountry: function(event) {
    //this preventDefault strips away the default behavior of the button and replaces it with the behavior below.
    event.preventDefault();
    //now set this variable to the value of the capital in the form and the same for name
    var capital = this.$el.find('input[name="capital"]').val();
    var name = this.$el.find('input[name="name"]').val();

    console.log(capital, name);
    //now create a new country out of those values you grabbed above
    var country = new Country({capital: capital, name: name});
    //saving the new country to the database
    country.save();
    //also add that country to the CounrtyCollection
    countries.add(country);

    // this is a shortcut
    // countries.create({capital: capital, name: name});

    // this clears the form inputs
    this.el.reset();
  }
});

var countries = new CountryCollection();

//now plug in all these new countries to the ul in the dom
var cV = new CountriesView({
  collection: countries, 
  // we pass a live piece of the DOM to this view to control
  el: $('ul')
});

var form = new FormView({
  // we pass a live piece of the DOM to this view to control
  el: $('form'),
  collection: countries
});

countries.fetch();