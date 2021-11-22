import React from 'react';
import { Button, ListGroup, Row, Col }from 'react-bootstrap';
import './TodoListItem.css';

interface Props {
  todo: ITodo;
  toggleTodo: ToggleTodo;
  // removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <>
    <ListGroup.Item as="li" variant="light">
      <label style={{ textDecoration: todo.status ? 'line-through' : undefined }}>
      <Row>
      <Col className="col-2">
        <input 
          type="checkbox" 
          checked={ todo.status }
          onClick={() => {
            toggleTodo(todo);
          }}
        />
        </Col>
        <Col>
        { todo.description }
        </Col>
        <Col>
        <Button type="submit" variant="outline-danger" onClick={() => {
          // removeTodo(todo)
        }}>Delete</Button>
        </Col>
        </Row>
      </label>
    </ListGroup.Item>
    </>
  )
}