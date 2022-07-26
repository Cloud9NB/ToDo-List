import { useState } from 'react';
import '../css/todoList.css';

const TodoList = ({ todo, addTask, deleteAllTask }) => {
  const [state, setState] = useState({
    newTask: '',
    searchTask: '',
    searchValue: '',
  });

  const findTask = search =>
    todo.filter(
      task =>
        search === '' || task.todo.toLowerCase().includes(search.toLowerCase())
    );

  const tasks = findTask(state.searchValue).map((task, index) => {
    return (
      <section key={index}>
        <input type='checkbox' />
        {task.todo}
        <button>Edit</button>
        <button>Delete</button>
      </section>
    );
  });

  const addNewTask = newTask => {
    addTask(newTask);
    setState({ ...state, newTask: '' });
  };

  return (
    <div>
      <section>
        <label>Task: </label>
        <input
          className='task'
          type='text'
          value={state.newTask}
          placeholder='Enter your new task'
          onChange={event => {
            event.preventDefault();
            setState({ ...state, newTask: event.target.value });
          }}
        />
        <button onClick={() => addNewTask(state.newTask)}>Add</button>
      </section>

      <section>
        <label>Search: </label>
        <input
          className='task'
          type='text'
          value={state.searchTask}
          placeholder='Search for your tasks'
          onChange={event => {
            event.preventDefault();
            setState({ ...state, searchTask: event.target.value });
          }}
        />
        <button
          onClick={() =>
            setState(prev => ({
              ...prev,
              searchValue: prev.searchTask,
              searchTask: '',
            }))
          }
        >
          Find
        </button>
        <button>Delete</button>
      </section>

      <section>
        {tasks}
        <button onClick={() => deleteAllTask()}>Delete All</button>
      </section>
    </div>
  );
};

export default TodoList;
