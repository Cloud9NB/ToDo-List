import { useState } from 'react';

const EditTaskForm = ({ index, todo, updateTask }) => {
  const [updatedTask, setUpdatedTask] = useState('');

  const updatesTask = (index, oldTask, newTask) => {
    updateTask(index, oldTask, newTask);
  };

  return (
    <section className='row gy-2 gx-3 align-items-center'>
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
            Update Task
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
          }}
        >
          Update Task
        </button>
      </div>
    </section>
  );
};

export default EditTaskForm;
