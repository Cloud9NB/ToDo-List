import { useNavigate } from 'react-router-dom';
import '../../css/topNav.css';

const TopNav = ({ logoutUser, username }) => {
  const navigate = useNavigate();

  const logout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div className='topNav'>
      <div>
        <p className='text-body fw-bold'>Welcome Back: {username}</p>
      </div>

      <div>
        <a href='#!' className='text-body fw-bold' onClick={() => logout()}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default TopNav;
