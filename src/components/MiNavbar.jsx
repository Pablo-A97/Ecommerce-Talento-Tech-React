import React from 'react';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../contexts/LoginContext';
import { FaShoppingCart } from "react-icons/fa";
import "../index.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function MiNavbar() {
  const { admin } = useLoginContext();
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary mb-3" bg="light" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand className="navTitulo">MUNDO GAMER</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            bg="dark"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Mundo Gamer
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" className="navItem" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/productos" className="navItem">Productos</Nav.Link>
                <Nav.Link as={Link} to="/nosotros" className="navItem">Nosotros</Nav.Link>
                {admin ? <Nav.Link as={Link} to="/admin" className="navItem">Admin</Nav.Link> : <></>}
                <Nav.Link as={Link} to="/login" className="navItem">Login</Nav.Link>
                <Nav.Link as={Link} to="/carrito" className="navItem"><FaShoppingCart /></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}


export default MiNavbar;   