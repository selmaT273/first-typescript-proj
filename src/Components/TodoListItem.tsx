import React from 'react';
import Button from 'react-bootstrap/Button';
import './TodoListItem.css';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <>
    <li>
      <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
        <input 
          type="checkbox" 
          checked={ todo.complete }
          onClick={() => {
            toggleTodo(todo);
          }}
        />
        {' '} 
        { todo.text }
        {' '}
        <Button type="submit" onClick={() => {removeTodo(todo)}}>Delete</Button>
      </label>
    </li>
    </>
  )
}