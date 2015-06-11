require 'active_record'

ActiveRecord::Base.establish_connection({
	:adapter => "postgresql",
	:host => "localhost",
	:username => "mikey",
	:password => "mikey",
	:database => "avis_rentals"
	})

ActiveRecord::Base.logger = Logger.new(STDOUT)