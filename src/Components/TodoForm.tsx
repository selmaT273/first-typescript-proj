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
        <Form.Label className="todo-form-label">Title</Form.Label>
        <Form.Control
          className="mb-3" 
          type="text"
          id="name"
          placeholder="Prank Dwight"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e)}
        />
      </Form.Group>

      <Form.Group controlId="todoDescription" className="mt-1">
        <Form.Label className="todo-form-label">Description</Form.Label>
        <Form.Control 
          className="mb-3"
          type="text"
          placeholder="Put his stapler in jello"
          id="description"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e)}
        />
      </Form.Group>

      <Form.Group controlId="todoDueDate" className="mt-1">
        <Form.Label className="todo-form-label">Due Date</Form.Label>
        <Form.Control 
          className="mb-3"
          type="date"
          id="dueDate"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e)} 
        />
      </Form.Group>

      <Button className="mt-3" variant="custom" type="submit">
          Add to list
      </Button>
    </Form>
    </>
  );
};