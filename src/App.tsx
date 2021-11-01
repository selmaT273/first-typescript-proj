import React from 'react';
import './App.css';
import { TodoListItem } from './Components/TodoListItem';

const todos: Todo[] = [
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
  return (
    <>
      <TodoListItem todo={todos[0]}/>
      <TodoListItem todo={todos[1]}/>
    </>
  );
}

export default App;
