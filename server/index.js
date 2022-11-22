const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
//parsing data
app.use(express.json());
//creating connection to db
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "newpassword?123",
  database: "basic_crud",
});

//connecting to db
connection.connect((err) => {
  if (err) console.log("Error connecting to Db");
  console.log("Connection established");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});

app.get("/api/get", (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM movies",
      timeout: 40000, // 40s
    },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
});

app.post("/api/insert", (req, res) => {
  const data = req.body;
  res.json(data);
  console.log(data);
  const movie_name = data.name;
  const movie_review = data.review;
  connection.query(
    {
      sql: "INSERT INTO movies (movie_name, movie_review) VALUES (?, ?)",
      timeout: 40000, // 40s
      values: [movie_name, movie_review],
    },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    }
  );
});

app.delete("/api/delete", (req, res) => {
  const id = req.body.id;
  connection.query(
    {
      sql: "DELETE FROM movies WHERE idnew_table = ?",
      timeout: 40000, // 40s
      values: [id],
    },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
        // console.log(results);
      }
    }
  );
});
