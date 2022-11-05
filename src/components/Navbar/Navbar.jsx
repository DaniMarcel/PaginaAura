import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "../../App.css"

import { Link, Outlet } from "react-router-dom";

const NavbarP = () => {
  return (
    <>
      <Navbar sticky="top" className="navBG " variant="dark" expand="lg" >
        <Container>
          <Navbar.Brand as={Link} to="/" id="title-aura">A U R A</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="ColorLink" as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link className="ColorLink" as={Link} to="documento">Documento</Nav.Link>
              <Nav.Link className="ColorLink" as={Link} to="consola">Consola</Nav.Link>
              <Nav.Link className="ColorLink" as={Link} to="sobre-nosotros">Sobre Nosotros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavbarP;
