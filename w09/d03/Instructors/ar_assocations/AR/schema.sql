CREATE TABLE tributes (id serial primary key, name varchar(30), age integer, district_id integer);
CREATE TABLE districts (id serial primary key, name integer);
CREATE TABLE weapons (id serial primary key, name varchar(30), power integer);
CREATE TABLE kills (id serial primary key, tribute_id integer, weapon_id integer);