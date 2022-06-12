const mysql = require("mysql");

const database = mysql.createConnection({
  host: "host.docker.internal",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

database.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = database;