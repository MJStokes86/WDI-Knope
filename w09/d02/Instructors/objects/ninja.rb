class NinjaTurtle
  def initialize(name, color, weapon)
    @name = name
    @color = color
    @weapon = weapon
  end

  attr_reader(:name)
  attr_reader(:color)
  attr_reader(:weapon)

  def info
    # all method calls are invoked on `self`, ie the instance, by default
    return "My name is #{self.name()} and I have a #{color()} bandana and wield a #{weapon()}"
  end
end

leo = NinjaTurtle.new('Leonardo', 'blue', 'ninjato')
raphy = NinjaTurtle.new('Raphael', 'red', 'sai')
mike = NinjaTurtle.new('Michelangelo', 'orange', 'nunchucks')
don = NinjaTurtle.new('Donatello', 'purple', 'bo')

turtles = [leo, raphy, mike, don]

turtles.each do |turtlee|
  puts(turtlee.info())
end