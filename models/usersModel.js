const { db } = require('../db');
db.connect();

const getsAllUsers = () => {
  return db
    .query(`SELECT * FROM users;`)
    .then(data => data.rows)
    .catch(error => console.log('Error~~~', error));
};

const registersUser = (username, password) => {
  return db
    .query(
      `
    INSERT INTO USERS (username, password)
    VALUES ($1, $2);
    `,
      [username, password]
    )
    .then(data => data.rows)
    .catch(error => console.log('Error~~~', error));
};

const loggedInUser = username => {
  return db
    .query(
      `
    SELECT *
    FROM users
    WHERE username = $1;
    `,
      [username]
    )
    .then(data => data.rows)
    .catch(error => console.log('Error~~~', error));
};

const logsInUser = (username, password) => {
  return db
    .query(
      `
    SELECT *
    FROM users
    WHERE username = $1
    AND password = $2;
    `,
      [username, password]
    )
    .then(data => data.rows)
    .catch(error => console.log('Error~~~', error));
};

module.exports = { getsAllUsers, registersUser, loggedInUser, logsInUser };
