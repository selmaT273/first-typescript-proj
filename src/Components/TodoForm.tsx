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
    <h2>Add a todo item</h2>
    
    <Form className="form border rounded p-3 bg-light" onSubmit={(e) => addTodo(e, formData)}>
      <Form.Group controlId="todoName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text"
          id="name"
          placeholder="Name of task"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e)}
        />
      </Form.Group>

      <Form.Group controlId="todoDescription" className="mt-1">
        <Form.Label className="todo-description-label">Description</Form.Label>
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