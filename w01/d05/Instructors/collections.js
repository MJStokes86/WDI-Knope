var jeffsHometown = {
  population: 10000,
  name: "Dobbs Ferry",
  sq_miles: 1,
  state: "NY"
}

// to access properties, just call `.` them
// these are synonyms - do the same thing!!!

jeffsHometown["population"]
jeffsHometown.population

var johnsHometown = {
  population: 20000,
  name: "Setauket",
  sq_miles: 30,
  state: "NY"
}

var hometowns = [jeffsHometown, johnsHometown];

// to access properties on objects inside arrays
// just access the element via index value
// and then call the property

hometowns[1].population

// searching for a hometown with greater than 50000 pop

if (hometowns[0].population > 500000) {
  console.log(hometowns[0].name + " has a big pop.")
} else if (hometowns[1].population > 50000) {
  console.log(hometowns[1].name + " has a big pop.")
} else {
  console.log("A buncha small towns")
}

var counter = 0;

while (counter < hometowns.length) {
  if (hometowns[counter].population > 50000) {
    console.log(hometowns[counter].name + " has a big pop!")
  }

  counter++;
}

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]