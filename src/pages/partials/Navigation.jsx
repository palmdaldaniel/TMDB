import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <NavLink to="/" className="fs-4 navbar-brand">
             TMDB - 2.0
        </ NavLink>
        <Navbar.Toggle className="light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/cinema" className="nav-link">
              Cinema
            </NavLink>
            <NavLink to="/popular" className="nav-link">
              Popular
            </NavLink>
            <NavLink to="/top-rated" className="nav-link">
             Top Rated
            </NavLink>
            <NavLink to="/genre" className="nav-link">
              Genres
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
