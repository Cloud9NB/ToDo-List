import { useState } from 'react';
import EditTaskForm from './EditTask';
const classNames = require('classnames');

const TodoList = ({ index, todo, deleteTask, updateTask }) => {
  const [state, setState] = useState({
    check: false,
    editClick: false,
  });
  const deleteSingleTask = index => {
    deleteTask(index);
  };

  const strikeThrough = classNames('ms-3', {
    'text-decoration-line-through': state.check,
  });

  const modal = classNames('row gy-2 gx-3 align-items-center', {
    'd-none': !state.editClick,
  });

  return (
    <tbody>
      <tr>
        <th scope='row'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              onClick={() =>
                setState(prev => ({ ...prev, check: !state.check }))
              }
            />
          </div>
        </th>

        <td>
          <div className='d-flex align-items-center'>
            <div className='ms-3'>
              <p className={strikeThrough}>{todo}</p>
            </div>
          </div>
        </td>

        <td>
          <button
            type='button'
            className='btn btn-link btn-rounded btn-sm fw-bold'
            data-mdb-ripple-color='dark'
            onClick={event => {
              event.preventDefault();
              setState(prev => ({ ...prev, editClick: !state.editClick }));
            }}
          >
            Edit
          </button>
        </td>

        <EditTaskForm
          index={index}
          todo={todo}
          updateTask={updateTask}
          modal={modal}
          setState={setState}
          editClick={state.editClick}
        />

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
};

export default TodoList;
