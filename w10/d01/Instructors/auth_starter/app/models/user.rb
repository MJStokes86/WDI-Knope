class User < ActiveRecord::Base
  has_secure_password

  # Dont forget that the Users table has to have password_digest as a field. Check the migration file for reference.
end
