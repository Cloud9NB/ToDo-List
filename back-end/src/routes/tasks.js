const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/:user/tasks', (req, res) => {
    console.log(req.params);
    db.query(
      `
      SELECT todo
      FROM todolists
      JOIN users ON user_id = users.id
      WHERE username = $1;
      `,
      [req.params.user]
    )
      .then(data => {
        const tasks = data.rows;
        res.json(tasks);
      })
      .catch(error => console.log('Error~~~', error));
  });

  return router;
};
