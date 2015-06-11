require "sinatra"

get '/' do
  random = rand(20)
  # response.headers["Set-Cookie"] = "number=#{random}; path=/;"
  response.set_cookie('number', random)
  response.set_cookie('cheese', 'gruyere')

  txt = "<p>Hello! Here are the cookies you sent me: #{request.cookies}</p>"
  txt += "<p>Also, I just set a cookie called 'number' to #{random}</p>"

  txt += "<p>Hello! this is my first cookie!: #{request.cookies}</p>"
  txt += "<p>Hello! this is my second cookie, to #{random}</p>"
end