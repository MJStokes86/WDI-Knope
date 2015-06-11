var wuTangDiscography = [

  {
    title:"Enter the Wu Tang",
    release_date:"11-09-1993",
    singles:["Protect ya neck", "Method Man", "C.R.E.A.M.", "Can it be all so simple"],
    label:"Loud",
    length:"61:00",
  },
  {
    title:"Wu-Tang Forever",
    release_date:"06-03-1997",
    singles:["Triumph", "Itz yours", "reunited"],
    label:"RCA",
    length:"45:00",
  },
  {
    title:"The W",
    release_date:"11-21-2000",
    singles:["Protect Ya Neck", "Gravel Pit", "Careful"],
    label:"Loud",
    length:"59:00",
  },
  {
    title:"Iron Flag",
    release_date:"12-21-2001",
    singles:["Uzi", "Rules"],
    label:"Columbia",
    length:"54:00",
  },
  {
    title:"Eight Diagrams",
    release_date:"12-11-2007",
    singles:["The Heart Gently Weeps"],
    label:"Universal Motown",
    length:"71:00",
  },

]

//singleSampler
function singleSampler(albumObject){
  albumObject.singles.forEach(function(single){
    console.log(single);
  })
}


//singleCounter
function singleCounter(albumObject){
  return albumObject.singles.length;
}


//albumLength
function albumLength(albumObject){
  return albumObject.length;
  //you could also parse the string as an integer
}


//wuMarathon
function wuMarathon(arrayOfAlbums){
  //below, we declare a counter we can add to each time we loop through an album
  var totalTime = 0;
  arrayOfAlbums.forEach(function(individualAlbumObject){
    totalTime = totalTime + parseInt(individualAlbumObject.length);
  })
  //log the time to the console 
  console.log(totalTime);
  //explicitly return the total time from the function
  return totalTime;
}



//classicFinder
function classicFinder(arrayOfAlbums){
  //create an array to push albums into
  var classicAlbums = [];
  arrayOfAlbums.forEach(function(individualAlbumObject){
    //split the release date on the hyphen to grab the year
    //this function assumes the release date of the album is written with 4 digits
    var splitDate = individualAlbumObject.release_date.split("-")
    if(parseInt(splitDate[2]) < 2000){
      classicAlbums.push(individualAlbumObject);
    }
  })
  return classicAlbums;
}


//playTheHits
function playTheHits(arrayOfAlbums){
  var arrayOfSingles = [];
  arrayOfAlbums.forEach(function(individualAlbumObject){
    individualAlbumObject.singles.forEach(function(single){
      arrayOfSingles.push(single);
    })
  })
  return arrayOfSingles;
}


//singleGram
function singleGram(arrayOfAlbums){
  //declare an empty object that we can assign key values to dynamically
  var singleCounterObject = {};
  arrayOfAlbums.forEach(function(individualAlbumObject){
    //because I dynamically assigning a key value pair here, I use bracket notation for the object, not dots.
    singleCounterObject[individualAlbumObject.title] = individualAlbumObject.singles.length;
  })
  return singleCounterObject;
}
