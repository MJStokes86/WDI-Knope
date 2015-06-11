require './connection.rb'
require './models/tribute.rb'
require 'pry'

name = ARGV[0]
age = ARGV[1]




Tribute.create({name: name, age: age})

puts "Tribute #{tribut.name} is #{tribut.age} years old"