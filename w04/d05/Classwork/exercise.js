
var Diary = function(){
	this.entries = [],
	this.addEntry = function(entry){
		this.entries.push(entry);

	},
	this.printHtml = function(){
		this.entries.forEach(function(entry){
			console.log('<h1>' + entry.title + '</h1>' + '<h2>' + entry.author + '</h2>' + '<p>' + entry.content + '</p>')

		})
	}
	this.capitalize = function(){
		this.entries.forEach(function(entry){
			var split
		})
	}
}




function Entry (author, title, content){
	this.author = author,
	this.title = title,
	this.content = content,
	
}