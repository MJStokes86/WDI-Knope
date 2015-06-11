require "pry"

class NinjaTurtle

def initialize(name, color, weapon)
	@name = name
	@color = color
	@weapon = weapon
end

def get_name(name)
	return @name
end
def set_name(name)
	@name = name
end
def get_color(color)
	return @color
end
def set_color(color)
	@color = color
end
def get_weapon(weapon)
	return @weapon
end
def get_weapon(weapon)
	@weapon = weapon

end
def info
	return "My name is #{@name} and I have a #{@color} bandana and wield a #{@weapon}! "

end







mike = NinjaTurtle("Michaelangelo", 'color', 'nunchunks')
leo	 = NinjaTurtle('Leonardo', 'blue', 'ninjato' )
ralph = NinjaTurtle('Raffaello', 'red', 'sai')
don = NinjaTurtle('Donatello', 'purple', 'bo')


turtles = [mike, leo, ralph, don]

turtles.each do |turtle|
	puts(turtle.info)



end
binding.pry





