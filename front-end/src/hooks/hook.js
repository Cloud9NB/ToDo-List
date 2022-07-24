import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state, setState] = useState({
    user: '',
    todo: '',
  });
  console.log(state.user);
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
        return { ...prev, user: user[0].username };
      });
    });
  };

  useEffect(() => {
    const apiTodo = 'http://localhost:8001/api/register';
  });

  return {
    state,
    signupUser,
    loginUser,
  };
};

export default useApplicationData;
