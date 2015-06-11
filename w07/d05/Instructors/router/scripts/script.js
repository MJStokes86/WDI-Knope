console.log("loaded")

function home(){
  var $body = $('body');
  $body.empty();

  var $html = $("<h1>Books you should read!</h1><h3> This is a website that contains books that I have recently read and enjoyed </h3><button onclick=location.href='#/books' class='books'>Click for books!</button>");

  $body.append($html);
};

function books(){
  var $body = $('body');
  $body.empty();

  var $homeButton = $("<button onclick=location.href='#/home' class='home'>Home</button>");

  var $ul = $("<ul></ul>");
  $ul.append("<li>Elena Ferrante - My Brilliant Friend</li>");
  $ul.append("<li>Andy Weir - The Martian</li>");

  $body.append($homeButton);
  $body.append($ul);
};

var routes = {
    "/home": home,
    "/books": books
}

var router = Router(routes);

router.init();
