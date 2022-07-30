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
    db.query(
      `SELECT *
      FROM users
      WHERE username = $1;
      `,
      [req.params.username]
    )
      .then(data => {
        const users = data.rows;
        res.json(users);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.post('/login', (req, res) => {
    db.query(
      `
    SELECT *
    FROM users
    WHERE username = $1
    AND password = $2;
    `,
      [req.body.username, req.body.password]
    )
      .then(data => {
        const users = data.rows;
        res.json(users);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.post('/register', (req, res) => {
    db.query(
      `
    INSERT INTO USERS (username, password)
    VALUES ($1, $2);
    `,
      [req.body.username, req.body.password]
    )
      .then(data => {
        const user = data.rows;
        res.json(user);
      })
      .catch(error => console.log('Error~~~', error));
  });

  return router;
};
