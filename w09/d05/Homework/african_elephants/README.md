#African Elephant Tracker
> Far off on the vast plains of the Serengeti, a wildlife protection center is in need of a rails-backed web application to keep track of elephants. Until now, the center has simply used a series of notebooks to track the elephants, but they just raised over $11,000,000 in seed money and are ready to take it to the next level.

- Users should be able to fully CRUD elephants.
- Elephants should have a name, age, has_tusks boolean


###Bonus

> The center would also like to keep track of the subhuman elephant poachers that roam the plains in search of precious ivory. Add functionality to the application that allows an employee of the protection center to track poachers.

- Poachers should have name, location and elephant_kill_count attributes.
- As poachers are apprehended by the law, users should be able to delete them.
- Unfortunately, poachers occasionally find success in killing elephants, so users should be able to increment their elephant_kill_count.


###Double Bonus

> In order to better track and punish poachers, the local law enforcement agency would like to work with the wildlife protection center to document any incident in which a poacher manages to take down an elephant.

- Create a table that tracks 'poach' events, and holds the date of the event, the id of the elephant that perished, and the id of the poacher that did the deed.



### Tips

**Planning**:
Draw out wireframes, an ERD, and feature specs BEFORE you start coding

As always, one feature at a time!

Do not use any generators for anything but migrations. Avoiding generators will force you to create files yourself and help you better understand the structure of a rails application.
