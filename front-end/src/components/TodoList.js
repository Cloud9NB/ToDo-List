import { useState } from 'react';
import '../css/todoList.css';
import AddTask from './mainView/AddTask';
import SearchTask from './mainView/SearchTask';

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

  const tasks = findTask(state.searchValue).map((task, index) => {
    return (
      <tbody key={index}>
        <tr>
          <th scope='row'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDefault'
              />
            </div>
          </th>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{task.todo}</p>
              </div>
            </div>
          </td>
          <td>
            <button
              type='button'
              className='btn btn-link btn-rounded btn-sm fw-bold'
              data-mdb-ripple-color='dark'
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type='button'
              className='btn btn-link btn-rounded btn-sm fw-bold'
              id='delete-button'
              onClick={event => {
                event.preventDefault();
                deleteSingleTask(index);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  const deleteSingleTask = index => {
    deleteTask(index);
  };

  return (
    <div>
      <br></br>
      <AddTask addTask={addTask} />
      <br></br>
      <SearchTask
        deleteAllTask={deleteAllTask}
        searchTask={state.searchTask}
        setState={setState}
      />
      <br></br>

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
