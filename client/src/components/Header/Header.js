import React, { Component } from 'react';
import './header.css';
import logo from '../images/logo.png';
import slide1 from '../images/1.jpg';
import slide2 from '../images/2.jpg';
import slide3 from '../images/3.jpg';
import {Nav,Navbar,Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

class Header extends Component {
render()
  {
    return (
      
<div className = "header">

<Navbar sticky="top" collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home" bsPrefix ='brand'><img src={logo}></img></Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

     <Nav className="mr-auto"></Nav>

     <Nav>
     <Nav.Link href="#">Home</Nav.Link>
     <Nav.Link href="#about">About</Nav.Link>
     <Nav.Link href="#services"> Services </Nav.Link>
     <Nav.Link href="#footer" bsPrefix="lastItem">Contact us</Nav.Link>
    </Nav>

    <Button variant="outline-light" href="/MainLog">Login/Signup</Button>

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
      src={slide2}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 img"
      src={slide3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>


</div>

);}}
 
export default Header;