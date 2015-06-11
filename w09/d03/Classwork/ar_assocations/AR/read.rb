require './lib/tribute.rb'
require './lib/connection.rb'
require 'pry'

id = ARGV[0].to_i

tribute = Tribute.find(id)

puts "Tribute #{tribute.name} is from district #{tribute.district}"

# binding.pry