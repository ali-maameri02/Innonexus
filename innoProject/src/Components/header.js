import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import "./header.css";
import logo from './imgs/logo.png'; 
import flag from './imgs/flag.png';
import user from './imgs/user.png';

function Header() {
  return (
    <Navbar bg="white" expand="lg" className='nav-style animation'>
      <div className='container-custome'>
        <Navbar.Brand href="#home" className="text-dark d-flex align-items-center">
          <img src={logo} alt="Logo" className="me-2 logo-img" />
          <span className='logo-size'>
            <span className='logo-span'>InnoNexus</span> Hub
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-row align-items-center justify-content-center nav-links">
            <Nav.Link href="#home" className="text-dark font-size list-items hover-items">الرئيسية</Nav.Link>
            <Nav.Link href="#features" className="text-dark font-size list-items hover-items">التحديات</Nav.Link>
            <Nav.Link href="#pricing" className="text-dark font-size list-items hover-items">شركات</Nav.Link>
            <Nav.Link href="#pricing" className="text-dark font-size list-items hover-items">الرعاة</Nav.Link>
            <Nav.Link href="#pricing" className="text-dark font-size list-items hover-items">من نحن</Nav.Link>
          </Nav>
          <div className='d-flex align-items-center  mt-2 mt-lg-0 right-div'>
            <Link to="/login">
              <Button className='btn-light btn-custome me-2'>تسجيل الدخول</Button>
            </Link>
            <Link to="/signup">
              <Button className='btn-warning btn-custome me-2'>اشتراك</Button>
            </Link>
            <img src={user} className='inside-margin' alt="User" />
            <img src={flag} className='inside-margin ms-2' alt="Flag" />
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
