import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface Props {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <>
    <h2>Add a todo item</h2>
    <Form>
      <Form.Group controlId="todoItem">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={text} onChange={e => {setText(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={e => {
        e.preventDefault();
        addTodo(text);
        setText('')}}>
          Add Todo
      </Button>
    </Form>
    </>
  );
};