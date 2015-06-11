class Computer
  def initialize(company, model, color)
    @company = company
    @model = model
    @color = color
  end

  # this is a super shortcut for below
  # attr_accessor :company

  attr_reader(:company)
  # def company
  #   return @company
  # end

  attr_writer(:company)
  # def company=(company)
  #   @company = company
  # end

  def color
    return @color
  end

  def color=(color)
    @color = color
  end

  def model
    return @model.upcase
  end

  def model=(model)
    @model = model
  end

  def info
    "This is a #{self.model()} computer by #{self.company()}. It is #{self.color()}"
  end
end

mac = Computer.new("Apple", "Mac", "Silver")

# this is a super duper shortcut, for illustration
# class Computer
#   def initialize(company, model, color)
#     @company = company
#     @model = model
#     @color = color
#   end

#   attr_accessor(:company, :model, :color)

#   def info
#     "This is a #{self.model()} computer by #{self.company()}. It is #{self.color()}"
#   end
# end