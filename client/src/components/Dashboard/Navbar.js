import logo from '../images/logo.png';
import {Nav,Navbar,Button} from 'react-bootstrap';
import "../Header/header.css";
import React from 'react';

const Navbars = (props) => {
  var pathArray= window.location.pathname.split('/');
  var one=pathArray[1];
  var two=pathArray[2];
  var three=pathArray[3];
  
    return ( 
  <div>
  <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home" bsPrefix ='brand'><img src={logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
  <Nav className="mr-auto"></Nav>
 
  {
   one === 'employee' ?
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
    <Nav.Link href="/employer/employerDash">Home</Nav.Link>
    <Nav.Link href="/employer/employerDash/employerProfile">Profile</Nav.Link>
    <Nav.Link href="/employer/employerDash/help" bsPrefix="lastItem">Help</Nav.Link>
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
  