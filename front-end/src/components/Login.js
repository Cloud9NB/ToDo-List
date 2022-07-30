import { useState } from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AllContext } from './App';

const Login = () => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });

  const { loginUser, state } = useContext(AllContext);

  const navigate = useNavigate();

  const login = (username, password) => {
    const userExist = state.users.find(
      user => user.username === username && user.password === password
    );

    if (!userExist) alert('Username or password does not match');

    if (!username || !password) alert('Please fill in all fields');

    if (username && password && userExist)
      loginUser(username, password).then(() => navigate('/todo'));
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
                    <h5 className='fw-bold mb-0'>Please Login</h5>

                    <i className='fas fa-user-astronaut fa-3x my-5'></i>

                    <div className='form-outline mb-4'>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        value={account.username}
                        placeholder='Enter your username'
                        onChange={event =>
                          setAccount({
                            ...account,
                            username: event.target.value,
                          })
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
                        value={account.password}
                        placeholder='Enter your password'
                        onChange={event =>
                          setAccount({
                            ...account,
                            password: event.target.value,
                          })
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
                        login(account.username, account.password);
                      }}
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className='mb-0'>
                      Don't have an account?{' '}
                      <a
                        href='#!'
                        className='text-body fw-bold'
                        onClick={() => navigate('/signup')}
                      >
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
