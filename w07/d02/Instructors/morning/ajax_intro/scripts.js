console.log("JS has loaded");

$.ajax({
  url: 'http://data.cityofnewyork.us/resource/sxx4-xhzg.json',
  type: "GET"
}).done(function(data){
  console.log(data);
});