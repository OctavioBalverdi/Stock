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

/*create database project_jwt;
use project_jwt;

create table login(
	username varchar(50) not null,
    password varchar(50) not null,
    primary key(username, password)
);

INSERT INTO login (username, password) VALUES
    ('user1', '1234'),
    ('user2', '1234'),
    ('user3', '1234'),
    ('user4', '1234');*/
