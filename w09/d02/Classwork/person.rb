require "pry"

class Person
 # This is a class method - ie only available on the class
 def self.all_of_humankind
   return "WEEEEE Something Walt Whitman would say"
 end

 def initialize(name, location)
   @the_name_of_the_human = name
   @the_name_of_the_location = location
 end

 def change(name, location)
   @the_name_of_the_human = name
   @the_name_of_the_location = location


 end

 def speak
   return "I'm ALIVE! My name is #{@the_name_of_the_human} and I live in #{@the_name_of_the_location}"
 end

 def whats_my_name
   return @the_name_of_the_human
 end

 

end


#Person.all_of_humankind

# p = Person.new 
#p.speak
binding.pry