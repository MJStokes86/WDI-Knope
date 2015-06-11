require 'sinatra'
require 'JSON'


get '/' do
 "Hello World from knope-TBC!"
 data = File.read("./data.json")
 parsed = JSON.parse(data)
 template = File.read("./public/index.html")
 html = Mustache.render(template, {posts: parsed})
end

