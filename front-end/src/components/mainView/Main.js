import { useState } from 'react';
import '../../css/todoList.css';
import AddTask from './AddTask';
import SearchTask from './SearchTask';
import TodoList from './TodoList';
import TodoTable from './TodoTable';

const Main = ({ todo, addTask, deleteAllTask, deleteTask }) => {
  const [state, setState] = useState({
    searchTask: '',
    searchValue: '',
  });

  const findTask = search =>
    todo.filter(
      task =>
        search === '' || task.todo.toLowerCase().includes(search.toLowerCase())
    );

  const tasks = findTask(state.searchValue).map((task, index) => (
    <TodoList
      index={index}
      key={index}
      todo={task.todo}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div>
      <br />
      <AddTask addTask={addTask} />
      <br />
      <SearchTask
        deleteAllTask={deleteAllTask}
        searchTask={state.searchTask}
        setState={setState}
      />
      <br />
      <TodoTable
        tasks={tasks}
        todo={todo}
        deleteTask={deleteTask}
        searchValue={state.searchValue}
      />
    </div>
  );
};

export default Main;
