console.log('Success!')

var President = Backbone.Model.extend({})

	







var PresidentView = Backbone.View.extend({
	changedModel: function(){
		console.log("My model has changed")
		this.$el.append("<h2>" + this.model.get('name') + "</h2>")
		this.listenTo(this.model, 'change', this.changedModel);
		

});
	



	

var first = new President({name: "George Washington", age: "57", year: "1789"});
var fortySecond = new President({name: "Bill Clinton", age: "47", year: "1993"});
var fortyThird = new President({name: "George W. Bush", age: "47", year: "2001"});
var fortyFourth = new President({name: "Barack Obama", age: "48", year: "2009"});

	 firstView = new PresidentView({model: first});
	 fortySecondView = new PresidentView({model: fortySecond});
	 fortyThirdView = new PresidentView({model: fortyThird});
	 fortyFourthView = new PresidentView({model: fortyFourth});


	 firstView.changedModel()
	 fortySecondView.changedModel()
	 fortyThirdView.changedModel()
	 fortyFourthView.changedModel()

$('body').append(firstView.$el)
$('body').append(fortySecondView.$el)
$('body').append(fortyThirdView.$el)
$('body').append(fortyFourthView.$el)

