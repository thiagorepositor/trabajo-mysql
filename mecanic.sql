create database mecanica;
use mecanica;
create table herramientas(
id int auto_increment primary key,
nombre varchar(200),
repisa varchar(200),
codigo varchar(200),
area varchar(200),
instructor_encargado varchar(200)
);

use mecanica;
select * from herramientas;
 

