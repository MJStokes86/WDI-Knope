require './connection.rb'
require './models/tribute.rb'


id = ARGV[0]

tribute = Tribute.delete(id)

Tribute.destroy


