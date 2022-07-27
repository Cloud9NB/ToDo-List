const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/:username/tasks', (req, res) => {
    db.query(
      `
      SELECT todolists.id, todo, user_id
      FROM todolists
      JOIN users ON user_id = users.id
      WHERE username = $1
      ORDER BY id ASC;
      `,
      [req.params.username]
    )
      .then(data => {
        const tasks = data.rows;
        res.json(tasks);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.post('/addTask/', (req, res) => {
    db.query(
      `
      INSERT INTO todolists (user_id, todo)
      VALUES ($1, $2);
      `,
      [req.body.id, req.body.todo]
    )
      .then(data => {
        const task = data.rows;
        res.json(task);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.delete('/deleteAllTask/:userId', (req, res) => {
    db.query(
      `
      DELETE FROM todolists
      WHERE user_id = $1;
      `,
      [req.params.userId]
    )
      .then(data => {
        const tasks = data.rows;
        res.json(tasks);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.delete('/deleteTask/:userId', (req, res) => {
    db.query(
      `
      DELETE FROM todolists
      WHERE user_id = $1
      AND todo = $2;
      `,
      [req.params.userId, req.body.todo]
    )
      .then(data => {
        const tasks = data.rows;
        res.json(tasks);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.put('/updateTask/:userId', (req, res) => {
    db.query(
      `
      UPDATE todolists
      SET todo = $1
      WHERE user_id = $2
      AND todo = $3;
      `,
      [req.body.updatedTask, req.params.userId, req.body.oldTask]
    )
      .then(data => {
        const tasks = data.rows;
        res.json(tasks);
      })
      .catch(error => console.log('Error~~~', error));
  });

  return router;
};
