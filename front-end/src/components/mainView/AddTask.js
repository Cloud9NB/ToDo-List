import { useState, useContext } from 'react';
import { AllContext } from '../App';

const AddTask = () => {
  const { addTask } = useContext(AllContext);

  const [newTask, setNewTask] = useState('');

  const addNewTask = newTask => {
    addTask(newTask);
    setNewTask('');
  };
  return (
    <section className='row gy-2 gx-3 align-items-center'>
      <div className='col-auto'>
        <div className='form-outline'>
          <input
            type='text'
            className='form-control'
            value={newTask}
            placeholder='Enter your new task'
            onChange={event => {
              event.preventDefault();
              setNewTask(event.target.value);
            }}
          />
          <label className='form-label' htmlFor='form11Example3'>
            New Task
          </label>
        </div>
      </div>

      <div className='col-auto'>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={() => addNewTask(newTask)}
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default AddTask;
