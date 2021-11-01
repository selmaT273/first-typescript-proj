import React, { useState } from 'react';
import './App.css';
import { TodoList } from './Components/TodoList';
import { TodoForm } from './Components/TodoForm';

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
    <h1>Todo App</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <TodoForm />
    </>
  );
}

export default App;
