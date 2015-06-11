class Elephant < ActiveRecord::Base
	validates(:name, :age, :has_tusks, inclusion: {in: [true, false]})
end