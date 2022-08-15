const { usersModel } = require('../models');

const getsAllUsers = (req, res) => {
  usersModel
    .getsAllUsers()
    .then(users => res.json(users))
    .catch(error => {
      console.log(error.message);
      res.status(500).send({
        message: 'Error reading users',
        error: error.message,
      });
    });
};

const registersUser = (req, res) => {
  const { username, password } = req.body;

  usersModel
    .registersUser(username, password)
    .then(user => res.json(user))
    .catch(error => {
      console.log(error.message);
      res.status(500).send({
        message: 'Error reading a user',
        error: error.message,
      });
    });
};

const loggedInUser = (req, res) => {
  const { username } = req.params;

  usersModel
    .loggedInUser(username)
    .then(user => res.json(user))
    .catch(error => {
      console.log(error.message);
      res.status(500).send({
        message: 'Error reading a user',
        error: error.message,
      });
    });
};

const logsInUser = (req, res) => {
  const { username, password } = req.body;

  usersModel
    .logsInUser(username, password)
    .then(user => res.json(user))
    .catch(error => {
      console.log(error.message);
      res.status(500).send({
        message: 'Error reading a user',
        error: error.message,
      });
    });
};

module.exports = { getsAllUsers, registersUser, loggedInUser, logsInUser };
