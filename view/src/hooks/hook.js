import { useState, useEffect } from 'react';
import axios from 'axios';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync();

const useApplicationData = () => {
  const loggedInUser = localStorage.getItem('username');

  const [state, setState] = useState({
    username: loggedInUser,
    todo: [],
    user: [],
    users: [],
  });

  const signupUser = (username, password) => {
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = {
      username,
      password: hashedPassword,
    };

    const users = [
      ...state.users,
      {
        username,
        password: hashedPassword,
      },
    ];

    return axios
      .post('/register', newUser)
      .then(() => setState(prev => ({ ...prev, users })));
  };

  const loginUser = (username, password) => {
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = [
      {
        username,
        password: hashedPassword,
      },
    ];

    return axios
      .post('/login', user)
      .then(() => {
        setState(prev => {
          return { ...prev, username: user[0].username };
        });
      })
      .then(() => localStorage.setItem('username', user[0].username));
  };

  const addTask = newTask => {
    const updatedTasks = [
      ...state.todo,
      {
        todo: newTask,
      },
    ];

    const task = {
      todo: newTask,
      username: state.username,
      id: state.user[0].id,
    };

    setState(prev => {
      return {
        ...prev,
        todo: updatedTasks,
      };
    });

    return axios.post('/addTask/', task);
  };

  const deleteAllTask = () => {
    setState({ ...state, todo: [] });
    return axios.delete(`/deleteAllTask/${state.user[0].id}/`);
  };

  const deleteTask = index => {
    const deletedTask = state.todo.splice(index, 1);

    const updatedTasks = state.todo
      .filter(item => !Array.isArray(item))
      .map(item =>
        state.todo.length[index + 1] ? state.todo.splice(index, 1) : item
      );

    return axios
      .delete(`/deleteTask/${state.user[0].id}`, {
        data: { todo: deletedTask[0].todo },
      })
      .then(() =>
        setState(prev => {
          return { ...prev, todo: updatedTasks };
        })
      );
  };

  const updateTask = (index, oldTask, newTask) => {
    const data = {
      updatedTask: newTask,
      oldTask,
    };

    state.todo[index].todo = newTask;

    return axios
      .put(`/updateTask/${state.user[0].id}`, data)
      .then(() => setState(prev => ({ ...prev, todo: state.todo })));
  };

  const logoutUser = () => {
    setState(prev => ({ ...prev, username: '' }));
  };

  useEffect(() => {
    const apiUsers = '/users';
    axios
      .get(apiUsers)
      .then(data => setState(prev => ({ ...prev, users: data.data })));
  }, []);

  useEffect(() => {
    if (!state.username) return;

    const apiTodo = `/${state.username}/tasks`;
    const apiUser = `/user/${state.username}`;

    Promise.all([axios.get(apiTodo), axios.get(apiUser)]).then(all => {
      setState(prev => ({
        ...prev,
        todo: all[0].data,
        user: all[1].data,
      }));
    });
  }, [state.username]);

  return {
    loggedInUser,
    state,
    signupUser,
    loginUser,
    addTask,
    deleteAllTask,
    deleteTask,
    updateTask,
    logoutUser,
  };
};

export default useApplicationData;
