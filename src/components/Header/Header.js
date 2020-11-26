import React, { Component } from 'react';
import './header.css';
import { menuItems } from './menu-items';
import slide1 from './images/1.jpg';
import slide2 from './images/2.jpg';
import {Nav,Navbar,Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

class Header extends Component {
    render()
    {
    return (
     <div className = "header">
     <Navbar collapseOnSelect expand="lg" variant="dark">
     <Navbar.Brand href="#home" bsPrefix ='brand'>BYOB</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mr-auto"></Nav>
     <Nav>
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link eventKey={2} href="#memes"> Services </Nav.Link>
      <Nav.Link href="#deets" bsPrefix="lastItem">Contact us</Nav.Link>
    </Nav>
    <Button variant="outline-light">Login/Signup</Button>
  </Navbar.Collapse>
</Navbar>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 img"
      src={slide1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 img"
      src={slide1}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 img"
      src={slide2}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
    );
}
}
 
export default Header;