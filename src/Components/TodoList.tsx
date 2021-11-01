import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <>
    <h2>List of todos</h2>
    <ul>
    {todos.map(todo => (
      <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </ul>
  </>
  )
}