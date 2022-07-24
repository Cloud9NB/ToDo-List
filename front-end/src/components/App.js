import Signup from './Signup';
import Login from './Login';
import TodoList from './TodoList';
import useVisualMode from '../hooks/useVisualMode';
import useApplicationData from '../hooks/hook';

const App = () => {
  const { state } = useApplicationData();

  const LOGIN = 'LOGIN';
  const SIGNUP = 'SIGNUP';
  const SHOW = 'SHOW';

  const { mode, transition, back } = useVisualMode(state.users ? SHOW : LOGIN);

  return (
    <div>
      <Signup />
      {/* {mode === SIGNUP && <Signup />}
      {mode === LOGIN && <Login />}
      {mode === SHOW && <TodoList />} */}
    </div>
  );
};

export default App;
