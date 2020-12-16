import logo from '../images/logo.png';
import {Nav,Navbar,Button} from 'react-bootstrap';
import "../Header/header.css";
import React from 'react';

const Navbars = (props) => {
  let {category} = JSON.parse(localStorage.getItem('user'));
  var subCategory = '';
  subCategory = category === 'employee' ?  (JSON.parse(localStorage.getItem('subCategory'))) : ''
  
  return ( 
  <div>
  <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home" bsPrefix ='brand'><img src={logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
  <Nav className="mr-auto"></Nav>
 
  {
   category === 'employee' ?
   subCategory==='nontechnical' ? 
    <div> 
    <Nav> 
    <Nav.Link href="/employeeDash/technical/EmployeeNonTechProfile">Profile</Nav.Link>
    <Nav.Link href="/employeeDash/technical/help" bsPrefix="lastItem">Help</Nav.Link>
    <Nav.Link href="/employeeDash/technical">Home</Nav.Link>
    </Nav>
    </div>
    : 
    <div> 
    <Nav>
    <Nav.Link href="/employeeDash/nonTechnical">Home</Nav.Link>
    <Nav.Link href="/employeeDash/nonTechnical/EmployeeTechProfile">Profile</Nav.Link>
    <Nav.Link href="/employeeDash/nonTechnical/help" bsPrefix="lastItem">Help</Nav.Link>
    </Nav>
    </div>
    :  
    <div> 
    <Nav>
    <Nav.Link href="/employerDash">Home</Nav.Link>
    <Nav.Link href="/employerDash/employerProfile">Profile</Nav.Link>
    <Nav.Link href="/employerDash/requests" bsPrefix="lastItem">Requests</Nav.Link>
    <Nav.Link href="/employerDash/help" bsPrefix="lastItem">Help</Nav.Link>
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
  