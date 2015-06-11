require 'sinatra'
require 'mustache'
require 'pg'
require 'pry'

conn = PG.connect(dbname: 'blog')

get('/') do 
    
    File.read('./public/index.html')
    sql = "SELECT * FROM POSTS;"
    results = conn.exec(sql).entries
    rendered = Mustache.render(template, {posts: result})
end

get '/posts/new' do 
	File.read('./public/new.html')
end

post '/posts' do
	binding.pry
	sql = "INSERT INTO posts (title, contents) VAlUES (#{params["title"]})"

	conn.exec(sql)
	
	redirect ('/')

end




#what routes are we doing to need?