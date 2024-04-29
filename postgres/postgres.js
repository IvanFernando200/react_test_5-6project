// impostant commands

// iniciar:  psql -U postgres
// crearBaseDatos: create database nombre_database;
// listAllDataBase: \l
// accessToDataBase: \c nombre_database
// limpiarConsola: \! cls
// ignorarElUltimoComando: \r

// TABLA:::::
// create: create table users (
//  id serial primary key,
//  firstname: varchar(30),
// lastname: varchar(30)
// );

// DATA TYPES:::::
// numrics: int, bigint, decimal, serial
// text: varchar, text
// boolean: boolean
// date&time: timestamp, date, time

// IN-MY-DATABASE::::
// listMyDatabases: \dt
// listMyVariables&TypeValues: \d users

// CRUD::::::::::::
// consultTable: select * from users;

// addValues: insert into users (firstname, lastname) values ('Ivan', 'Silva'), ('Meylin', 'Rios');
// delete: delete from users where id=1;

// actualizar: update users set
// firstname = 'Carla',
// lastname = 'Rose',
// ...
// where id = 2;

// FILTRO:::::::::
// igual: select * from users where lastname='smith'; ----> seleccionamos a todos de apellido smith

// operadorMayor: select * from users where birthday>'2000-02-15';
// operadorMenor: select * from users where birthday<'2000-02-15';

// like(cuyo nombre empieza con A): select * from ussers firstname like 'A%'; ---> case sensitive
// ilike: select * from users where name ilike 'robert';--->similar a like pero NO es caase sensitive

// and: select * from users where name='john' and lastname='doe'--->selecciona usuarios con nombre john y apellido doe

// or: select * from users where name='john' or email='john@gmail.com'---> selecciona los usuarios con nombre john, o que su email sea john@gmail.com

// ORDER::::::
// order by: select * from users order by firstname; ---> ascendente
// order by: select * from users order by firstname desc;---> descedente

// RELACIONES:::::
// uno a muchos:
/* create table users (
		id SERIAL PRIMARY KEY,
		firstName varchar(100), 
		lastName varchar(100),
		email varchar(100),
		phone varchar(15)
); */
/* create table cars (
		id SERIAL PRIMARY KEY,
		brand varchar(100), 
		model varchar(100),
		year int,
		color varchar(20),
		owner_id int references users(id)
); */

// select * from todos inner join users on todos.owner_id = users.id;


// muchos a muchos:
// tener 2 tablas mas el pivote[ejm. favorites]
// create table favorites (
//   id serial primary key,
//   user_id int references user(id), --->forein key (fk)
//   song_id int references songs(id)
// );

// users-favorites-songs
// select * from users inner join favorites on users.id = favorites.user_id inner join songs on songs.id = favorites.song_id;
