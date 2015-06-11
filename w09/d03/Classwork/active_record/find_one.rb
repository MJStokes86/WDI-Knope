require './connection.rb'
require './models/tribute.rb'

id = ARGV[0].to_i

tribute = Tribute.find(id)

puts "Tribute"