const express = require('express');
const router = express.Router();
const { usersController } = require('../controllers');

router.get('/users', usersController.getsAllUsers);
router.get('/user/:username', usersController.loggedInUser);
router.post('/login', usersController.logsInUser);
router.post('/register', usersController.registersUser);

module.exports = router;
