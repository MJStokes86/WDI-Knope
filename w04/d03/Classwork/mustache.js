var mustache = require('mustache');
var fs = require('fs');
var template = fs.readFileSync('./index.html', 'utf8');

var arrayOfPosts = [
{title: 'dreams of anna', author: 'anna r'},
{title: 'Katie did it' , author: 'Katie'},
{title: 'I watch too much Lifetime', author: 'Vinnie'},

]
var json = JSON.stringify(arrayOfPosts)
// var json = fs.readFileSync('./data.json', 'utf8');


fs.writeFileSync('./data.json', json)
// var html = mustache.render(template, {posts: arrayOfPosts});



//console.log(html);


/*To turn an array into json, 
var mustache = require('mustache');
var fs = require('fs');
var template = fs.readFileSync('./index.html', 'utf8');

var arrayOfPosts = [
{title: 'dreams of anna', author: 'anna r'},
{title: 'Katie did it' , author: 'Katie'},
{title: 'I watch too much Lifetime', author: 'Vinnie'},

]
var json = JSON.stringify(arrayOfPosts)
fs.writeFileSync('./data.json', json)*/