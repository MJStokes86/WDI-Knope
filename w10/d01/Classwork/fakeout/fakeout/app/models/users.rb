class User < ActiveRecord::Base

	def gmail?
		if self.email.include?('gmail')
			return true
		else
			return false
	end
end
