const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/users', (req, res) => {
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
  });

  router.get('/user/:username', (req, res) => {
    const { username } = req.body;
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
  });

  router.post('/login', (req, res) => {
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
  });

  router.post('/register', (req, res) => {
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
  });

  return router;
};
