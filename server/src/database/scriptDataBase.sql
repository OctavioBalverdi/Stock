create database Berries;
use Berries;

create table USUARIO(
id int primary key auto_increment not null,
usuario varchar(50) not null,
contrasena text not null,
rol varchar (10) not null
);

INSERT INTO USUARIO (usuario, contrasena,rol) VALUES
    ('user1', '1234','admin'),
    ('user2', '1234','empleado'),
    ('user3', '1234','empleado'),
    ('user4', '1234','empleado');
    
select * from USUARIO;
UPDATE USUARIO
SET usuario = 'Berrie Master',
    contrasena = 'nadiesabe',
    rol = 'admin'
WHERE id = 1; 

CREATE TABLE SALIDA (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    avatar VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    calidad VARCHAR(20) NOT NULL,
    peso INT NOT NULL,
	fecha_date DATE NOT NULL,
    fecha_time TIME NOT NULL
    
);
