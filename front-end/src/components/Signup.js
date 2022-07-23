import { useState } from 'react';
import '../css/signup.css';

const Signup = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const signup = (username, password) => {};

  return (
    <div className='signup-form'>
      <form>
        <h3>Sign Up Now</h3>
        <label>Username: </label>
        <input
          type='text'
          value={state.username}
          placeholder='Enter your username'
          onChange={event =>
            setState({ ...state, username: event.target.value })
          }
        />
        <label>Password: </label>
        <input
          type='password'
          value={state.password}
          placeholder='Enter your password'
          onChange={event =>
            setState({ ...state, password: event.target.value })
          }
        />
        <button
          onClick={event => {
            event.preventDefault();
            signup(state.username, state.password);
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
