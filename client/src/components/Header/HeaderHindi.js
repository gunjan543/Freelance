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
     <p className = "lang-switch"><a href = "/">English</a> | <span className = "highlight">हिन्दी</span></p>
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
                <a href="#services">विशेषताएं</a>
            </li>
            <li>
                <a href="#about">सेवाएं</a>
            </li>          
            <li>
                <a href="#footer">संपर्क</a>
            </li>
        </ul>
        <ul className="menu-right" >
            <li className="menu-cta hvr-bounce-to-top hvr-grow-shadow">
                <a href="/register">                   
                शुरू करें
                </a>
            </li>
        </ul>
    </div>
</header>


<section id="intro">
    <div className="top-right-gradient"></div>
    <div className="header-wrapper">
        <div className="intro-left">
            <h1>
            फ्रीलांसिंग परिभाषित </h1>
            <div className="line"></div>
            <p>
            नियोक्ताओं और कर्मचारियों के बीच की दूरी को कम करने की कोशिश <br></br>
            आपको जो भी चाहिए, उसे पूरा करने के लिए एक फ्रीलांसर होगा: वेब डिज़ाइन से लेकर घर के काम, पेंटिंग आदि|
            </p>
            <a href="/login" className="intro-cta hvr-grow-shadow" >
            नियुक्त करें
            </a>
            <a href="/login" className="intro-cta hvr-grow-shadow employee-button" >
            नौकरी ढूंढे
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
























