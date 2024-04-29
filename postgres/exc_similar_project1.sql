-- EJERCICIO SIMILAR AL ENTREGABLE::::::::::

-- tabla pivote movies y genres
create table movies_genres (
id serial primary key,
movie_id int references movies(id),
genre_id int references genres(id)
);

insert into movies_genres (movie_id, genre_id)values 
(1,1),
(1,3),
(2,2),
(2,1),
(2,3),
(2,5),
(3,4),
(3,2),
(3,3),
(4,5),
(4,3),
(4,2),
(5,2),
(5,3);

select * from movies_genres;
select * from movies;
select * from genres;

-- movies movies_genres genres
select movies.title, genres.name from movies inner join movies_genres 
on movies.id = movies_genres.movie_id inner join genres
on genres.id = movies_genres.genre_id;

-- + filtrado de los de genres accion
select movies.title, genres.name from movies inner join movies_genres 
on movies.id = movies_genres.movie_id inner join genres
on genres.id = movies_genres.genre_id where genres.id = 2;

-- actors
create table actors (
    id serial primary key,
	first_name varchar(50),
	last_name varchar(50),
	birthday int
);

insert into actors (first_name, last_name, birthday) values
('Leonardo', 'DiCaprio', 1980),
('Johnny', 'Depp', 1985),
('Harrison', 'Ford', 1978),
('Orlando', 'Bloom', 1972),
('Brendan', 'Fraser', 1981);

select * from actors;


-- tabla pivote para actors y movies
create table actors_movies (
    id serial primary key,
	actor_id int references actors(id),
	movie_id int references movies(id)
);

insert into actors_movies (actor_id, movie_id) values
(2,2),
(4,2),
(3,3),
(4,4),
(5,5),
(1,1);

select * from actors_movies;

-- actors actors_movies movies
select actors.first_name, actors.last_name, movies.title from actors inner join actors_movies
on actors.id = actors_movies.actor_id inner join movies
on movies.id = actors_movies.movie_id;
-- now using alias:::  movies actors_movies actors
select M.title, A.first_name, A.last_name  from movies M inner join actors_movies AM
on M.id = AM.movie_id inner join actors A
on A.id = AM.actor_id;