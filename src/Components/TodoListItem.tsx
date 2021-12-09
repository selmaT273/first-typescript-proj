import React from 'react';
import { Button, Toast, OverlayTrigger, Tooltip }from 'react-bootstrap';
import './TodoListItem.css';

interface Props {
  todo: ITodo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {

  const dateCreated = todo.createdAt ? new Date(todo.createdAt) : null;
  const formattedDate = dateCreated ? dateCreated.toLocaleDateString('en-us', {year: 'numeric', month: '2-digit', day:'2-digit'}) : null;
 
  return (
    <>
    <OverlayTrigger
      placement="top-end"
      delay={{show: 250, hide: 400}}
      overlay={<Tooltip>Created on: { formattedDate }</Tooltip>}>
    <Toast className="mb-4" onClose={() => {removeTodo(todo._id)}}>
      <Toast.Header>
        <Button 
          size="sm"
          variant={ todo.status ? "secondary" : "light"}
          onClick={() => {
            toggleTodo(todo);
          }}>
            {todo.status ? "Complete" : "Pending" }
        </Button>
        <span style={{ textDecoration: todo.status ? 'line-through' : undefined }}>
          { todo.name }
        </span>
      </Toast.Header>
      <Toast.Body>
        <p style={{ textDecoration: todo.status ? 'line-through' : undefined }}>
          { todo.description }
        </p>
      </Toast.Body>
    </Toast>
    </OverlayTrigger>
    </>
  )
}