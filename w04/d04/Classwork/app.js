var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./nodesql.db');
//console.log(db);

// db.serialize(function(){
// db.run('CREATE TABLE a (make varchar, model varchar);')
// console.log('In the first callback')


// db.parallelize(function(){
// db.run("insert into vehicle (make, model) values ('toyota', 'camary');")
// console.log('In the second callback')
// });
// });


db.all("SELECT * FROM cars;", {}, function(err, data){
	data.forEach(function(el){
		console.log(el.make);
	});
});