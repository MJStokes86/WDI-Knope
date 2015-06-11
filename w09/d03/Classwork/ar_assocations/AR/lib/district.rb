require 'active_record'

class District < ActiveRecord::Base
  has_many :tributes
end
