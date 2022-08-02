import { useNavigate } from 'react-router-dom';
import '../../css/topNav.css';
import { useContext } from 'react';
import { AllContext } from '../App';

const TopNav = () => {
  const { logoutUser, state } = useContext(AllContext);

  const navigate = useNavigate();

  const logout = () => {
    logoutUser();
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className='topNav'>
      <div>
        <p className='text-body fw-bold'>Welcome Back: {state.username}</p>
      </div>

      <div>
        <button className='btn btn-danger' onClick={() => logout()}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default TopNav;
