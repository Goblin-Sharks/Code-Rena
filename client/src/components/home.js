import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, ListGroup, Nav, Image, FormControl } from 'react-bootstrap';
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" style={{marginTop: "1.5rem"}}>
          <Navbar.Brand/>
          <Nav className="mr-auto">
            <Image src="../../public/logo192.png" rounded />
          </Nav>
          <Form>
            <FormControl type="text" placeholder="Search"/>
            {/* className="mr-sm-2" */}
            
            <Button style = {{ width: '200px', marginTop: "1rem"}} variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <ListGroup>
        {/* add action onClick={clicked} */}
          <ListGroup.Item style={{marginTop: "1.5rem"}} variant="primary" action>
            This one is a question!
          </ListGroup.Item>
          <ListGroup.Item style={{marginTop: "1.5rem"}} variant="success" action>
            This one is a question!
          </ListGroup.Item>
          <ListGroup.Item style={{marginTop: "1.5rem"}} variant="danger" action>
            This one is a question!
          </ListGroup.Item>
          <ListGroup.Item style={{marginTop: "1.5rem"}} variant="info" action>
            This one is a question!
          </ListGroup.Item>
          <ListGroup.Item style={{marginTop: "1.5rem"}} variant="dark" action>
            This one is a question!
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default Home;
