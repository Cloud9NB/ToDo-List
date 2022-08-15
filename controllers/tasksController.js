const { tasksModel } = require('../models');

const grabsUsersTasks = (req, res) => {
  const { username } = req.params;

  tasksModel
    .grabsUsersTasks(username)
    .then(tasks => res.json(tasks))
    .catch(error => {
      console.log(error.message);
      res.status(500).send({
        message: 'Error reading tasks',
        error: error.message,
      });
    });
};

const addsTask = (req, res) => {
  const { id, todo } = req.body;

  tasksModel
    .addsTask(id, todo)
    .then(task => res.json(task))
    .catch(error => {
      console.log(error.message);
      res.status(500).send({
        message: 'Error reading a task',
        error: error.message,
      });
    });
};

const deleteAllTask = (req, res) => {
  const { userId } = req.params;

  tasksModel
    .deleteAllTask(userId)
    .then(tasks => res.json(tasks))
    .catch(error => {
      console.log(error.message);
      res.status(500).send({
        message: 'Error reading a tasks',
        error: error.message,
      });
    });
};

const deleteSingleTask = (req, res) => {
  const { userId } = req.params;
  const { todo } = req.body;

  tasksModel
    .deleteSingleTask(userId, todo)
    .then(task => res.json(task))
    .catch(error => {
      console.log(error.message);
      res.status(500).send({
        message: 'Error reading a task',
        error: error.message,
      });
    });
};

const editsTask = (req, res) => {
  const { updatedTask, oldTask } = req.body;
  const { userId } = req.params;

  tasksModel
    .editsTask(userId, updatedTask, oldTask)
    .then(task => res.json(task))
    .catch(error => {
      console.log(error.message);
      res.status(500).send({
        message: 'Error reading a task',
        error: error.message,
      });
    });
};

module.exports = {
  grabsUsersTasks,
  addsTask,
  deleteAllTask,
  deleteSingleTask,
  editsTask,
};
