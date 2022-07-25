import '../css/todoList.css';

const TodoList = ({ todo }) => {
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

  return (
    <div>
      <section>
        <label>Task: </label>
        <input
          className='task'
          type='text'
          value=''
          placeholder='Enter your new task'
          onChange={event => {}}
        />
        <button>Add</button>
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
