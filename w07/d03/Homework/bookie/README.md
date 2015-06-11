# Bookie App

Let's pretend that we've been hired by a local bookie to create an app that helps bookies track all the action they take from degenerate gamblers.

### Spec
- Bookies should be able to add a name and an amount
- Bookies should be able to mark a debt as paid.
- Bookies should be able to delete debts from the list.
- Bookies should be able to edit a debt amount if the client makes a partial payment.

### Model

**Debt**
  - client_name (string)
  - amount (integer)
  - paid (boolean)

### Wireframes

Before beginning, create a series of wireframes so that you have a precise vision of how the application will work

### Start Up

1. In this directory, run `npm install .`
* Also in this directory run `./node_modules/json-server/bin/index.js ./db.json`
* To check if this has worked, go to `http://localhost:3000/debts` and `http://localhost:3000/index.html`

### Bonus

- Add a strikethrough when an item is checked
- Add a running counter to the top of the page that shows all currently uncollected gambling debt.
- If a gambler's debt is more than $10,000, then their name will be shown in red so the bookie remembers to break their legs.
- Clean up your styling with Semantic UI