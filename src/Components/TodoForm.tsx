import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './TodoForm.css';
interface Props {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <>
    <h2>_</h2>
    
    <Form className="form rounded p-3" onSubmit={(e) => addTodo(e, formData)}>
      <Form.Group controlId="todoName">
        <Form.Label className="todo-form-label">Name</Form.Label>
        <Form.Control
          className="mb-3" 
          type="text"
          id="name"
          placeholder="Name of task"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e)}
        />
      </Form.Group>

      <Form.Group controlId="todoDescription" className="mt-1">
        <Form.Label className="todo-form-label">Description</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Enter description"
          id="description"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e)}
        />
      </Form.Group>

      <Button className="mt-3" variant="primary" type="submit">
          Add 
      </Button>
    </Form>
    </>
  );
};