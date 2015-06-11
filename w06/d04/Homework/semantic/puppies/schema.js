var sqlite3 = require('sqlite3')

var db = new sqlite3.Database('./puppies.db');

db.run('CREATE TABLE puppies (id INTEGER PRIMARY KEY AUTOINCREMENT, breed varchar, color varchar, image varchar);');
