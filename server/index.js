const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3001;
const cors = require("cors");

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

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  const data = req.body;
  res.json(data);

  console.log(data);
});
