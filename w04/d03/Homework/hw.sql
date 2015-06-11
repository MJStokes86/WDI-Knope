SCHOOLS


sqlite> CREATE TABLE schools (name varchar, city varchar, state varchar, zip integer);
sqlite> INSERT INTO schools (name, city, state, zip) VALUES ('Millenium High', 'New York', 'NY', 10004 ),('Bedford Academy High School', 'Brooklyn', 'NY', 11221), ('Bronx High School for Visual Arts', 'Bronx', 'NY', 10452);
sqlite> SELECT * FROM schools;
Millenium High|New York|NY|10004
Bedford Academy High School|Brooklyn|NY|11221
Bronx High School for Visual Arts|Bronx|NY|10452
sqlite> SELECT * FROM schools WHERE state='NY';
Millenium High|New York|NY|10004
Bedford Academy High School|Brooklyn|NY|11221
Bronx High School for Visual Arts|Bronx|NY|10452
sqlite> UPDATE schools SET name ='Manhattan High School' WHERE name='Millenium High'; 
sqlite> UPDATE schools SET name ='Manhattan High School' WHERE name='Bedford Academy High School'; 
sqlite> UPDATE schools SET name ='Manhattan High School' WHERE name='Bronx High School for Visual Arts'; 
sqlite> SELECT * FROM schools;
Manhattan High School|New York|NY|10004
Manhattan High School|Brooklyn|NY|11221
Manhattan High School|Bronx|NY|10452


TEACHERS


sqlite> CREATE TABLE teachers (name varchar, email varchar, subject varchar,  age integer);
sqlite> INSERT INTO teachers (name, email, subject, age) VALUES ('Ms. Miller', 'miller@att.net', 'art', 49), ('Ms. Kirkham', 'kirkham@aol.net','math', 32), ('Ms. Keaton', 'keaton@yahoo.com', 'math', 25), ('Coach Mench', 'mench@rr.net', 'physical ed', 50), ('Mr. Carroll', 'carroll@gmail.com', 'band', 48), ('Mr. Olivera', 'olivera@me.com', 'ESL', 288);
sqlite> SELECT * FROM teachers;
Ms. Miller|miller@att.net|art|49
Ms. Kirkham|kirkham@aol.net|math|32
Ms. Keaton|keaton@yahoo.com|math|25
Coach Mench|mench@rr.net|physical ed|50
Mr. Carroll|carroll@gmail.com|band|48
Mr. Olivera|olivera@me.com|ESL|28
sqlite> SELECT * FROM teachers WHERE age > 30;
Ms. Miller|miller@att.net|art|49
Ms. Kirkham|kirkham@aol.net|math|32
Coach Mench|mench@rr.net|physical ed|50
Mr. Carroll|carroll@gmail.com|band|48
sqlite> UPDATE teachers SET age = 40;
sqlite> SELECT * FROM teachers;
Ms. Miller|miller@att.net|art|40
Ms. Kirkham|kirkham@aol.net|math|40
Ms. Keaton|keaton@yahoo.com|math|40
Coach Mench|mench@rr.net|physical ed|40
Mr. Carroll|carroll@gmail.com|band|40
Mr. Olivera|olivera@me.com|ESL|40
sqlite> DELETE FROM teachers WHERE subject='math';
sqlite> SELECT * FROM teachers;
Ms. Miller|miller@att.net|art|40
Coach Mench|mench@rr.net|physical ed|40
Mr. Carroll|carroll@gmail.com|band|40
Mr. Olivera|olivera@me.com|ESL|40

