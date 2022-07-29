import Signup from './Signup';
import Login from './Login';
import Main from './mainView/Main';
import TopNav from './mainView/TopNav';
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
    logoutUser,
  } = useApplicationData();

  return (
    <div>
      <TopNav logoutUser={logoutUser} username={state.username} />
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
