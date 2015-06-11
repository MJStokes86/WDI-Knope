
//generate a person
//click a button
//makes an api call
//we get back some data
//model data as a human with a constructor
////use a template to render a view
//send view to client

//require mustache, express, fs, request



app.get(
make a form
form has a button that makes a get request to a /people route
    )

app.get(/people,
    make api call
    store it in a human object
    read template, render html
    send to client
    )/

function Human(name, gender, nationality){
    this.name = "andy"//from api,
    this.gender = "male"// from api,
    this.nationality = "usa" //from api,
    this.image = "adsdasf"//from api
    this.render = function(){
        var template = //read in template with fs
        var html = mustache.render(template, {
            name: this.name,
            gender: this.gender,
            nationality: this.nationality,
            image: this.image
        })
        //return html
    }
}
var currentHuman = new Human(//data from api)

var toSendToClient = currentHuman.render()
res.send(toSendToClient)

var Human = function(){

}

