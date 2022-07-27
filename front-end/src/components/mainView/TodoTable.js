const TodoTable = ({ index, todo, deleteTask }) => {
  const deleteSingleTask = index => {
    deleteTask(index);
  };

  return (
    <tbody>
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
              <p className='fw-bold mb-1'>{todo}</p>
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

export default TodoTable;
