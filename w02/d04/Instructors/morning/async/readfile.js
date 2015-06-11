var fs = require('fs');

fs.readFile('./hipster.txt', 'utf8', function(err, data){
  console.log(err);
  console.log(data);
});

console.log('Bottom of file.');