#Avis Rent-A-Car

<img src ="http://www.cambridgeusa.org/images/made/cf0db91fe6d86440/Logo_Avis_Rent_a_Car_590_300_s_c1_smart_scale.jpg">

> Avis Rent A Car needs a new application to keep track of cars, customers, and rentals. We can use ActiveRecord and Postgres to build a powerful application to solve the problem.

###User Stories
- A user should be able to see a list of all cars.
- A user should be able to see a list of all customers.
- A user should be able to see a list of all rentals.
- A user should be able to create a rental, with a customer and a car.
- A user should be able to see the details for an individual rental (like the name of the customer and the information about the car that was rented).


###Thoughts
- Since you are only **c**reating rentals you will want to seed your database with dummy customers and cars. This is not how the full-fledged application would work - we are just 'spiking' on CRUDing customers and cars.
- The MVP for this is just a simple command line application, no web application necessary.
- Draw out an ERD for the exercise first. What tables will you need? How will they reference each other?
- Create a `schema.sql` file to hold the SQL commands to set up your database.
- Work on one feature at a time.
- ActiveRecord can also help us to manage our associations. Check the [documentation](http://guides.rubyonrails.org/association_basics.html) for details and reference
  - *Note* - When reading these docs **ignore** everything involving the word `migration`. (We'll talk about them tomorrow).

###Bonus

- Use Sinatra to turn this into a full blown web application.
