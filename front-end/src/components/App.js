import Signup from './Signup';
import Login from './Login';
import Main from './mainView/Main';
import useApplicationData from '../hooks/hook';
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const {
    state,
    signupUser,
    loginUser,
    addTask,
    deleteAllTask,
    deleteTask,
    updateTask,
  } = useApplicationData();

  return (
    <div>
      <Routes>
        <Route
          exact
          path='/signup'
          element={<Signup signupUser={signupUser} />}
        />

        <Route exact path='/login' element={<Login loginUser={loginUser} />} />

        <Route exact path='/' element={<Navigate replace to='signup' />} />

        <Route
          exact
          path='/todo'
          element={
            <Main
              todo={state.todo}
              addTask={addTask}
              deleteAllTask={deleteAllTask}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
