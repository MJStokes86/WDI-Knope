require './connection.rb'
require './models/tribute.rb'

id = ARGV[0]

# tribute = Tribute.find(id)

Tribute.destroy(id)

# tribute.destroy