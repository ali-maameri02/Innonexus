import React from "react";
import Container from 'react-bootstrap/Container';
import NavItem from "react-bootstrap/esm/NavItem";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

import { Slide } from 'react-awesome-reveal';
import NavLink from "react-bootstrap/esm/NavLink";

const NavBar = () => {
  return (
    <div className="">
      <Slide direction="down" className="Navigation">
        <Navbar variant="" bg="none" className="navbar" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/"> <img src={logo} width={24} alt="" srcset="" /> ستريت_هوب</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example" className="navitems">
              <Nav className="menu">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="المواد"
                  menuVariant="none"
                >
                  <NavDropdown.Item href="#action/3.1">المواد</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">مادة أخرى</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">شيء ما</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">رابط منفصل</NavDropdown.Item>
                </NavDropdown>
                <NavItem>
                  <NavLink href="/Aboutus">من نحن</NavLink>
                </NavItem>
              </Nav>

              <div className="buttons">
                <Link to="/login">
                  <Button variant="light" className="btn">تسجيل الدخول</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="light" className="btn">إنشاء حساب</Button>
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Slide>
    </div>
  );
};

export default NavBar;
