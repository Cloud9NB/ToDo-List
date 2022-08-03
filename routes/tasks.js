const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasks');
const {
  grabsUsersTasks,
  addsTask,
  deleteAllTask,
  deleteSingleTask,
  editsTask,
} = taskController;

module.exports = () => {
  router.get('/:username/tasks', grabsUsersTasks);
  router.post('/addTask/', addsTask);
  router.delete('/deleteAllTask/:userId', deleteAllTask);
  router.delete('/deleteTask/:userId', deleteSingleTask);
  router.put('/updateTask/:userId', editsTask);
  return router;
};
