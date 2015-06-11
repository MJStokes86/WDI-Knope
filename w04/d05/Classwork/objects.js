var sandwich = {
	type: 'hero',
	meat: 'turkey',
	bread: 'wheat',
	cost: 4.50,
	healthy: true
	eating: function() {
		return "ummmm delicious!"
	}
}

var transit = {
	type: 'subway',
	line: 4,
	cost: 116,
	minutes: 45,
	onSchedule: false
	run: function() {
		return "Slow!"
	}
}

function Cat(){
	this.name = 'fluffy';
	this.age = 20,
	this.hairballs = true,
	this.meow = function(){
		console.log('meeeow')
	}
}

function Info() {
	this.name = 'Michael',
	this.age = 29,
	this.gender = 'male',
	this.language = function(){
		console.log('English')
	}
	}

	function Human(){
		this.gender = 'male',
		this.name = 'Peter',
		this.dob = 'Feb 28',
		this.height = '5,feet 10',
		this.age = 28,
		this.birthday = function(){
			this.age = this.age + 1
		}
	}


function Human (gender, name,height,age){
	this.gender = gender,
	this.name = name, 
	this.height = height,
	this.age = age,
	this.birthday = function(){
		this.age = this.age + 1
	}
	this.friends = function(name){
		this.friends.push(name)
	}
}

var xavier = new Human('male', 'xavier', 'metric', 33)
var mike = new Human('male', 'mike', 'five five', 29)

