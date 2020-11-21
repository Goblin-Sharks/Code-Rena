/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, ListGroup, CardGroup, InputGroup, FormControl } from 'react-bootstrap';



let clientRawText=''

// const box1=document.getElementById('cli1')
// const box2=document.getElementById('cli2')
// box1.addEventListener('input',()=>{
//   box1.value= clientRawText
// })
class Arena extends Component {
  render() {
    return (
      <div style={{ margin: '2rem 2rem auto 2rem' }}>
        <Card>
          <Card.Title style={{ margin: '1rem auto 1rem auto' }}>Algorithm title</Card.Title>
        </Card>
        <Card>
          <Card.Body style={{ margin: '1rem auto 1rem auto' }}>
            <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
            {' '}
            Given an arbitrarily nested array of numbers and a positive integer "depth", return a new array consisting of the numbers with depth less than or equal to the provided depth, in order of appearance. The original array is considered to be at depth 1, and inner arrays are at greater depth.
          </Card.Body>
        </Card>
        <Card>
          <Card.Body style={{ margin: '1rem auto 1rem auto' }}>
            <Card.Subtitle className="mb-2 text-muted">Constraints and Examples</Card.Subtitle>
            For example:

            retrieveDepth([2, [4, [7], 1], 5], 1) equal to [2, 5] because only the 2 and 5 are at
            "depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
            the 7 is at "depth 3".

            retrieveDepth([2, [4, [7], 1], 5], 2) equal to [2, 4, 1, 5] because the 2 and 5 are at
            "depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
            "depth 3".

            retrieveDepth([2, [4, [7], 1], 5], 3) equal to [2, 4, 7, 1, 5] because every number
            is within "depth 3". No number is deeper.
          </Card.Body>
        </Card>
        {/* <textarea id='cli1' cols={80} rows={20} id='cli' size='2000'/>
<textarea id='cli2' cols={80} rows={20} id='cli' size='2000'/> */}

        <ListGroup style= {{display: 'flex', flexDirection: 'row'}}>
          <Card style={{ width: '700px', margin: '3rem auto 3rem auto' }}>
            <Card.Body>
              <Card.Title>Player One</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Name of the Player</Card.Subtitle>
              <InputGroup style={{ marginBottom: '1rem' }}>
                <InputGroup.Prepend>
                  <InputGroup.Text>Write you answer here</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" rows={15} aria-label="With textarea" />
              </InputGroup>
              <Button variant="primary">Submit</Button>
              <Button variant="light">Give Up!</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '700px', margin: '3rem auto 3rem auto' }}>
            <Card.Body>
              <Card.Title>Player Two</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <InputGroup style={{ marginBottom: '1rem' }}>
                <InputGroup.Prepend>
                  <InputGroup.Text>Player Two is typing...</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" rows={15} aria-label="With textarea" />
              </InputGroup>
              <Button variant="primary">Hide!</Button>
            </Card.Body>
          </Card>
        </ListGroup>
      </div>
    );
  }
}

export default Arena;
