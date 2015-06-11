require 'sinatra'
use(Rack::Session::Cookie, {
  :key => 'rack.session',
  :path => '/',
  :secret => 'something-only-the-server-knows'
})

password = 'monkey'

get '/login' do
  if params[:password] == password
    # response.set_cookie('logged_in', true)
    session[:logged_in] = true
    'Logged in!'
  else
    'Wrong pass.'
  end
end

get '/logout' do
  # response.delete_cookie('logged_in')
  session[:logged_in] = false
  'Logged out.'
end

get '/secret' do
  # if request.cookies['logged_in']
  if session[:logged_in]
    'This info is super secret. Only authorized persons should be able to see it!!'
  else
    'Woah...stop tryna hack breh.'
  end
end