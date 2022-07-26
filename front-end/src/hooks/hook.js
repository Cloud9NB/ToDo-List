import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state, setState] = useState({
    username: '',
    todo: [],
    user: [],
  });

  const signupUser = (username, password) => {
    const newUser = {
      username,
      password,
    };

    return axios.post('http://localhost:8001/api/register', newUser);
  };

  const loginUser = (username, password) => {
    const user = [
      {
        username,
        password,
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
      {
        todo: newTask,
      },
      ...state.todo,
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
      `http://localhost:8001/api/deleteTask/${state.user[0].id}/`
    );
  };

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
  };
};

export default useApplicationData;
