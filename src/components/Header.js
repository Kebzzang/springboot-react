import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledHeadDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const StyledHeadLink = styled(Link)`
  color: red;
`;
//js & css 합치면 보기 쉬워용

const Header = () => {
  return (
    <StyledHeadDiv backgroundColor="blue">
      <div>
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">🦚Pilas🦚</Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/">
                Board
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
        <ul>
          <li>
            <StyledHeadLink to="/">Home</StyledHeadLink>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </StyledHeadDiv>
  );
};

export default Header;
