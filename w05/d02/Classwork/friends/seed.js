var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./friends.db');

db.run("INSERT INTO characters (name, occupation, divorced) VALUES ('Ross G.', 'Paleontologist', 1);");
db.run("INSERT INTO characters (name, occupation, divorced) VALUES ('Rachel G.', 'Waitress', 1);");
db.run("INSERT INTO characters (name, occupation, divorced) VALUES ('Monica G.', 'Chef', 0);");
db.run("INSERT INTO characters (name, occupation, divorced) VALUES ('Chandler B.', 'IT Procurement Manager', 0);");
db.run("INSERT INTO characters (name, occupation, divorced) VALUES ('Joey T.', 'Actor', 0);");
db.run("INSERT INTO characters (name, occupation, divorced) VALUES ('Phoebe B.', 'Masseuse', 1);");