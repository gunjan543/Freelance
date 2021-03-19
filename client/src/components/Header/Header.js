import React, { Component } from 'react';
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
    <p className = "lang-switch"><a href = "/hi">हिन्दी</a> | <span className = "highlight">English </span></p>
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
                <a href="#services">Features</a>
            </li>
            <li>
                <a href="#about">Services</a>
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
          
            <a href="/register" className="intro-cta hvr-grow-shadow" >
                Post a Job
            </a>
            <a href="/register" className="intro-cta hvr-grow-shadow employee-button" >
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
























