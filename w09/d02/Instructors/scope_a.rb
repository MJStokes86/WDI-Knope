require "pry"

name = "Neel"


names = ["tim", "jill", "randy", "mark", "brad"]
puts name

names.each do |name|
  puts name
  #check the value of name
  binding.pry
end

puts name
#check the value of name again
binding.pry