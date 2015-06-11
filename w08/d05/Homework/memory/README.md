# Memory

![Monkey](http://i.imgur.com/wXcjoSB.gif)

### Goal

 **Recreate the classic card game Memory using Backbone.js**

 You have been provided with a `db.json` and some basic HTML and CSS. A few libraries have already been added to the HTML.

### Rules of Memory

There are 6 pairs of cards, so 12 cards in total. The cards are shuffled and each one is placed upside down on a table.

A player can pick 2 cards to flip over, if they are a matching pair then the player gets to take the cards. If the cards are not the same, they are placed back in their original positions, upside down on the table.

The objective of the game is to get all the cards off of the table in the least amount of turns.

Like golf, a good score is a low one.

### Requirements

A player should see upside down cards at the beginning of the game.

A player should be able to click a card and then click a second card. The rules of the game should dictate what happens next. This will count as one turn.

A player should see a number on the page, indicating how many turns they have used in the current game.

A player should be able to give their name at the end of the game so that they can record their score.

A player should be able to click a button and see the top 10 best scores and their corresponding players.

### Tips

- You need 12 cards, but these do not necessarily have to be playing cards. An easier solution would be to use 6 pairs of icons from Semantic UI to represent your cards

- Clicking the card and having it simulate a 'flip over' can be tricky. There are several ways to go about doing this. Experiment and choose one.
  - [Semantic UI shapes](http://semantic-ui.com/modules/shape.html#/definition). Check the 'flip over' and 'flip back' features
  - Creating something yourself using a combination of [Animate.css](http://daneden.github.io/animate.css/) functions

- There is a `ul` currently in the body. Using it to hold your cards is probably a good idea.

- While this is not a standard CRUD app, there are still CRUD features involved. Think carefully about when these CRUD features would occur

- We have thus far thought of `models` as something tied to our database. However, realize that there is nothing wrong with creating `models` on your client-side that are never persisted, thus have nothing to do with your database.
  - *Hint:* Would creating a `Card` model be helpful? If so, would we need to persist the data in this model?

- Most importantly, the structure of this application needs to be well thought out. Be sure to spend the appropriate time doing this. It is a good idea to discuss your strategies with each other before proceeding