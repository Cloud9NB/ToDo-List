const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const { getsAllUsers, registersUser, loggedInUser, logsInUser } =
  userController;

module.exports = () => {
  router.get('/users', getsAllUsers);
  router.get('/user/:username', loggedInUser);
  router.post('/login', logsInUser);
  router.post('/register', registersUser);
  return router;
};
