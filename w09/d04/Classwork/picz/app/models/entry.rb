class Entry < ActiveRecord::Base
  validates(:date_taken, :photo_url, :author, {presence: true})
end
