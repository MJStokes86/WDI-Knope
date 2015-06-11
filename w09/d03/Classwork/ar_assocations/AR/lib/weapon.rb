require  'active_record'

class Weapon < ActiveRecord::Base
  has_many :kills
  has_many :tributes, through: :kills 
end