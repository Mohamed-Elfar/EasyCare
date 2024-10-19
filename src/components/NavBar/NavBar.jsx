import React from 'react';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './NavBar.css'
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">
        <Row className="align-items-center">
          <Col xs={12} md={2}>
            <img
              src={logo}
              alt="Logo"
              width="60"  
              height="60"
              className="d-inline-block"
            />
          </Col>
          <Col xs={12} md={10}>
            <h1 className="brand m-3">EasyCare</h1> {/* العنوان */}
          </Col>
        </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            
            
            {/* <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#faq">FAQ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#support">Support</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="ml-auto"> 
          <ul className="navbar-nav mx-auto signUP">
        <li className="nav-item">
          <Link className="nav-link custom-nav-link py-3" aria-current="page" to={"/login"}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link custom-nav-link px-3 py-3" aria-current="page" to={"/role"}>JOIN US</Link>
        </li>
      </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}
