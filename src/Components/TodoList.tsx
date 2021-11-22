import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { TodoListItem } from './TodoListItem';
import './TodoList.css'

interface Props {
  todos: ITodo[];
  // toggleTodo: ToggleTodo;
  // removeTodo: RemoveTodo;
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
    <h2>List of todos</h2>
    <ListGroup as="ul">
    {todos.map((todo: ITodo) => (
      <TodoListItem key={todo.name} todo={todo} />
    ))}
  </ListGroup>
  </>
  )
}