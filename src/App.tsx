import React, { useState } from 'react';
import './App.css';
import { TodoList } from './Components/TodoList';
import { TodoForm } from './Components/TodoForm';


function App() {
  const [todos, setTodos] = useState([] as Todo[]);

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
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
    <h1>Todo App</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <TodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
