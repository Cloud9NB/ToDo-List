import { useState } from 'react';
import '../css/signup.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AllContext } from './App';

const Signup = () => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });

  const { signupUser, state } = useContext(AllContext);

  const navigate = useNavigate();

  const validate = (username, password) => {
    const userExist = state.users.find(user => user.username === username);
    const checksSpaces =
      username.indexOf(' ') >= 0 || password.indexOf(' ') >= 0;

    if (checksSpaces)
      alert('You can not register with a username or password with spaces');

    if (userExist) alert('This username already exist');

    if (!username || !password) alert('Please fill in all fields');

    if (username && password && !userExist && !checksSpaces)
      signupUser(username, password).then(() => navigate('/login'));
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
                    <h5 className='fw-bold mb-0'>Please Sign Up</h5>
                    <i className='fas fa-user-astronaut fa-3x my-5'></i>

                    <div className='form-outline mb-4'>
                      <input
                        className='form-control form-control-lg'
                        type='text'
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
                        validate(account.username, account.password);
                      }}
                    >
                      Register
                    </button>
                  </div>

                  <div>
                    <p className='mb-0'>
                      Already have an account?{' '}
                      <a href='/login' className='text-body fw-bold'>
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
  );
};

export default Signup;
