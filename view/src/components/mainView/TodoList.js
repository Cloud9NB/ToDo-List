import { useState } from 'react';
import EditTaskForm from './EditTask';
import { useContext } from 'react';
import { AllContext } from '../App';

const TodoList = ({ index, todo }) => {
  const { deleteTask } = useContext(AllContext);

  const [state, setState] = useState({
    check: false,
    editClick: false,
  });

  const deleteSingleTask = index => {
    deleteTask(index);
  };

  const classNames = require('classnames');
  const strikeThrough = classNames('', {
    'text-decoration-line-through': state.check,
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
            <div>
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
      <EditTaskForm
        index={index}
        todo={todo}
        setState={setState}
        editClick={state.editClick}
      />
    </tbody>
  );
};

export default TodoList;
