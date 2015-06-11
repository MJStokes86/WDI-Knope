class Unicorn
	def initialize(name,color='white', say = '**;* Wonderful! **;*')
		@name = name
		@color = color
		@say = say
		
	end

	def name
		return @name
		end

	def color
		return @color
		
	end

	def white?
		return color() == 'white'
	end

	def say(something)
	return @say
	end


end
