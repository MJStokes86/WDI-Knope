
//Create an entry constructor function. 
var Entry = function(author,title,content){
  this.author = author,
  this.title = title,
  this.content = content
}


//Create a diary constructor function.
var Diary = function(){
  //we want the diary to hold entries, so we model that data as an array
  this.entries = [],
  //below, we define behavior to push an entry object into the entries property in our object
  this.addEntry = function(entry){
    this.entries.push(entry);
  },
  //this function prints out html for each entry. notice how we can access the entries property of the object, and then simply forEach through it
  this.printHtml = function(){
    this.entries.forEach(function(entry){
      console.log("<h1>" + entry.title + "</h1>" + "<h2>" + entry.author + "</h2>" + "<p>" + entry.content + "</p>")
    })
  },
  //bonus
  this.capitalize = function(){
    this.entries.forEach(function(entry){
      var split = entry.title.split(" ");
      var fixed = [];
      split.forEach(function(word){
        word = word.replace(word[0], word[0].toUpperCase())
        fixed.push(word);
      })
      entry.title = fixed.join(" ");
    })
  }
}


//now, try and test it

//first, we create a diary
var myDiary = new Diary();

//now, let's make an entry
var newEntry = new Entry("andy", "my day today", "my day today was SOOOO great OMG ........");

//now we can use the addEntry function on our diary object and pass it the entry object we just created

myDiary.addEntry(newEntry);

//now let's check the entries properties of the diary we made. we should see the new entry within

myDiary.entries

//sweet! Let's make another entry and add it. We'll create a new entry object from our Entry constuctor functon

var anotherEntry = new Entry("neel", "my lovely weekend", "I spent the weekend in a Vicodin-induced haze and was arrested for...")

//let's add that entry to our diary again, just like before

myDiary.addEntry(anotherEntry)

//sweet! Chek the entries property of the diary object. You should see two objects there now

myDiary.entries



/////Let me know if you're still confused! 



