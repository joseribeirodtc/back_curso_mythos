CREATE TABLE curso_mythos.cursos (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(45) NOT NULL,
    data_de_inicio DATE NOT NULL,
    data_de_termino DATE NOT NULL,
    vagas INT NOT NULL,
PRIMARY KEY (id));

CREATE TABLE curso_mythos.alunos (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(45) NOT NULL,
    email varchar(45) NOT NULL,
PRIMARY KEY (id));

CREATE TABLE curso_mythos.matriculas (
    id int NOT NULL AUTO_INCREMENT,
    id_aluno int NOT NULL,
    id_curso int NOT NULL,
PRIMARY KEY (id));