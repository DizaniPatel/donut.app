import React, { Component } from "react";
import logonav from "./logonav.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand href="" title="take me hone">
          <img
            alt=""
            src={logonav}
            width="80"
            height="80"
            className="d-inline-block "
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">How it works</Nav.Link>
            <Nav.Link href="">DeFi 101</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="">Blogs</Nav.Link>
          </Nav>
          <Nav>
            <div>
              <Button variant="outline-dark">Get Started</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
