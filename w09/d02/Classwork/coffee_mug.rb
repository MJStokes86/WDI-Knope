require "pry"

class CoffeeMug
	def initialize(color)
		@color = color
		@level = 0
	end
	def get_color(color)
		return @color
	end
	def set_color(color)
		@color = color
	end
	def get_level(level)
		return @level
	end
	def drink
	if @level > 0
	@level -= 1		
	end
end
	def refill
		@level = 10
	end


end

binding.pry

# class CoffeeMug
# 	attr_accessor :color ##getter and setters
# 	attr_reader :level 	##getters

# 	def initialize(color)
# 		@color = color
# 		@level = 0
# 	end

# 	def drink
# 		if @level > 0
# 			@level -= 1
# 	end
# 	def refill
# 		@level = 10
# 	end


# end

