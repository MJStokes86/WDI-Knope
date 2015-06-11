require './connection.rb'
require './models/tribute.rb'

id = ARGV[0].to_i
new_name = ARGV[1]
new_age = ARGV[2].to_i


tribute = Tribute.find(id)

tribute.name = new_name
tribute.age = new_age

tribute.save
