import { useState } from 'react';

const TodoList = ({ index, todo, deleteTask }) => {
  const [check, setCheck] = useState(false);

  const deleteSingleTask = index => {
    deleteTask(index);
  };

  const classNames = require('classnames');
  const strikeThrough = classNames('ms-3', {
    'text-decoration-line-through': check,
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
              onClick={() => setCheck(!check)}
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
};

export default TodoList;
