var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./wrldtrvlr.db');



db.serialize(function(){
db.run("create table itinerary (id number asc, city varchar, country varchar, arrival number, departure number);")
db.run("create table journal_entry(title varchar references itinerary(city), arrival_date number references itinerary(arrival), body varchar, journal_id  number references itinerary(id));")


})