const { Pool } = require('pg');
const dbParams = require('../models/lib/db');
const db = new Pool(dbParams);
db.connect();

module.exports = {
  grabsUsersTasks: (req, res) => {
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
  },

  addsTask: (req, res) => {
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
  },

  deleteAllTask: (req, res) => {
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
  },

  deleteSingleTask: (req, res) => {
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
  },

  editsTask: (req, res) => {
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
  },
};
