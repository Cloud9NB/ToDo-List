import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state, setState] = useState({
    user: '',
    todo: '',
  });
  console.log(state.user);
  const signupUser = (username, password) => {
    const user = [
      {
        username,
        password,
      },
      ...state.user,
    ];

    const newUser = {
      username,
      password,
    };

    return axios
      .post(`http://localhost:8001/api/register`, newUser)
      .then(() => {
        setState(prev => {
          return { ...prev, user };
        });
      });
  };

  useEffect(() => {
    const apiTodo = 'http://localhost:8001/api/register';
  });

  return {
    state,
    signupUser,
  };
};

export default useApplicationData;
