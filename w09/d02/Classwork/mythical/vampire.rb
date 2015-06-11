class Vampire
def initialize(name = "Dracula", pet = "bat", thirsty = true, drink = 'blood')
@name = name
@pet = pet
@thirsty = thirsty
@drink = drink
end

def name
	return @name
end   

def pet 
	return @pet
end

def thirsty?
	return @thirsty
end

def drink
	if @thirsty = false
	return "I'm not thirsty for #{@drink}!"
end

end


end
