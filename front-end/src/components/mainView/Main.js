import { useState } from 'react';
import '../../css/todoList.css';
import AddTask from './AddTask';
import SearchTask from './SearchTask';
import TodoList from './TodoList';
import TodoTable from './TodoTable';
import { useContext } from 'react';
import { AllContext } from '../App';

const Main = () => {
  const { state } = useContext(AllContext);

  const [search, searchState] = useState({
    searchTask: '',
    searchValue: '',
  });

  const findTask = search =>
    state.todo.filter(
      task =>
        search === '' || task.todo.toLowerCase().includes(search.toLowerCase())
    );

  const tasks = findTask(search.searchValue).map((task, index) => (
    <TodoList index={index} key={index} todo={task.todo} />
  ));

  return (
    <div>
      <br />
      <AddTask />
      <br />
      <SearchTask searchTask={search.searchTask} searchState={searchState} />
      <br />
      <TodoTable tasks={tasks} searchValue={search.searchValue} />
    </div>
  );
};

export default Main;
