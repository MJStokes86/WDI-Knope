console.log("linked");

var Person = Backbone.Model.extend({

})

var PersonView = Backbone.View.extend({

    initialize: function(){
        this.listenTo(this.model, 'change', this.render)
    },

    template: $('[data-template="person"]').html(),

    render: function(){
        var template = this.template;
        var data = {name: this.model.get("name"), age: this.model.get("age")};
        var html = Mustache.render(template,data);
        
        this.$el.html(html);
        
        $('[data-section="people"]').append(this.$el)
    }
})

var neel = new Person({name: "neel", age: 29});

var neelView = new PersonView({model: neel});

neelView.render();





$('[data-action="change-name"]').on("click", function(e){
    console.log('clicked')
    neel.set("name", $(".name").val())
})

$('[data-action="change-age"]').on("click", function(e){
    console.log('clicked')
    neel.set("age", $(".age").val())
})

