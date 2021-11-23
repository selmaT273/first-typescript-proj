import React from 'react';
import { Button, Card }from 'react-bootstrap';
import './TodoListItem.css';

interface Props {
  todo: ITodo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <>
    <Card className="mb-2">
      <Card.Body>
      <input
        type="checkbox" 
        checked={ todo.status }
        onClick={() => {
          toggleTodo(todo);
        }}
      />
      <p style={{ textDecoration: todo.status ? 'line-through' : undefined }}>
        { todo.name }
      </p>
      <Button type="submit" variant="outline-danger" onClick={() => {
        removeTodo(todo._id)
      }}>Delete</Button>
      </Card.Body>
    </Card>
    </>
  )
}