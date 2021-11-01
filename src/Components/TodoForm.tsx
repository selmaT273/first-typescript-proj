import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const TodoForm: React.FC = () => {
  return (
    <>
    <h2>Add a todo item</h2>
    <Form>
      <Form.Group controlId="todoItem">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="submit">Add Todo</Button>
    </Form>
    </>
  );
};