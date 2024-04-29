-- relacion uno a muchos::::::::::::::
select * from users;
 
create table todos (
	id serial primary key,
	title varchar(30),
	description text,
	deadline date,
	todo int references users(id)
);

select * from todos;

insert into todos(title, description, deadline, todo) values
('work', 'as a software design', '2025-3-20', 1),
('cook', 'make breakfast for the family', '2025-08-06', 3),
('do the dishes', 'from the breakfast of the family', '2025-08-06', 3),
('do laundry', 'from the whole family', '2025-11-14', 2),
('take a trip', 'for the whole family', '2026-02-25', 1);

select * from todos inner join users 
on todos.todo = users.id;

-- relacion muchos a muchos:::::::::::::::::

create table songs (
id serial primary key,
name varchar(50),
artist varchar(50),
genre varchar(50),
release_year int
);

insert into songs (name, artist, genre, release_year)values
('OMFG', 'Lil peep', 'emmo-rap', '2017'),
('Flowers', 'Ian dior', 'rap', '2020'),
('Revenge', 'xxxtentacion', 'hip-hop-rap', '2018');
select * from songs;

-- creacion de la tabla pivote: 
create table favorites (
id serial primary key,
user_id int references users(id),
song_id int references songs(id)
);

select * from users;

insert into favorites (user_id, song_id)values
(1,1),
(1,3),
(2,1),
(2,2),
(3,1),
(3,2),
(3,3);
select * from favorites;

-- users-favorites-songs
select users.id, users.firstname, songs.name, songs.artist from users inner join favorites 
on users.id = favorites.user_id inner join songs 
on songs.id = favorites.song_id; 

