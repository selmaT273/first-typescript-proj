import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TodoList } from './Components/TodoList';
import { TodoForm } from './Components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([] as Todo[]);

  // selectedTodo inherits from Todo interface
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo: RemoveTodo = (todoToRemove: Todo) => {
    const remainingTodos = todos.filter(todo => todo !== todoToRemove);
    setTodos(remainingTodos);
  }

  return (
    <>
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>Todo App</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <TodoForm addTodo={addTodo} />
        </Col>
        <Col>
          <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
