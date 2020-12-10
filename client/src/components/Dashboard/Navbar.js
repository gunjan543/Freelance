import logo from '../images/logo.png';
import {Nav,Navbar,Button} from 'react-bootstrap';
import "../Header/header.css";
import React from 'react';

const Navbars = (props) => {
  let {category} = JSON.parse(localStorage.getItem('user'));
  
  var two="technical";
  
  
    return ( 
  <div>
  <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home" bsPrefix ='brand'><img src={logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
  <Nav className="mr-auto"></Nav>
 
  {
   category === 'employee' ?
    two ==='nontechnical' ? 
    <div> 
    <Nav> 
    <Nav.Link href="/employee/nontechnical/employeeDash">Home</Nav.Link>
    <Nav.Link href="/employee/nontechnical/employeeDash/EmployeeNonTechProfile">Profile</Nav.Link>
    <Nav.Link href="/employee/nontechnical/employeeDash/help" bsPrefix="lastItem">Help</Nav.Link>
    </Nav>
    </div>
    : 
    <div> 
    <Nav>
    <Nav.Link href="/employee/technical/employeeDash">Home</Nav.Link>
    <Nav.Link href="/employee/technical/employeeDash/EmployeeTechProfile">Profile</Nav.Link>
    <Nav.Link href="/employee/technical/employeeDash/help" bsPrefix="lastItem">Help</Nav.Link>
    </Nav>
    </div>
    :  
    <div> 
    <Nav>
    <Nav.Link href="/user/userDash">Home</Nav.Link>
    <Nav.Link href="/user/userDash/employerProfile">Profile</Nav.Link>
    <Nav.Link href="/user/userDash/help" bsPrefix="lastItem">Help</Nav.Link>
    </Nav>
    </div>
  }
  
  <Button variant="outline-light" href="/MainLog">Logout</Button>
  </Navbar.Collapse>
  </Navbar>
    
  </div>
  
     );
}
 
export default Navbars;
  