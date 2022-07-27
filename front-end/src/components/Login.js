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
    <section className='intro'>
      <div className='mask d-flex align-items-center h-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div className='card'>
                <div className='card-body p-5 text-center'>
                  <div className='my-md-5 pb-5'>
                    <h1 className='fw-bold mb-0'>Welcome</h1>

                    <i className='fas fa-user-astronaut fa-3x my-5'></i>

                    <div className='form-outline mb-4'>
                      <input
                        type='text'
                        id='typeEmail'
                        className='form-control form-control-lg'
                        value={state.username}
                        placeholder='Enter your username'
                        onChange={event =>
                          setState({ ...state, username: event.target.value })
                        }
                      />
                      <label className='form-label' htmlFor='typeEmail'>
                        Username
                      </label>
                    </div>

                    <div className='form-outline mb-5'>
                      <input
                        type='password'
                        id='typePassword'
                        className='form-control form-control-lg'
                        value={state.password}
                        placeholder='Enter your password'
                        onChange={event =>
                          setState({ ...state, password: event.target.value })
                        }
                      />
                      <label className='form-label' htmlFor='typePassword'>
                        Password
                      </label>
                    </div>

                    <button
                      className='btn btn-primary btn-lg btn-rounded gradient-custom text-body px-5'
                      type='submit'
                      onClick={event => {
                        event.preventDefault();
                        login(state.username, state.password);
                      }}
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className='mb-0'>
                      Don't have an account?{' '}
                      <a href='#!' className='text-body fw-bold'>
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
