require "pry"

class Computer
	def initialize(company, model, color)
		@company = company
		@model = model
		@color = color
	end

	def get_company
		return @company
	end
	def get_model
		return @model
	end
	def get_color
		return @color
	end
	def set_company(company)
		@company = company
	end
	def set_model(model)
		@model = model
	end
	def set_color(color)
		@color = color
	end
	def info
		return "#{@company}, #{@model}, #{@color}"
	end
end 

binding.pry