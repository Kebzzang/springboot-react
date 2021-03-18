import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//js & css 합치면 보기 쉬워용

const Header = () => {
  return (
    <div>
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">🦚Pilas🦚</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              ListPage
            </Link>
            <Link className="nav-link" to="/write">
              WritePage
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
