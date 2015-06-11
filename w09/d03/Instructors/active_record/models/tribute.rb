require 'active_record'

class Tribute < ActiveRecord::Base

  def is_legal_drinking_age?
    if self.age < 21
      return false
     else
      return true
    end
  end
end