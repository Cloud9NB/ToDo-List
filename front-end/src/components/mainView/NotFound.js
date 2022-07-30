import '../../css/notFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='error-template'>
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
      <p>Sorry, an error has occurred, Requested page not found!</p>
      <div>
        <a
          href='http://www.jquery2dotnet.com'
          className='btn btn-primary btn-lg'
          onClick={event => {
            event.preventDefault();
            navigate('/login');
          }}
        >
          <span></span>
          Take Me To The Login Form{' '}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
