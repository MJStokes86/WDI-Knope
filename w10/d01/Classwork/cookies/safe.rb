require 'sinatra'

use(Rack::Session::Cookie, {
  :key => 'rack.session',
  :path => '/',
  :secret => 'something-only-the-server-knows'
})

cheeses = ['cheddar', 'swiss', 'pepperjack']

get '/' do

  random = rand(20)

  txt = "<h1>The number last time was #{session[:number]}</h1>"
  txt += "<h3>The cheese last time was #{session[:cheese]}</h3>"
  
  session[:number] = random
  session[:cheese] = cheeses.sample()


  
  
  
  txt = "<p>Hello! Here are the cookies you sent me: #{request.cookies}</p>"
  txt += "<p> And, the session cookie breaks down to this: #{session.inspect}</p>"
  txt += "<p>Also, I just changed the session 'number' to #{random}</p>"
end