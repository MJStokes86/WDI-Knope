require 'pry'
require 'pg'

conn = PG.connect(dbname: 'michael')

sql = "SELECT * FROM USERS;"

result = conn.exec(sql)

entry = "INSERT INTO user (handle, email) VALUES ('MIKE', 'stokes@me.com')"

binding.pry