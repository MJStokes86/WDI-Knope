var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./nodesql.db');


db.run("INSERT INTO kittens (name, color) VALUES ('tom', 'orange');")
db.run("INSERT INTO kittens (name, color) VALUES ('jerry', 'black');")
db.run("INSERT INTO kittens (name, color) VALUES ('dave', 'red');")
db.run("INSERT INTO kittens (name, color) VALUES ('george', 'white');")
