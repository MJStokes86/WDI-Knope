#require files and write your server!

require 'sinatra'
require 'JSON'
require 'mustache'

get('/') do
  data = File.read("./data.json")
  parsed = JSON.parse(data)
  template = File.read("./public/index.html")
  html = Mustache.render(template, {posts: parsed})
end

