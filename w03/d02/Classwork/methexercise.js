	
	
	var wuTangDiscography = [

  {
    title:"Enter the Wu Tang",
    release_date:"11-09-93",
    singles:["Protect ya neck", "Method Man", "C.R.E.A.M.", "Can it be all so simple"],
    label:"Loud",
    length:"61:00",
  },
  {
    title:"Wu-Tang Forever",
    release_date:"06-03-97",
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
    release_date:"12-21-01",
    singles:["Uzi", "Rules"],
    label:"Columbia",
    length:"54:00",
  },
  {
    title:"Eight Diagrams",
    release_date:"12-11-07",
    singles:["The Heart Gently Weeps"],
    label:"Universal Motown",
    length:"71:00",
  },

]



function singleSampler(album) {
	for (var i =  0; i < album.length; i++){
		console.log(album.singles[i])
	}


}



function singleCounter (single) {
	for (i = 0; i < single.length; i++){
		console.log(single.singles[i])
		i++;
	}
}
singleCounter(wuTangDiscography);

function wuMarathon(albumArray){
	var totalTime = 0;
	albumArray.forEach(function(album){
		console.log(album.title)

	})
	}

wuMarathon(wuTangDiscography);

var array = [1,2,3];

array.forEach(printNumber(number))

function printNumber(number){
	console.log(number)
}