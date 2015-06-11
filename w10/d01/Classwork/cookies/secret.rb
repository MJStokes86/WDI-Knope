require 'sinatra'

password = 'mjs0135'

get '/login' do
	if params[:passoword] == password
		response.set_cookie('logged_in', true)
		'Logged In'
	else
		'Wrong pass'
	end
		
	end
get '/secret' do
	if request.cookies['logged_in']
  'This info is super secret. Only authorized persons should be able to see it!!'
else 
	'Stop trying to break in!!!'
end
end
