import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios';

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const getName = (e) => {
    setName(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const routeChange = () => {
    window.location = '/signup';
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const loginForm = {
      username: username,
      password: password,
    };
    axios.post('http://localhost:5000/login', loginForm).then((res) => {
      if (res.data !== null) window.location = '/home';
      else window.location = '/signup';
    });
  };
  return (
    <Card
      style={{
        width: '18rem',
        textAlign: 'center',
        margin: '18rem auto auto auto',
      }}
    >
      <Card.Body style={{}}>
        <Card.Title>Welcome To CodeArena</Card.Title>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={getName}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={getPassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log('clicked');
              routeChange();
            }}
          >
            Sign up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
