import { useState } from 'react';
import '../css/signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = ({ signupUser }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const signup = (username, password) =>
    signupUser(username, password).then(() => navigate('/login'));

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
                    <h5 className='fw-bold mb-0'>Please Sign Up</h5>
                    <i className='fas fa-user-astronaut fa-3x my-5'></i>

                    <div className='form-outline mb-4'>
                      <input
                        className='form-control form-control-lg'
                        type='text'
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
                        signup(state.username, state.password);
                      }}
                    >
                      Register
                    </button>
                  </div>

                  <div>
                    <p className='mb-0'>
                      Already have an account?{' '}
                      <a
                        href='#!'
                        className='text-body fw-bold'
                        onClick={() => navigate('/login')}
                      >
                        Login
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
    // <div className='signup-form'>
    //   <form>
    //     <h3>Sign Up Now</h3>
    //     <label>Username: </label>
    //     <input
    //       type='text'
    //       value={state.username}
    //       placeholder='Enter your username'
    //       onChange={event =>
    //         setState({ ...state, username: event.target.value })
    //       }
    //     />
    //     <label>Password: </label>
    //     <input
    //       type='password'
    //       value={state.password}
    //       placeholder='Enter your password'
    //       onChange={event =>
    //         setState({ ...state, password: event.target.value })
    //       }
    //     />
    //     <button
    //       onClick={event => {
    //         event.preventDefault();
    //         signup(state.username, state.password);
    //       }}
    //     >
    //       Sign Up
    //     </button>
    //   </form>
    // </div>
  );
};

export default Signup;
