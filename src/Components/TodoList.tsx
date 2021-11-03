import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { TodoListItem } from './TodoListItem';
import './TodoList.css'

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <>
    <h2>List of todos</h2>
    <ListGroup as="ul">
    {todos.map(todo => (
      <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    ))}
  </ListGroup>
  </>
  )
}