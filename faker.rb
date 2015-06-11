require 'faker'

50.times do |variable|
	puts Faker::Name.name
	puts Faker::Internet.email
	puts Faker::Address.country
	puts Faker::Company.name 
	
end