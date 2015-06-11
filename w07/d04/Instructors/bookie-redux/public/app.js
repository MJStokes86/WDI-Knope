console.log("LINKED");

var template = $('script[data-id="template"]').text();

$('.ui.label.blue').on('click', function() {
  $.ajax({
    method: "POST",
    url: "/debts",
    data: JSON.stringify({amount: 0}),
    contentType: 'application/json'
  }).done(function(data) {
    var html = Mustache.render(template, data);

    $('tbody').append(html);
  })
})

$('tbody').on('click', '[data-action="save"]', function(e) {
  var row = $(e.target).parents('tr');
  var id = row.attr('data-id');
Be able to update and delete a restaurant
  var client_name = row.find('[data-attr="client_name"]').text();
  var amount = row.find('[data-attr="amount"]').text();

  var payload = JSON.stringify({client_name: client_name, amount: amount});

  $.ajax({
    method: "PUT",
    url: "/debts/" + id,
    data: payload,
    contentType: 'application/json'
  }).done(function() {
    alert('Saved!');
  })
})

$('tbody').on('click', '[data-action="delete"]', function(e) {
  var row = $(e.target).parents('tr');
  var id = row.attr('data-id');

  $.ajax({
    method: "DELETE",
    url: '/debts/' + id
  }).done(function() {
    row.remove();
  })
});

$.ajax({
  method: "GET",
  url: "/debts"
}).done(function(debts) {
  // .map is equivalent to the code below... it is a shortcut

  // var debtEls = debts.map(function(debt) {
  //   return Mustache.render(template, debt);
  // })

  var debtEls = [];

  debts.forEach(function(debt) {
    var html = Mustache.render(template, debt);
    debtEls.push(html);
  });

  //

  $('tbody').append(debtEls);
});