var request = require('request');

request.get('https://data.cityofnewyork.us/resource/xx67-kt59.json', function(error, response, body){
  if(!error && response.statusCode == "200"){
   var parsed = JSON.parse(body);
    switch (process.argv[2]){

      case "borough":
      boro(parsed)
        var boroughArray = [];
        var chosenBorough = process.argv[3].toUpperCase();
        parsed.forEach(function(e){
          if (e.boro === chosenBorough && boroughArray.indexOf(e.dba) === -1){
            boroughArray.push(e.dba);
          } 
        })
        console.log(boroughArray.join("\n"));
      break;

      case "rating":
        var ratingArray = [];
        var chosenRating = process.argv[3].toUpperCase();
        parsed.forEach(function(e){
          if (e.grade === chosenRating && ratingArray.indexOf(e.dba) === -1){
            ratingArray.push(e.dba);
          }
        })
        console.log(ratingArray.join("\n"));
        break;

        case "cuisine":
        var cuisineArray = [];
        var chosenCuisine = process.argv[3];
        parsed.forEach(function(e){
          if (e.cuisine_description === chosenCuisine && cuisineArray.indexOf(e.dba) === -1){
            cuisineArray.push(e.dba);
          } 
        })
        console.log(cuisineArray.join("\n"));
        break;

        case "restaurant":
          parsed.forEach(function(e){
            if (process.argv[3].toUpperCase() === e.dba){
              console.log(e);
            }
            
          })
          break;
    }
  }
})


function boro(data){
  //logic
}