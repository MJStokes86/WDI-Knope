# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Person.delete_all

1000.times do
  person = Person.new

  person.first_name = Faker::Name.first_name
  person.last_name = Faker::Name.last_name
  person.email = Faker::Internet.email(person.first_name)
  person.company = Faker::Company.name
  person.catchphrase = Faker::Hacker.say_something_smart

  person.save

end
