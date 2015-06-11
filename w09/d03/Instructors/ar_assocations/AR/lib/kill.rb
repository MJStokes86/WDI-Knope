require 'active_record'

class Kill < ActiveRecord::Base
  belongs_to :tribute
  belongs_to :weapon
end