import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TodoList } from './Components/TodoList';
import { TodoForm } from './Components/TodoForm';
import { getTodos, addTodo, toggleTodo } from './API';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos()
  }, [])
  
  const fetchTodos = (): void => {
    getTodos()
    .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
    .catch((err: Error) => console.log(err))
  }

  // selectedTodo inherits from Todo interface
  const handleToggleTodo = (selectedTodo: ITodo): void => {
    toggleTodo(selectedTodo)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Error! Was not updated");
      }
      setTodos(data.todos);
    })
    .catch((err: any) => console.log(err))
  }

  const handleAddTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    addTodo(formData)
    .then(({ status, data }) => {
      if (status !== 201) {
        throw new Error("Error!! Was not saved")
      }
      setTodos(data.todos)
    })
    .catch((err: any) => console.log(err))
  };

  const removeTodo: RemoveTodo = (todoToRemove: ITodo) => {
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
          <TodoForm addTodo={handleAddTodo} />
        </Col>
        <Col>
          <TodoList todos={todos} toggleTodo={handleToggleTodo} />
          {/* <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/> */}
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
