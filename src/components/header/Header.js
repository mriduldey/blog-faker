import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Fake Blog</Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/" as="">
          Home
        </Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
