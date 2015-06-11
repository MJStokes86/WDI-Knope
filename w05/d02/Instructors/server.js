require express
require  bodyparser
require sqlite3


set up app and server, listen on a port {}



//write RESTful routes

app. get "/" => welcome, and help commands

app.get "/simpsons" => lists out characters
    select all simpsons, turn to json, send to client

app.get "/simpsons/:id" => list a single character 
    select all where id = id, wrap as json, send to client
app.delete "/simpsons/:id" => delete a simpson
    delete from simpsons where id is id, response with "deleted"

app.post "/simpsons" => make  a new simpson
    insert into simpsons (name, age hair) values (req.body to get params)
app.put "/simpsons/:id" update a simpson
    update simpsons set thing to thing from params, send that finished object back as json