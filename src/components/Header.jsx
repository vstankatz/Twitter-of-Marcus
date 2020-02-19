import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';


function Header(){
  return (
    <Navbar bg="dark" variant="dark" id="header">
    <Navbar.Brand href="#home">Tweetus</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#/">Home</Nav.Link>
      <Nav.Link href="#features">Tweetums</Nav.Link>
      <Nav.Link href="#pricing">Complaints</Nav.Link>
      <Nav.Link href='#test'>Test</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Find a Tweetu" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>

    </Form>
  </Navbar>
  );
}

export default Header;
