import React, { Component } from 'react';
import './header.css';
import logo from '../images/logo.png';
import landingpage from '../images/landingpage.png';

class Header extends Component {


  
  showMenu = (event)=>{
    
      event.preventDefault();
      console.log("reach");
      let element = document.getElementById('header');

      if(element.classList.contains('active')){
          element.className = "";
      } else {
          element.className = "active";
      }


  

   }

  

render()
  {
    return (
        

      <div>
    
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
<header id="header">
    <div class="header-wrapper">
        <a href="/">
                <img src={logo} alt="logo"></img>
        </a>

        <button id="submenu" className=".btn btn--white" onClick={this.showMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>


        <ul class="menu-left">
            <li>
                <a href="#services">Services</a>
            </li>
            <li>
                <a href="#about">About Us</a>
            </li>
            
            <li>
                <a href="#team">Our Team</a>
            </li>
            <li>
                <a href="#footer">Contact</a>
            </li>
        </ul>
        <ul class="menu-right" >
            <li class="menu-cta hvr-bounce-to-top hvr-grow-shadow">
                <a href="#">
                    Get Started
                </a>
            </li>
        </ul>
    </div>
</header>


<section id="intro">
    <div class="top-right-gradient"></div>
    <div class="header-wrapper">
        <div class="intro-left">
            <h1>Freelancing Redefined.</h1>
            <p>
           Reducing distance between employers and employees.<br></br>
            Whatever you need, there will be a freelancer to get it done: from web design, to house-hold chores to painting
            (and a lot more).

            </p>
            <a href="#" class="intro-cta hvr-grow-shadow" >
                Post a Job
            </a>
            <a href="#" class="intro-cta hvr-grow-shadow employee-button" >
                Find a Job
            </a>
        </div>
        <div class="intro-right">
           
            <img src={landingpage}alt="image"></img>
        </div>
    </div>
    <div class="bottom-left-gradient"></div>
</section>





</div>

);}}
 
export default Header;

























/*       
// <div className = "header">

// <Navbar collapseOnSelect expand="lg" variant="dark">
//   <Navbar.Brand href="#home" bsPrefix ='brand'><img src={logo}></img></Navbar.Brand>
//    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//     <Navbar.Collapse id="responsive-navbar-nav">

//      <Nav className="mr-auto"></Nav>

//      <Nav>
//      <Nav.Link href="#">Home</Nav.Link>
//      <Nav.Link href="#about">About</Nav.Link>
//      <Nav.Link href="#services"> Services </Nav.Link>
//      <Nav.Link href="#footer" bsPrefix="lastItem">Contact us</Nav.Link>
//     </Nav>

//     <Button variant="outline-light" href="/login">Login/Signup</Button>

//   </Navbar.Collapse>
// </Navbar> */
/* 

// <Carousel>
//   <Carousel.Item interval={1000}>
//     <img
//       className="d-block w-100 img"
//       src={slide1}
//       alt="First slide"
//     />
//   </Carousel.Item>

//   <Carousel.Item interval={500}>
//     <img
//       className="d-block w-100 img"
//       src={slide2}
//       alt="Third slide"
//     />
//   </Carousel.Item>

//   <Carousel.Item>
//     <img
//       className="d-block w-100 img"
//       src={slide3}
//       alt="Third slide"
//     />
//   </Carousel.Item>
// </Carousel>
 */