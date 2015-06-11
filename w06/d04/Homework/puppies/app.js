var express = require('express'); //requires the express module. Creates our server
var sqlite3 = require('sqlite3') // requires the sqlite module. We need to read and write to the database
var fs = require('fs'); // allows us to read and write and write to external files
var Mustache = require('mustache'); // allows us to get server
var morgan = require('morgan'); //allows us to get server prompts in the terminal
var bodyParser = require('body-parser');//allows us to parse information that comes in the body of a request so we can database it
var methodOverride = require('method-override');//hack to allow us to do DELETE and PUTS in out forms in html because there is only a get

var db = new sqlite3.Database('./puppies.db');//assigns a variable called db to our database
var app = express();//creates the server

app.use(morgan('dev'));//app.use allows us to use the module call in the top section. morgan allows for server status codes
app.use(bodyParser.urlencoded({ extended: false}));//enables the body parser for all code in the file
app.use(methodOverride('_method'));//enables the form method replace

app.get('/', function(req, res){//tells the server when you go to the root '/' do this
  res.send(fs.readFileSync('./views/index.html', 'utf8'));//response.sends the browser the index/home page
});

app.post('/puppies/create', function(req, res){//for the resource puppies/create run this code
  console.log(req.body);//this console logs the value of the form
  db.run("INSERT INTO puppies (breed, color) VALUES ('" + req.body.breed + "','" + req.body.color + "')");
  //res.send('puppy created');//we use body because the db is being written to
  res.redirect("/puppies")//redirects us to a list of puppies to confirm that we've successfully added our puppy
});

app.get('/puppies', function(req, res) {//safe action which reads the contents of the puppies html file
  var template = fs.readFileSync('./views/puppies.html', 'utf8');//reads the html file that has mustache templating enabled

  db.all('SELECT * FROM puppies;', function(err, puppies) {//goes through the table data in the db and returns the info to be templated in the mustache below
    var html = Mustache.render(template, {allDemPuppies: puppies});//template is the puppies.html, allDemPuppies.html file.
    res.send(html);//this sends our mustached html file as the resulting page
  })
});
//this section takes you to the page where you can delete or update
app.get('/puppies/:id', function(req, res){
  var id = req.params.id;
  db.all("SELECT * FROM puppies WHERE id = " + id + ";", {}, function(err, puppy){
    fs.readFile('./views/show.html', 'utf8', function(err, html){//we use a readfile to stop and wait for the all the data to load before preceeding
      console.log(puppy);
      // Sending just the single puppy object. No need to iterate this way. Sweet.
      var renderedHTML = Mustache.render(html, puppy);//jumps into the first index of the array
      res.send(renderedHTML);
    });
  });
});

//deleteing a specific puppy
app.delete('/puppies/:id', function(req, res){
  var id = req.params.id;
  db.run("DELETE FROM puppies WHERE id = " + id + ";");
  res.redirect("/puppies");
});
//this section updates the info to a specific puppy by ID
app.put('/puppies/:id', function(req, res){
  var id = req.params.id;
  var puppyInfo = req.body;
  db.run("UPDATE puppies SET breed =  '" + puppyInfo.breed + "', color = '" + puppyInfo.color + "' WHERE id = " + id + ";");
  res.redirect('/puppies');
});

app.listen(3000, function() {
  console.log("LISTENING!");
});