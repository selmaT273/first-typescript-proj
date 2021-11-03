import React from 'react';
import { Button, ListGroup, Row, Col }from 'react-bootstrap';
import './TodoListItem.css';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <>
    <ListGroup.Item as="li" variant="light">
      <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
      <Row>
      <Col className="col-2">
        <input 
          type="checkbox" 
          checked={ todo.complete }
          onClick={() => {
            toggleTodo(todo);
          }}
        />
        </Col>
        <Col>
        { todo.text }
        </Col>
        <Col>
        <Button type="submit" variant="outline-danger" onClick={() => {removeTodo(todo)}}>Delete</Button>
        </Col>
        </Row>
      </label>
    </ListGroup.Item>
    </>
  )
}