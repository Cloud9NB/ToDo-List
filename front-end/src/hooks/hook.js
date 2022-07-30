import { useState, useEffect } from 'react';
import axios from 'axios';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync();

const useApplicationData = () => {
  const [state, setState] = useState({
    username: '',
    todo: [],
    user: [],
    users: [],
  });
  console.log(state.user);
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
      .post('http://localhost:8001/api/register', newUser)
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

    return axios.post('http://localhost:8001/api/login', user).then(() => {
      setState(prev => {
        return { ...prev, username: user[0].username };
      });
    });
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

    return axios.post('http://localhost:8001/api/addTask/', task);
  };

  const deleteAllTask = () => {
    setState({ ...state, todo: [] });
    return axios.delete(
      `http://localhost:8001/api/deleteAllTask/${state.user[0].id}/`
    );
  };

  const deleteTask = index => {
    const deletedTask = state.todo.splice(index, 1);

    const updatedTasks = state.todo
      .filter(item => !Array.isArray(item))
      .map(item =>
        state.todo.length[index + 1] ? state.todo.splice(index, 1) : item
      );

    return axios
      .delete(`http://localhost:8001/api/deleteTask/${state.user[0].id}`, {
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
      .put(`http://localhost:8001/api/updateTask/${state.user[0].id}`, data)
      .then(() => setState(prev => ({ ...prev, todo: state.todo })));
  };

  const logoutUser = () => {
    setState(prev => ({ ...prev, username: '' }));
  };

  useEffect(() => {
    const apiUsers = 'http://localhost:8001/api/users';
    axios
      .get(apiUsers)
      .then(data => setState(prev => ({ ...prev, users: data.data })));
  }, []);

  useEffect(() => {
    if (state.username === '') return;

    const apiTodo = `http://localhost:8001/api/${state.username}/tasks`;
    const apiUser = `http://localhost:8001/api/user/${state.username}`;

    Promise.all([axios.get(apiTodo), axios.get(apiUser)]).then(all => {
      setState(prev => ({
        ...prev,
        todo: all[0].data,
        user: all[1].data,
      }));
    });
  }, [state.username]);

  return {
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
