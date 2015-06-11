require 'sinatra'
require 'mustache'
require 'pg'
require 'pry'
#establish a connection to our database using the PG gem
conn = PG.connect(dbname: 'blog')

get('/') do 
    #grab the template 
    template = File.read('./public/index.html')
    #create a query to bring back all the posts
    sql = "SELECT * FROM POSTS;"
    #use the exec method on our connection and pass it the sql we wrote. assign that response to a variable
    result = conn.exec(sql)
    #call entries on the result, which yields an array of hashes
    entries = result.entries
    #last, use mustache to render the template and our entries to send to the client
    rendered = Mustache.render(template, {posts: entries})
end


get '/posts/new' do
    #send our form to the client
    File.read("./public/new.html")
end

post '/posts' do
    #params gives us a catchall for any kind of input into our server as a hash
    # we can assign our title and contents from params
    title = params["title"]
    contents = params["contents"]
    # below, we build a sql query and use string interpolation
    sql = "INSERT INTO posts (title, contents) VALUES ('#{title}', '#{contents}');"
    #execute the sql
    conn.exec(sql)
    #redirect our client to the index
    redirect ('/')
end