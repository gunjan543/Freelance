import React from 'react';
import '../Header/header.css';
import logo from '../images/logo.png';
import {Nav,Navbar,Button} from 'react-bootstrap';
import './dashboard.css';


const EmployeeDash = () => {
    return ( 
  <div className="dash"> 
  <div>
  <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home" bsPrefix ='brand'><img src={logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

  <Nav className="mr-auto"></Nav>
  <Nav>
  <Nav.Link href="/EmployeeDash">Home</Nav.Link>
  <Nav.Link href="/EmployeeTechProfile">Profile</Nav.Link>
  <Nav.Link href="/help" bsPrefix="lastItem">Help</Nav.Link>
  </Nav>
  <Button variant="outline-light" href="/MainLog">Logout</Button>
  </Navbar.Collapse>
  </Navbar>
  </div>
  <h1>No work right now!</h1>
  </div> 

);}
 
export default EmployeeDash;