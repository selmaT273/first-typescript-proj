import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './TodoForm.css';
interface Props {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <>
    <h2>Add a todo item</h2>
    
    <Form className="form border rounded p-3 bg-light">
      <Form.Group controlId="todoName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Name of task"
        />
      </Form.Group>

      <Form.Group controlId="todoDescription" className="mt-1">
        <Form.Label className="todo-description-label">Description</Form.Label>
        <Form.Control 
          type="text"
          value={text}
          placeholder="Enter description"
          onChange={e => {setText(e.target.value)}}
        />
      </Form.Group>

      <Button className="mt-3" variant="primary" type="submit" onClick={e => {
        e.preventDefault();
        addTodo(text);
        setText('')}}>
          Add 
      </Button>
    </Form>
    </>
  );
};