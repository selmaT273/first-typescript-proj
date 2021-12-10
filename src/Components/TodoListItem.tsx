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
  const formattedDateCreated = dateCreated ? dateCreated.toLocaleDateString('en-us', {year: '2-digit', month: '2-digit', day:'2-digit'}) : null;
  const dueDate = todo.dueDate ? new Date(todo.dueDate) : null;
  const dueDateUTC = dueDate?.toUTCString();
  const formattedDueDate = dueDateUTC ? dueDateUTC.split(' ').slice(0, 4).join(' ') : null;
  return (
    <>
    
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
        <OverlayTrigger
          placement="top"
          delay={{show: 250, hide: 400}}
          overlay={<Tooltip>Created on: { formattedDateCreated }</Tooltip>}>
        <span style={{ textDecoration: todo.status ? 'line-through' : undefined }}>
          { todo.name }
        </span>
        </OverlayTrigger>
      </Toast.Header>
      <Toast.Body>
        {/* <p style={{ textDecoration: todo.status ? 'line-through' : undefined }}>
          { todo.description }
        </p> */}
        <p>{todo.description}</p>
        <p className="due-date">{formattedDueDate ? `Due: ${formattedDueDate}` : null}</p>
      </Toast.Body>
    </Toast>
    </>
  )
}