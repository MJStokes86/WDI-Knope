require 'active_record'

class Cars < ActiveRecord::Base
	belongs_to :rentals
	has_many :customers
end

