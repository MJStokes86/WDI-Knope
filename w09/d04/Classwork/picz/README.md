# Picz!

### Getting Up and Running

1. Install all of the dependencies from the Gemfile `bundle install`
* Create the database `rake db:create`
* Run migrations `rake db:migrate`
* Run the seeds file `rake db:seed`
* Start the server and test out the app! `rails server`

### New Features

* A user can edit an entry.
* A user can remove an entry.
* A user can write in a tag for their entry. Tags are not required.
* A user can like an entry, and see how many likes an entry already has.
  - Bonus - do this without refreshing the page...ie with javascript
* A user can leave a comment on an entry.
* A user can remove their comment up to one minute after they wrote it.
* An entry is not valid if the `photo_url` is a repeat.