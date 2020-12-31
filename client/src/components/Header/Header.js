import React, { Component } from 'react';
import './header.css';
import Logo from '../Logo/logo';
import landingpage from '../images/landingpage.png';

class Header extends Component {

  showMenu = (event)=>{
    
      event.preventDefault();
    
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
    <div className="header-wrapper">
    <Logo />

        <button id="submenu" className=".btn btn--white" onClick={this.showMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>


        <ul className="menu-left">
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
        <ul className="menu-right" >
            <li className="menu-cta hvr-bounce-to-top hvr-grow-shadow">
                <a href="/register">
                    Get Started
                </a>
            </li>
        </ul>
    </div>
</header>


<section id="intro">
    <div className="top-right-gradient"></div>
    <div className="header-wrapper">
        <div className="intro-left">
            <h1>Freelancing Redefined.</h1>
            <div className="line"></div>
            <p>
           Reducing distance between employers and employees.<br></br>
            Whatever you need, there will be a freelancer to get it done: from web design, to house-hold chores to painting
            (and a lot more).

            </p>
            <a href="/login" className="intro-cta hvr-grow-shadow" >
                Post a Job
            </a>
            <a href="/login" className="intro-cta hvr-grow-shadow employee-button" >
                Find a Job
            </a>
        </div>
        <div className="intro-right">
           
            <img src={landingpage} alt="freelancing"></img>
        </div>
    </div>
    <div className="bottom-left-gradient"></div>
</section>





</div>

);}}
 
export default Header;
























