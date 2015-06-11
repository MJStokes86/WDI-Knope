console.log("countries linked")

///C - save
///R  -fetch
///U  -?
///D  - destroy


var Country = Backbone.Model.extend({
	urlRoot: "/countries"
})