require './lib/connection.rb'
require './lib/cars.rb'
require './lib/customer.rb'
require './lib/rentals.rb'

Cars.delete_all
Customer.delete_all
Rentals.delete_all

c1 = Cars.create({make: 'Toyota', model: 'Avalon', color: 'white', type: 'Compact'})
c2 = Cars.create({make: 'Cadillac', model: 'Escalade', color: 'black', type: 'SUV'})
c3 = Cars.create({make: 'Ford', model: 'Explorer', color: 'gray', type: 'Truck'})


cc1 = Customer.create({name: 'Mike', phone: '336-693-5580', email: 'stokes5@me.com', dl: "NC-555555"})
cc2 = Customer.create({name: 'Neel', phone: '212-555-5565', email: 'neel@aol.com', dl:'NY-456571'})
cc3 = Customer.create({name: 'Fritz', phone: '575-971-8287', email: 'fitzy@ga.com', dl:'CHI-571879'})


r1 = Rentals.create({name:'Mike', car: 'Cadillac Escalade', car_id: c2.id, customer_id: cc1.id, date: '4/5/15'})
r2 = Rentals.create({name:'Neel' , car: 'Toyota Avalon', car_id: c1.id, customer_id: cc2.id, date: '4/30/15'})
r3 = Rentals.create({name:'Fritz' , car: 'Ford Explorer', car_id: c3.id, customer_id: cc3.id, date: '5/18/15'})


