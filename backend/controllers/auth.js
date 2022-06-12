const { validationResult } = require("express-validator");
const database = require("../config/db");

/**
 * 
 * sample of how to connect and use directly to mysql database 
 */
const initDatabase = (req, res) => {
  const sqlQuery =
    "CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))";

    database.query(sqlQuery, (err) => {
        if(err)throw err

        res.send('table created')
    })
};

const getAllEmail = (req, res) => {
    const sqlQuery = "SELECT * FROM emails";

    database.query(sqlQuery, (err, result) => {
      if (err) throw err;

      res.json({ emails: result });
    });
}

const register = (req, res) => {
    console.log(req.body);
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    res.send(errors.array());
  } else {
    const subscriber = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    };

    const sqlQuery = "INSERT INTO emails SET ?";

    database.query(sqlQuery, subscriber, (err, row) => {
      if (err) throw err;

      res.send("Subscribed successfully!");
    });
  }
};
const login = (req, res) => {
  res.send('login')
}

module.exports = {
  initDatabase,
  getAllEmail,
  register,
  login,
};