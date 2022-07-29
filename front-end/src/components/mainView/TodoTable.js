import TodoList from './TodoList';
import { useContext } from 'react';
import { AllContext } from '../App';

const TodoTable = ({ searchValue }) => {
  const { state } = useContext(AllContext);

  const findTask = search =>
    state.todo.filter(
      task =>
        search === '' || task.todo.toLowerCase().includes(search.toLowerCase())
    );

  const tasks = findTask(searchValue).map((task, index) => (
    <TodoList index={index} key={index} todo={task.todo} />
  ));

  return (
    <table className='table align-middle mb-0 bg-white table-hover'>
      <thead className='bg-light'>
        <tr>
          <th scope='col'>
            <div className='form-check'>
              <input className='form-check-input d-none' />
            </div>
          </th>
          <th>ToDo</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      {tasks}
    </table>
  );
};

export default TodoTable;
