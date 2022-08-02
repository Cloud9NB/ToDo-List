import '../../css/notFound.css';

const NotFound = () => {
  return (
    <div className='error-template'>
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
      <p>Sorry, an error has occurred, Requested page not found!</p>
      <div>
        <a href='/login' className='btn btn-primary btn-lg'>
          <span></span>
          Take Me To The Login Form{' '}
        </a>
      </div>
      <br />
      <div>
        <a href='/todo' className='btn btn-primary btn-lg'>
          <span></span>
          If you are already logged in{' '}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
