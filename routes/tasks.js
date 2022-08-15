const express = require('express');
const router = express.Router();
const { tasksController } = require('../controllers');

router.get('/:username/tasks', tasksController.grabsUsersTasks);
router.post('/addTask', tasksController.addsTask);
router.delete('/deleteAllTask/:userId', tasksController.deleteAllTask);
router.delete('/deleteTask/:userId', tasksController.deleteSingleTask);
router.put('/updateTask/:userId', tasksController.editsTask);

module.exports = router;
