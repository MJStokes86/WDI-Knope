require './lib/rentals.rb'
require './connection.rb'
require 'pry'

id = ARGV[0].to_i
rental = Rental.find(id)

puts "#{rental.name}, #{rental.car}, #{rental.date}"

binding.pry



