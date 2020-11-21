import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, ListGroup, CardGroup } from 'react-bootstrap';


class Arena extends Component {
  render() {
    return (
    <div>
    <ListGroup inline= "true">
      <Card style={{ width: '700px', margin: '3rem auto 3rem auto' }}>
  <Card.Body>
    <Card.Title>Player One</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="light">Give Up!</Button>
    <Button variant="primary">Submit</Button>
  </Card.Body>
</Card>
      <Card style={{ width: '700px', margin: '3rem auto 3rem auto' }}>
  <Card.Body>
    <Card.Title>Player Two</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="light">Give Up!</Button>
    <Button variant="primary">Submit</Button>
  </Card.Body>
</Card>
</ListGroup>
    </div>
    );
  }
}

export default Arena;