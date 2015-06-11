var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./parks.db');


db.run("INSERT INTO characters (name, age, position) VALUES ('Leslie Knope', 40, 'asst. director');");
db.run("INSERT INTO characters (name, age, position) VALUES ('Ron Swanson', 45, 'director');");
db.run("INSERT INTO characters (name, age, position) VALUES ('April Ludgate', 30, 'intern');");
db.run("INSERT INTO characters (name, age, position) VALUES ('Tom Haverford', 40, 'admin');");
