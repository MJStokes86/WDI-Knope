var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./friends.db');

db.run("CREATE TABLE characters (id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar, occupation varchar, divorced BOOLEAN NOT NULL CHECK (divorced IN (0,1)));")