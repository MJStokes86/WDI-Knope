class Unicorn
  def initialize(name, color = 'white')
    @name = name
    @color = color
  end

  def name
    return @name
  end

  def color
    return @color
  end

  def white?
    return self.color() == "white"
  end

  def say(something)
    sparkle = "**;*"
    return "#{sparkle} #{something} #{sparkle}"
  end
end