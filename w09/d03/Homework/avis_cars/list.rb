require 'active_record'
require './lib/connection.rb'
require './lib/cars.rb'
require './lib/customer.rb'
require './lib/rentals.rb'
require 'pg'

conn = PG.connect(dbname: 'avis_rentals')


if ARGV[0] == 'cars'
	puts conn.exec("SELECT * FROM cars;")
elsif ARGV[0] == 'customers'
	puts conn.exec("SELECT * FROM customer;")
elsif ARGV[0] == 'rentals'
	puts conn.exec("SELECT * FROM rentals;")
end