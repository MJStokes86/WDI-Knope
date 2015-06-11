var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./dogr.db');


// db.serialize(function(){
// 	db.run("create table owners(id number, name varchar);")
// 	db.run("create table dogs (id number, name varchar, breed varchar, owner_id number references owners(id))")

// db.parallelize(function(){
// db.run("insert into owners(id, name) values (1, 'Mike');")
// db.run("insert into owners(id, name)values (2, 'Nesta');)")
// db.run("insert into dogs(id, name, breed, owner_id ) values (1, 'Precious', 'French Poodle', 1);")
// db.run("insert into dogs(id, name, breed, owner_id ) values (2, 'Paris', 'Chihuahua', 2);")


// })
// })

var command = process.argv[2];


switch(command) {
	case 'Mike':
	db.all("select * from dogs where owner_id = 0135", {}, function(err, data){
		data.forEach(function(el){
		console.log(el.name)

		})

	})

	break;

	case 'Nesta':
	db.all("select * from dogs where owner_id = 9357", {}, function(err, data){
		data.forEach(function(el){
			console.log(el.name)
		})
	})

	break;
	default:
	console.log('No such owner exist!')
}




