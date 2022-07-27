const SearchTask = ({ deleteAllTask, searchTask, setState }) => {
  return (
    <section className='row gy-2 gx-3 align-items-center'>
      <div className='col-auto'>
        <div className='form-outline'>
          <input
            type='text'
            id='form11Example3'
            className='form-control'
            value={searchTask}
            placeholder='Search for your tasks'
            onChange={event => {
              event.preventDefault();
              setState(prev => ({ ...prev, searchTask: event.target.value }));
            }}
          />
          <label className='form-label' htmlFor='form11Example3'>
            Search
          </label>
        </div>
      </div>
      <div className='col-auto'>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={() =>
            setState(prev => ({
              ...prev,
              searchValue: prev.searchTask,
              searchTask: '',
            }))
          }
        >
          Find
        </button>
      </div>
      <div>
        <button
          type='submit'
          className='btn btn-danger'
          onClick={() => deleteAllTask()}
        >
          Delete All
        </button>
      </div>
    </section>
  );
};

export default SearchTask;
