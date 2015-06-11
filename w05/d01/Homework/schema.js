var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./patients.db');



db.serialize(function(){

	
	db.run("CREATE TABLE patients(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar, age number, perscription varchar );")

db.parallelize(function(){

    db.run("INSERT INTO patients(name, age, perscription) VALUES ('Michael', 28, 'dope');") 

}) 
})
