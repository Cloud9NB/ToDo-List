import Signup from './Signup';
import Login from './Login';
import Main from './mainView/Main';
import useApplicationData from '../hooks/hook';
import { Route, Routes, Navigate } from 'react-router-dom';
import { createContext } from 'react';
import NotFound from './mainView/NotFound';

export const AllContext = createContext(null);

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
    <AllContext.Provider
      value={{
        logoutUser,
        state,
        signupUser,
        loginUser,
        addTask,
        deleteAllTask,
        deleteTask,
        updateTask,
      }}
    >
      <Routes>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Navigate replace to='/signup' />} />
        <Route exact path='/todo' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AllContext.Provider>
  );
};

export default App;
