import { createContext } from 'react';
import useApplicationData from '../../hooks/hook';

export const AllContext = createContext(null);

const AllContextProvider = ({ children }) => {
  const {
    loggedInUser,
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
        loggedInUser,
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
      {children}
    </AllContext.Provider>
  );
};

export default AllContextProvider;
