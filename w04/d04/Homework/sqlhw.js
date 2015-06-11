var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./sqldb.db');
// var command = process.argv[2];
// var command2 = process.argv[3];

// db.serialize(function(){
// db.run("create table animals (breed_type varchar, breed_kind varchar, color varchar, age number, name varchar);" )
// db.run("create table barn_houses (barn_ID number, barn_name varchar, capacity number, color varchar);")

// db.parallelize(function(){
// db.run("insert into animals(breed_type, breed_kind, color, age, name) values ('Horse', 'Arabian', 'Brown', 5, 'Zeus');")
// db.run("insert into animals(breed_type, breed_kind, color, age, name) values ('Pig', 'Chester White', 'White', 15, 'Porky');")
// db.run("insert into animals(breed_type, breed_kind, color, age, name) values ('Sheep', 'Ancon', 'Gray', 8, 'Lamb Chop');")
// db.run("insert into animals(breed_type, breed_kind, color, age, name) values ('Chicken', 'Rooster', 'Black', 35, 'Foghorn Leghorn');")
// db.run("insert into animals(breed_type, breed_kind, color, age, name) values ('Goat', 'Kinder', 'Black', 19, 'Gabby');")
// db.run("insert into animals(breed_type, breed_kind, color, age, name) values ('Cow', 'Milk', 'White', 3, 'Mary Moo');")
// db.run("insert into barn_houses(barn_ID, barn_name, capacity, color) values (1, 'The Horse Pad', 15, 'red');")
// db.run("insert into barn_houses(barn_ID, barn_name, capacity, color) values (2, 'The Pig Pen', 35, 'pink');")
// db.run("insert into barn_houses(barn_ID, barn_name, capacity, color) values (3, 'The Sheep Shack', 46, 'white');")
// db.run("insert into barn_houses(barn_ID, barn_name, capacity, color) values (4, 'The Chicken Coop', 69, 'brown');")
// db.run("insert into barn_houses(barn_ID, barn_name, capacity, color) values (5, 'The Goat Club', 29, 'yellow');")
// db.run("insert into barn_houses(barn_ID, barn_name, capacity, color) values (6, 'The Cow House', 19, 'gray');")


// })
// })



var command = process.argv[2];
var breed_type = process.argv[3];
var breed_kind = process.argv[4];
var color = process.argv[5];
var age = process.argv[6];
var name = process.argv[7];

if (command = 'add') {
	db.run("insert into animals(breed_type, breed_kind, color, age, name) values  " + ( + breed_type +  '  ' + ',' + breed_kind + '  ' + ',' + color + '  ' + ',' + age + ',' + name + '  ' + ");")
}

if (command === 'list'){

db.all('select * from animals;', {}, function(err, data){
	data.forEach(function(el){
		console.log(el.breed_type, el.breed_kind, el.color, el.age, el.name);
		
	});
});
}

if(command === 'search' && 'breed' === process.argv[3]){

db.all('select * from animals; ', {}, function(err, data) {
		data.forEach(function(el){
			console.log(el.breed_type)
		})

})
} if (command === 'search' && 'age' === process.argv[3]){

db.all('select * from animals; ', {}, function(err, data){
	data.forEach(function(el){
		console.log(el.age)
	})
})
} if (command === 'delete') {
	db.all("delete from animals where name = 'horse'; ", {}, function(err, data){
		console.log('Animal Deleted!')
	})
};
