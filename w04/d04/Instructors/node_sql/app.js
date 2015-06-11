var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./nodesql.db');

db.all("SELECT * FROM kittens;", {}, function(err, data){
  data.forEach(function(el){
    console.log(el.name);
  });
});
