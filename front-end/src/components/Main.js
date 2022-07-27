import { useState } from 'react';
import '../css/todoList.css';
import AddTask from './mainView/AddTask';
import SearchTask from './mainView/SearchTask';
import TodoTable from './mainView/TodoTable';

const TodoList = ({ todo, addTask, deleteAllTask, deleteTask }) => {
  const [state, setState] = useState({
    searchTask: '',
    searchValue: '',
  });

  const findTask = search =>
    todo.filter(
      task =>
        search === '' || task.todo.toLowerCase().includes(search.toLowerCase())
    );

  const tasks = findTask(state.searchValue).map((task, index) => (
    <TodoTable
      index={index}
      key={index}
      todo={task.todo}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div>
      <br />
      <AddTask addTask={addTask} />
      <br />
      <SearchTask
        deleteAllTask={deleteAllTask}
        searchTask={state.searchTask}
        setState={setState}
      />
      <br />

      <section>
        <table className='table align-middle mb-0 bg-white table-hover'>
          <thead className='bg-light'>
            <tr>
              <th scope='col'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                    disabled
                  />
                </div>
              </th>
              <th>ToDo</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          {tasks}
        </table>
      </section>
    </div>
  );
};

export default TodoList;
