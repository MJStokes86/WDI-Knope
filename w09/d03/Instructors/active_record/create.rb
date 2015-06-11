require './connection.rb'
require './models/tribute.rb'
require 'pry'

name = ARGV[0]
age = ARGV[1]

tribute = Tribute.create({name: name, age: age})

puts "Tribute #{tribute.name} is #{tribute.age} years old."