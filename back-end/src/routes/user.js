const express = require('express');
const router = express.Router();

module.exports = db => {
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
};
