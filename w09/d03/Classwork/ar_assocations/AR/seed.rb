require './lib/connection.rb'
require './lib/tribute.rb'
require './lib/district.rb'
require './lib/weapon.rb'
require './lib/kill.rb'

District.delete_all
Tribute.delete_all
Weapon.delete_all
Kill.delete_all

d1 = District.create({name: 12})
d2 = District.create({name: 4})
d3 = District.create({name: 9})

t1 = Tribute.create({name: "Neel", age: 23, district_id: d1.id})
t2 = Tribute.create({name: "Fritz", age: 21, district_id: d2.id})
t3 = Tribute.create({name: "Jeff", age: 16, district_id: d3.id})

w1 = Weapon.create({name: "Katana of Wrath", power: 7})
w2 = Weapon.create({name: "Wolverine Claws", power: 5})
w3 = Weapon.create({name: "Phil Lamplugh's Body", power: 10})

k1 = Kill.create({tribute_id: t1.id, weapon_id: w2.id})
k2 = Kill.create({tribute_id: t2.id, weapon_id: w3.id})
k3 = Kill.create({tribute_id: t3.id, weapon_id: w1.id})
k3 = Kill.create({tribute_id: t1.id, weapon_id: w3.id})
k3 = Kill.create({tribute_id: t2.id, weapon_id: w1.id})
k3 = Kill.create({tribute_id: t3.id, weapon_id: w2.id})