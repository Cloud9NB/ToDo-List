import { useState } from 'react';
import '../css/login.css';

const Login = ({ loginUser, transition }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const login = (username, password) => {
    loginUser(username, password).then(() => transition('SHOW'));
  };

  return (
    <div className='login-form'>
      <form>
        <h3>Login</h3>
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
            login(state.username, state.password);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
