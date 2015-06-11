class CoffeeMug 
  attr_accessor :color
  attr_reader :level

  def initialize(color) 
    @color = color
    @level = 0
  end

  def drink
    if @level > 0
      @level -= 1
    else
      "Cannot go lower then 0"
    end     
  end 

  def refill
    @level = 10
  end

end