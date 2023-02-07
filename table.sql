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

INSERT INTO cursos (name, data_de_inicio, data_de_termino, vagas)
VALUES ('Identificar Criaturas', '2023-01-20', '2023-02-20', 20),
('Rituais Arcanos 2', '2023-02-20', '2023-03-20', 10);
('Tomos Antigos', '2023-02-01', '2023-03-01', 12);

INSERT INTO alunos (name, email)
VALUES ('João Stanislau', 'joao.stanis@mmail.com'),
('maria Joackina', 'mar.ckin@lightmail.com');