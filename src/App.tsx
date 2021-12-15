import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TodoList } from './Components/TodoList';
import { TodoForm } from './Components/TodoForm';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { getTodos, addTodo, toggleTodo, removeTodo } from './API';
import task from './task.svg'
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos()
  }, [])
  
  const fetchTodos = (): void => {
    // where should this be set to state?
    const currentDateTime = new Date();
    const currentDateFormat = currentDateTime.toDateString();
    console.log(currentDateFormat);

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
      setTodos(data.todos);

      (e.target as HTMLFormElement).reset();
    })
    .catch((err: any) => console.log(err))
  };

  const handleRemoveTodo = (_id: string): void => {
    removeTodo(_id)
    .then(({ status, data}) => {
      if (status !== 200) {
        throw new Error("Error! Not deleted");
      }
      setTodos(data.todos)
    })
    .catch((err: any) => console.log(err))
  }

  const parallax = useRef<IParallax>(null!);

  return (
    <>
    <Parallax ref={parallax} pages={2}>
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => parallax.current.scrollTo(1)}
      >
          <Row>
            <Col className="d-flex justify-content-center">
              <h1>My Todo List</h1>
            </Col>
          </Row>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.2 }}>
        <img src={task} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
        <img src={task} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.2 }}>
        <img src={task} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        {/* <img src={task} style={{ display: 'block', width: '20%', marginLeft: '40%' }} /> */}
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.1 }}>
        <img src={task} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        <img src={task} style={{ display: 'block', width: '20%', marginLeft: '78%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.6} speed={-0.1} style={{ opacity: 0.2 }}>
        {/* <img src={task} style={{ display: 'block', width: '20%', marginLeft: '60%' }} /> */}
        <img src={task} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        {/* <img src={task} style={{ display: 'block', width: '10%', marginLeft: '80%' }} /> */}
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={0.3} style={{ opacity: 0.1 }}>
        <img src={task} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        <img src={task} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.4} style={{ opacity: 0.2 }}>
        {/* <img src={task} style={{ display: 'block', width: '20%', marginLeft: '55%' }} /> */}
        {/* <img src={task} style={{ display: 'block', width: '10%', marginLeft: '15%' }} /> */}
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        {/* <img src={task} style={{ display: 'block', width: '20%', marginLeft: '70%' }} /> */}
        {/* <img src={task} style={{ display: 'block', width: '20%', marginLeft: '40%' }} /> */}
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img src={task} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        <img src={task} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.2 }}>
        <img src={task} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img src={task} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img src={task} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.2 }}>
        <img src={task} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        <img src={task} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      </ParallaxLayer>
      <ParallaxLayer 
        offset={1} 
        speed={0.5} 
        // style={{ backgroundColor: '#FFD5CC' }}
      //  onClick={}
      >
        <Container>
          <Row>
            <Col>
              <TodoForm addTodo={handleAddTodo} />
            </Col>
            <Col>
              <TodoList todos={todos} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo}/>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
    </Parallax>
    </>
  );
}

export default App;
