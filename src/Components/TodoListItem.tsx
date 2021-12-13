import React, { useState } from 'react';
import { Button, Toast, OverlayTrigger, Tooltip }from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
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
  const dueDateString = dueDate?.toISOString();
  const dueDateArr = dueDateString?.split('T');
  const fullDate = dueDateArr ? dueDateArr[0] : null;
  const dateArr = fullDate?.split('-');
  const formattedDueDate = dateArr ? `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}` :  '';

  const [stateOfToast, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: stateOfToast ? 1 : 0,
    config: { duration: 900 },
  })
  return (
    <>
    <animated.div 
      className="toast-container"
      style={{
        opacity: x.to({ range: [0, 1],  output: [0.4, 1] }),
        scale: x.to({
          range: [0, 0.25, 0.35, 0.55, 0.65, 0.75, 1],
          output: [1, 0.97, 0.9, 0.9, 1.1, 1.03, 1],
        }),
      }}>
    <Toast className="mb-4" onClose={() => {removeTodo(todo._id)}}>
      <Toast.Header>
        <Button 
          size="sm"
          variant={ todo.status ? "secondary" : "light"}
          onClick={() => {
            toggleTodo(todo);
            toggle(!stateOfToast)
          }}>
            {todo.status ? "Complete" : "Pending" }
        </Button>
        <OverlayTrigger
          placement="top"
          delay={{show: 250, hide: 400}}
          overlay={<Tooltip>Created on: { formattedDateCreated }</Tooltip>}>
        <span>
          { todo.name }
        </span>
        </OverlayTrigger>
      </Toast.Header>
      <Toast.Body>
        <p>{todo.description}</p>
        <p className="due-date">{formattedDueDate ? `Due: ${formattedDueDate}` : null}</p>
      </Toast.Body>
    </Toast>
    </animated.div>
    </>
  )
}