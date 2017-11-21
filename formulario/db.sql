DROP DATABASE IF EXISTS BD_rifa;

CREATE DATABASE BD_rifa;
USE BD_rifa;

CREATE TABLE usuarios(
	cedula varchar(15) PRIMARY KEY,
	nombre varchar(25),
	apellido varchar(25),
	direccion varchar(100),
	comentario varchar(500)
);

INSERT usuarios VALUES('1234567', 'Jorge','Alvarez','jalvares@ean.edu.co','ninguno'),
					  ('2345678', 'German','Silva','gsilva@ean.edu.co','ninguno'),
					  ('3456789', 'Geovel','Pallares','gpallares@ean.edu.co','ninguno'),
					  ('4567890', 'Lida','Arenas','larenas@ean.edu.co','ninguno');