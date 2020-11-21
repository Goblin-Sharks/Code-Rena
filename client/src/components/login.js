import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card } from 'react-bootstrap';
class Login extends Component {
  render() {
    return (
      <Card style={{ width: '18rem', textAlign: 'center', margin: 'auto' }}>
       <Card.Body style={{}}>
       <Card.Title>Welcome To CodeArena</Card.Title>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Card.Body>
      </Card>
    );
  }
}

export default Login;
