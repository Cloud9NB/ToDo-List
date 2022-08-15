const { db } = require('../db');
db.connect();

const grabsUsersTasks = username => {
  return db
    .query(
      `
    SELECT todolists.id, todo, user_id
    FROM todolists
    JOIN users ON user_id = users.id
    WHERE username = $1
    ORDER BY id ASC;
    `,
      [username]
    )
    .then(data => data.rows)
    .catch(error => console.log('Error~~~', error));
};

const addsTask = (id, todo) => {
  return db
    .query(
      `
    INSERT INTO todolists (user_id, todo)
    VALUES ($1, $2);
    `,
      [id, todo]
    )
    .then(data => data.rows)
    .catch(error => console.log('Error~~~', error));
};

const deleteAllTask = userId => {
  return db
    .query(
      `
    DELETE FROM todolists
    WHERE user_id = $1;
    `,
      [userId]
    )
    .then(data => data.rows)
    .catch(error => console.log('Error~~~', error));
};

const deleteSingleTask = (userId, todo) => {
  return db
    .query(
      `
    DELETE FROM todolists
    WHERE user_id = $1
    AND todo = $2;
    `,
      [userId, todo]
    )
    .then(data => data.rows)
    .catch(error => console.log('Error~~~', error));
};

const editsTask = (userId, updatedTask, oldTask) => {
  return db
    .query(
      `
    UPDATE todolists
    SET todo = $1
    WHERE user_id = $2
    AND todo = $3;
    `,
      [updatedTask, userId, oldTask]
    )
    .then(data => data.rows)
    .catch(error => console.log('Error~~~', error));
};

module.exports = {
  grabsUsersTasks,
  addsTask,
  deleteAllTask,
  deleteSingleTask,
  editsTask,
};
