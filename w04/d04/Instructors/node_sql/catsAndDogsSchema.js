var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./nodesql.db');

db.run("CREATE TABLE kittens (name varchar, color varchar);");
db.run("CREATE TABLE dogs (name varchar, species varchar);");