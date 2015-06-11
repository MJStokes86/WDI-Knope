var input = process.argv[2];

var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"]
// var weekend = []

// var daysOfTheWeek = {
//   weekdays: [],
//   weekends: []
// }

if (weekdays.indexOf(input) != -1) {
  console.log("weekday")
} else {
  console.log("weekend")
}