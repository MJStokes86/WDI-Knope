require './lib/tribute.rb'
require './lib/connection.rb'
require 'pry'

id = ARGV[0].to_i
new_name = ARGV[1]
new_district = ARGV[2].to_i

tribute = Tribute.find(id)
binding.pry

tribute.name = new_name

tribute.district = new_district

tribute.save