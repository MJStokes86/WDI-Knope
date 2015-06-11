CREATE TABLE cars (id serial primary key, make varchar, model varchar, color varchar, type varchar);
CREATE TABLE customers(id serial primary key, name varchar, phone varchar, email varchar, dl varchar);
CREATE TABLE rentals(id serial primary key, name varchar, car varchar, car_id integer, customer_id integer, date varchar);