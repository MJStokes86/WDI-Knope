var input = document.querySelector('input[name="sentence"]');
var button = document.querySelector('button');
var colorSection = document.querySelector('div.colors');

var colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'pink',
  'purple'
];

button.addEventListener('click', function() {
  // deal with input element
  var sentence = input.value;
  input.value = '';
  input.focus();

  // kick off rainbowification process
  rainbowify(sentence);
});

function rainbowify(txt) {
  colorSection.innerHTML = '';

  for (var i = 0; i < colors.length; i++) {
    var h1 = document.createElement('h1');
    h1.innerText = txt;
    h1.style.color = colors[i];

    colorSection.appendChild(h1);
  }
}

// BONUS
colorSection.addEventListener('click', function(e) {
  var h1 = e.target;

  var i = 0;

  setInterval(function() {
    // remember Liz - we want to count up to 6 and then start at 0
    i = (i + 1) % colors.length;
    h1.style.color = colors[i]
    // number of ms between invocations
  }, 1000)
});

