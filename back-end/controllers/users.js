const { Pool } = require('pg');
const dbParams = require('../models/lib/db');
const db = new Pool(dbParams);
db.connect();

module.exports = {
  getsAllUsers: (req, res) => {
    db.query(
      `
      SELECT * FROM users;
      `
    )
      .then(data => {
        const users = data.rows;
        res.json(users);
      })
      .catch(error => console.log('Error~~~', error));
  },

  registersUser: (req, res) => {
    const { username, password } = req.body;
    db.query(
      `
    INSERT INTO USERS (username, password)
    VALUES ($1, $2);
    `,
      [username, password]
    )
      .then(data => {
        const user = data.rows;
        res.json(user);
      })
      .catch(error => console.log('Error~~~', error));
  },

  loggedInUser: (req, res) => {
    const { username } = req.params;
    db.query(
      `SELECT *
      FROM users
      WHERE username = $1;
      `,
      [username]
    )
      .then(data => {
        const users = data.rows;
        res.json(users);
      })
      .catch(error => console.log('Error~~~', error));
  },

  logsInUser: (req, res) => {
    const { username, password } = req.body;
    db.query(
      `
    SELECT *
    FROM users
    WHERE username = $1
    AND password = $2;
    `,
      [username, password]
    )
      .then(data => {
        const users = data.rows;
        res.json(users);
      })
      .catch(error => console.log('Error~~~', error));
  },
};
