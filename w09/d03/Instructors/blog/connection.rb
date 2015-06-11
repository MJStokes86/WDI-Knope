require 'pry'
require 'pg'

conn = PG.connect(dbname: 'experiment')


sql = "SELECT * FROM users;"

result = conn.exec(sql)


entry = "INSERT INTO users (handle, email) VALUES ('PHILLLLLLLLL', 'phil@witkin.co')"

conn.exec(entry)

binding.pry