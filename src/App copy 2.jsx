import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { addTodo, selectTodos } from './todoSlice';

function App3() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo('New Todo'));
  }

  if (!todos || todos.length === 0) {
    return (
      <h1>To do not found</h1>
    )
  }

  return (
    <>
      <h1>App 3</h1>
      {
        todos.map((todo, index) => (
          <h1 key={`${index}-${todo}`}>{todo}</h1>
        ))
      }
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  )
}

export default App3