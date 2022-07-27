import Signup from './Signup';
import Login from './Login';
import Main from './Main';
import useVisualMode from '../hooks/useVisualMode';
import useApplicationData from '../hooks/hook';

const App = () => {
  const { state, signupUser, loginUser, addTask, deleteAllTask, deleteTask } =
    useApplicationData();

  const LOGIN = 'LOGIN';
  const SIGNUP = 'SIGNUP';
  const SHOW = 'SHOW';

  const { mode, transition, back } = useVisualMode(
    state.username ? SHOW : SIGNUP
  );

  return (
    <div>
      {mode === SIGNUP && (
        <Signup signupUser={signupUser} transition={transition} />
      )}
      {mode === LOGIN && (
        <Login loginUser={loginUser} transition={transition} />
      )}
      {mode === SHOW && (
        <Main
          todo={state.todo}
          addTask={addTask}
          deleteAllTask={deleteAllTask}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
};

export default App;
