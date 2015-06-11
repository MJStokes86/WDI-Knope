class Vampire
  def initialize(name, pet = 'bat')
    @name = name
    @pet = pet
    @thirsty = true
  end

  def name
    return @name
  end

  def pet
    return @pet
  end

  def thirsty?
    return @thirsty
  end

  def drink
    @thirsty = false
  end
end