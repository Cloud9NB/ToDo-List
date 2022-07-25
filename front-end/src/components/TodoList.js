import { useState } from 'react';
import '../css/todoList.css';

const TodoList = ({ todo, addTask }) => {
  const [task, setTask] = useState('');

  const tasks = todo.map((task, index) => {
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
    setTask('');
  };

  return (
    <div>
      <section>
        <label>Task: </label>
        <input
          className='task'
          type='text'
          value={task}
          placeholder='Enter your new task'
          onChange={event => {
            event.preventDefault();
            setTask(event.target.value);
          }}
        />
        <button onClick={() => addNewTask(task)}>Add</button>
      </section>

      <section>
        <label>Search: </label>
        <input
          className='task'
          type='text'
          value=''
          placeholder='Search for your tasks'
          onChange={event => {}}
        />
        <button>Find</button>
        <button>Delete</button>
      </section>

      <section>
        {tasks}
        <button>Delete All</button>
      </section>
    </div>
  );
};

export default TodoList;
