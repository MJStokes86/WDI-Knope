require 'active_record'

class Customer < ActiveRecord::Base
	belongs_to :rentals
	

end