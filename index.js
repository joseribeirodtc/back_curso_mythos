const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "deusimar",
  password: "deusimar",
  database: "curso_mythos",
});

app.use(express.json());
app.use(cors());

//CURSOS ROTAS
app.post("/createCurso", (req, res) => {
  const { name, data_de_inicio, data_de_termino, vagas } = req.body;

  let mysql =
    "INSERT INTO cursos ( name, data_de_inicio, data_de_termino,vagas) VALUES (?, ?, ?, ?)";
  db.query(
    mysql,
    [name, data_de_inicio, data_de_termino, vagas],
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/searchCurso", (req, res) => {
  const { name } = req.body;

  let mysql = "SELECT * from games WHERE name LIKE '%?%'";
  db.query(mysql, [name], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getAllCursos", (req, res) => {
  let mysql = "SELECT * FROM cursos";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/editCurso", (req, res) => {
  const { id, name, data_de_inicio, data_de_termino, vagas } = req.body;

  let mysql =
    "UPDATE cursos SET name = ?, data_de_inicio = ?, data_de_termino = ?, vagas = ? WHERE id = ?";
  db.query(
    mysql,
    [name, data_de_inicio, data_de_termino, vagas, id],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deleteCurso/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM cursos WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//ALUNOS ROTAS

app.post("/createAluno", (req, res) => {
  const { name, email } = req.body;

  let mysql = "INSERT INTO alunos ( name, email) VALUES (?, ?)";
  db.query(mysql, [name, email], (err, result) => {
    res.send(result);
  });
});

app.post("/searchAluno", (req, res) => {
  const { name } = req.body;

  let mysql = "SELECT * from alunos WHERE name LIKE '%?%'";
  db.query(mysql, [name], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getAllAlunos", (req, res) => {
  let mysql = "SELECT * FROM alunos";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/editAluno", (req, res) => {
  const { id, name, email } = req.body;

  let mysql = "UPDATE alunos SET name = ?, email = ? WHERE id = ?";
  db.query(mysql, [name, email, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/deleteAluno/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM alunos WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//MATRICULAS ROTAS

app.get("/getCursosMatriculados", (req, res) => {
  const { id } = req.body;
  let mysql = "SELECT * FROM matriculas WHERE id_aluno = ?";
  db.query(mysql, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getAlunosMatriculados", (req, res) => {
  const { id } = req.body;
  let mysql = "SELECT * FROM matriculas WHERE id_curso = ?";
  db.query(mysql, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/createMatricula", (req, res) => {
  const { id_aluno, id_curso } = req.body;

  let mysql = "INSERT INTO matriculas ( id_aluno, id_curso) VALUES (?, ?)";
  db.query(mysql, [id_aluno, id_curso], (err, result) => {
    res.send(result);
  });
});

app.delete("/deleteMatricula/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM matriculas WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
