var Country = Backbone.Model.extend({});

// example of how underscore.js is 'mixed in' to Backbone.Collection
// countries.findWhere({name: "England"});

// this one...doesn't work because countries.fetch() is async
// countries.each(function(country) {
//   var view = new CountryView({model: country});
//   view.render();
//   $('ul').append(view.el);
// });

// countries.on('add', function(country) {
//   var view = new CountryView({model: country});
//   view.render();
//   $('ul').append(view.el);
// });

// countries.on('sync', function() {
//   countries.each(function(country) {
//     var view = new CountryView({model: country});
//     view.render();
//     $('ul').append(view.el);
//   });
// });

var CountryCollection = Backbone.Collection.extend({
  url: '/countries',
  model: Country
});

var CountryView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  events: {
    "click  button[data-action='delete']": "destroy"
  },

  template: $('[data-template="country"]').text(),

  tagName: 'li',

  destroy: function() {
    this.model.destroy();
  },

  render: function() {
    this.$el.html( Mustache.render(this.template, this.model.attributes) );
  }
});

// this model controls the list of countries

var CountriesView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
  },

  addOne: function(country) {
    // notice here we don't pass an `el` attribute
    // because this view will generate an 'li' from scratch
    var view = new CountryView({model: country});
    view.render();
    // then we append it to the DOM
    this.$el.append(view.el);
  }
})

// This view controls the form

var FormView = Backbone.View.extend({
  events: {
    'submit': 'addACountry'
  },

  addACountry: function(event) {
    event.preventDefault();
    var capital = this.$el.find('input[name="capital"]').val();
    var name = this.$el.find('input[name="name"]').val();

    console.log(capital, name);

    var country = new Country({capital: capital, name: name});
    countries.add(country);
    country.save();

    // this is a shortcut
    // countries.create({capital: capital, name: name});

    // this clears the form inputs
    this.el.reset();
  }
})

var countries = new CountryCollection();

var cV = new CountriesView({
  collection: countries, 
  // we pass a live piece of the DOM to this view to control
  el: $('ul')
});

var form = new FormView({
  // we pass a live piece of the DOM to this view to control
  el: $('form'),
  collection: countries
})

countries.fetch();