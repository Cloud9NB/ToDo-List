import Signup from './Signup';
import Login from './Login';
import TodoList from './TodoList';
import useVisualMode from '../hooks/useVisualMode';
import useApplicationData from '../hooks/hook';

const App = () => {
  const { state, signupUser, loginUser } = useApplicationData();

  const LOGIN = 'LOGIN';
  const SIGNUP = 'SIGNUP';
  const SHOW = 'SHOW';

  const { mode, transition, back } = useVisualMode(state.user ? SHOW : LOGIN);

  return (
    <div>
      {mode === SIGNUP && (
        <Signup signupUser={signupUser} transition={transition} />
      )}
      {mode === LOGIN && (
        <Login loginUser={loginUser} transition={transition} />
      )}
      {mode === SHOW && <TodoList />}
    </div>
  );
};

export default App;
