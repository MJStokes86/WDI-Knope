var mustache = require("mustache");
var fs = require("fs");

var template = fs.readFileSync("./all_posts.html", "utf8");

var json = fs.readFileSync('./data.json', 'utf8');

var goodData = JSON.parse(json);

//we pass the render function two arguments: the template needed for rendering, and an object.
//the key is of our choosing, and the value expected is an array of objects
var html = mustache.render(template, {posts: goodData})

console.log(html);