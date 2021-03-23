import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
          <Link to="/" className="navbar-brand">🌴Book Club🌴</Link>
        <Nav className="mr-auto">
          <Link to ="/saveForm" className="nav-link">Post</Link>
          
          <Link to ="/loginForm" className="nav-link">Sign In</Link>
          
          <Link to ="/joinForm" className="nav-link">Sign Up</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
