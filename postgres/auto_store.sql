-- consult table
select * from cars;

-- addValues
insert into  cars (brand, model, year, color) values 
('Chukk', 'Merzedez', '2000-03-20', 'blue'),
('Hiita', 'yuuut', '2013-12-25', 'blue');

-- filter
select * from cars where color like 'blue';

-- delete
delete from cars where id>6;

-- order
select * from cars order by year;
select * from users;



-- relacion muchos a muchos:
create table purchases (
    id serial primary key,
	user_id int references users(id),
	product_id int references products(id)
);

select * from products;
insert into purchases (user_id, product_id)values
(1, 5);