###Giffer

> The goal of this exercise is to build a simple app that uses AJAX to grab gifs from the giphy API. We don't want to slow down the user experience by trying to load to many GIFs at once, so we want to trigger the loading behavior only when needed. 

> We can use jQuery's on method to listen for a `scroll` event. Taking into account the `height` of the `window`, and the position of the `scrollTop`, we can control our AJAX call based on the user's position on the page.

> We want to use the Giphy API's RANDOM endpoint for this <a href="https://github.com/Giphy/GiphyAPI"> LOOK FOR THE RANDOM ENDPOINT </a>

> Give every img tag the class of .gif!

###Breakdown

- First, make sure your app is listening for a scroll event
- Next, try having your app log the current window.scrollTop() each time a user scrolls
- Next, try and figure out how you can establish when a user has reached the "bottom" of the page...
- Once you've established that, keep listening for scrolling, and console log when the user has reached the bottom of the page
- Next, explore the Giphy API docs, and test the random gif endpoint. Hardcode a query for now.
- Now add behavior so that three gifs are appended when a user scrolls to the bottom...
- Look into `$(document).height()`...