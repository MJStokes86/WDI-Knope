require './lib/tribute.rb'
require './lib/connection.rb'

name = ARGV[0]
district = ARGV[1].to_i
age = ARGV[2].to_i

Tribute.create({name: name, age: age, district_id: district})
