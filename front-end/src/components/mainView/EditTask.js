import { useState } from 'react';
import '../../css/editTask.css';

const EditTaskForm = ({ index, todo, updateTask, setState, editClick }) => {
  const [updatedTask, setUpdatedTask] = useState('');

  const updatesTask = (index, oldTask, newTask) => {
    updateTask(index, oldTask, newTask);
  };

  const classNames = require('classnames');
  const modal = classNames('row gy-2 gx-3 align-items-center', {
    'd-none': !editClick,
  });

  return (
    <section className={modal} id='modal'>
      <div id='modal-content'>
        <div className='col-auto'>
          <div className='form-outline'>
            <input
              type='text'
              className='form-control'
              value={updatedTask}
              placeholder='Enter your updated task'
              onChange={event => {
                event.preventDefault();
                setUpdatedTask(event.target.value);
              }}
            />
            <label className='form-label' htmlFor='form11Example3'>
              Edit Task
            </label>
          </div>
        </div>

        <div className='col-auto'>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={event => {
              event.preventDefault();
              updatesTask(index, todo, updatedTask);
              setUpdatedTask('');
              setState(prev => ({ ...prev, editClick: !editClick }));
            }}
          >
            Edit Task
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditTaskForm;
