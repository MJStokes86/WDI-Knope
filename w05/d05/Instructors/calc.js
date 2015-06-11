// function add(num1, num2) {
//   return num1 + num2;
// };

function subtract(num1, num2) {
  return num1 - num2;
};

module.exports.message = "Hey there";

module.exports.add = add;
module.exports.subtract = subtract;

// module.exports.add = function(num1, num2) {
//   return num1 + num2;
// };

var calculator = {};
module.exports = calculator;


calculator.add = function(num1, num2) {
  return num1 + num2;
};


module.exports = calculator;

module.exports = function(){
  console.log(" Give me an express server")
};
