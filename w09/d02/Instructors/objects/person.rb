class Person
  # This is a class method - ie only available on the class
  def self.all_of_humankind
    return "WEEEEE Something Walt Whitman would say"
  end

  def initialize(name, location)
    @the_name_of_the_human = name
    @location_of_da_person = location
  end 

  def change_name(name)
    @the_name_of_the_human = name
  end

  def name=(name)
    @the_name_of_the_human = name
  end

  def change_location(location)
    @location_of_da_person = location
  end

  def speak
    return "I'm ALIVE! My name is #{@the_name_of_the_human}. I live in #{@location_of_da_person}"
  end

  def where_you_at
    return "I'm at: #{@location_of_da_person}"
  end

  def whats_my_name
    return @the_name_of_the_human
  end

  def from_nyc?
    return @location_of_da_person == "NYC"
  end
end

# Person.all_of_humankind # this works
# Person.speak # this does NOT work

# p = Person.new
# p.speak # this works
# p.all_of_humankind # this does not work