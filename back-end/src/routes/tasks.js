const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/:username/tasks', (req, res) => {
    const { username } = req.params;
    db.query(
      `
      SELECT todolists.id, todo, user_id
      FROM todolists
      JOIN users ON user_id = users.id
      WHERE username = $1
      ORDER BY id ASC;
      `,
      [username]
    )
      .then(data => {
        const tasks = data.rows;
        res.json(tasks);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.post('/addTask/', (req, res) => {
    const { id, todo } = req.body;
    db.query(
      `
      INSERT INTO todolists (user_id, todo)
      VALUES ($1, $2);
      `,
      [id, todo]
    )
      .then(data => {
        const task = data.rows;
        res.json(task);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.delete('/deleteAllTask/:userId', (req, res) => {
    const { userId } = req.params;
    db.query(
      `
      DELETE FROM todolists
      WHERE user_id = $1;
      `,
      [userId]
    )
      .then(data => {
        const tasks = data.rows;
        res.json(tasks);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.delete('/deleteTask/:userId', (req, res) => {
    const { todo } = req.body;
    const { userId } = req.params;
    db.query(
      `
      DELETE FROM todolists
      WHERE user_id = $1
      AND todo = $2;
      `,
      [userId, todo]
    )
      .then(data => {
        const tasks = data.rows;
        res.json(tasks);
      })
      .catch(error => console.log('Error~~~', error));
  });

  router.put('/updateTask/:userId', (req, res) => {
    const { updatedTask, oldTask } = req.body;
    const { userId } = req.params;
    db.query(
      `
      UPDATE todolists
      SET todo = $1
      WHERE user_id = $2
      AND todo = $3;
      `,
      [updatedTask, userId, oldTask]
    )
      .then(data => {
        const tasks = data.rows;
        res.json(tasks);
      })
      .catch(error => console.log('Error~~~', error));
  });

  return router;
};
