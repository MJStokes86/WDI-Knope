require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :host => "localhost",
  :username => "mikey",
  :password => "mikey",
  :database => "the_reaping"
  })

  ActiveRecord::Base.logger = Logger.new(STDOUT)
