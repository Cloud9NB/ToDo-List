import TodoList from './TodoList';

const TodoTable = ({ todo, deleteTask, searchValue }) => {
  const findTask = search =>
    todo.filter(
      task =>
        search === '' || task.todo.toLowerCase().includes(search.toLowerCase())
    );

  const tasks = findTask(searchValue).map((task, index) => (
    <TodoList
      index={index}
      key={index}
      todo={task.todo}
      deleteTask={deleteTask}
    />
  ));

  return (
    <table className='table align-middle mb-0 bg-white table-hover'>
      <thead className='bg-light'>
        <tr>
          <th scope='col'>
            <div className='form-check'>
              <input className='form-check-input d-none' />
            </div>
          </th>
          <th>ToDo</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      {tasks}
    </table>
  );
};

export default TodoTable;
