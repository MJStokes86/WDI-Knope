require './lib/tribute.rb'
require './lib/connection.rb'

id = ARGV[0].to_i

tribute = Tribute.find(id)

tribute.destroy