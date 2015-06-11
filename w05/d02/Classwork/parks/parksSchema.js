var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./parks.db');

db.run("CREATE TABLE characters (name varchar, age number, position varchar);");
