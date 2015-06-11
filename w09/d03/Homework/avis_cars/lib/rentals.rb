require 'active_record'

class Rentals < ActiveRecord::Base
	has_many  :cars, through: :customers
end
