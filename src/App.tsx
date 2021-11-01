import React, { useState } from 'react';
import './App.css';
import { TodoListItem } from './Components/TodoListItem';

const initialTodos: Todo[] = [
  {
    text: 'do laundry',
    complete: false,
  },
  {
    text: 'grade papers',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  // selectedTodo inherits from Todo interface
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return (
    <>
    <ul>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </ul>
    </>
  );
}

export default App;
