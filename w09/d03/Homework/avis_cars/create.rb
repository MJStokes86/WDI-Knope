require './lib/rentals.rb'
require './lib/connection.rb'

name = ARGV[0]
car = ARGV[1]
carID = ARGV[2].to_i
customerID =ARGV[3].to_i
date = ARCV[4]

Rentals.create({name: name, car: car, car_id: carID, customer_id: customerID, date: date})



