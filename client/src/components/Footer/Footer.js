import React from 'react';
import "./footer.css" ;
import logo from "../images/logo.png";

function Contact(){



	return(
    <footer id = "footer">
      <nav className="footer-inner">
        <section className="footer-item">
          <img src={logo} href = "/" alt = ""/>

          <h2>Become your own boss<br/>
            <b className="color">No 9 to 5</b>
          </h2>
        </section>

        <section className="footer-item">
          <h3>Explore</h3>
          <ul>
            <li><a href = "/">Home</a></li>
            <li><a href = "#about">About</a></li>
            <li><a href = "#services">Services</a></li>
          </ul>
        </section>

        <section className="footer-item">
          <h3>Visit</h3>
          
          <p>Mansarovar, Jaipur</p>
          <p>Rajasthan, India 302020</p>
          <h3 className="desktop">BYOB</h3>
          <p className="desktop">Byobfreelance@gmail.com</p>
          
        </section>

        <section className="footer-item">
          <h3>BYOB</h3>
          <p>Email us: Byobfreelance@gmail.com</p>
        
        </section>

        <section className="footer-item">
          <h3>LinkedIn</h3>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer"  href = "https://www.linkedin.com/in/aditi-singh-0081451ab/">Aditi Singh</a></li>
            <li>  <a target="_blank" rel="noopener noreferrer"  href = "https://www.linkedin.com/in/gunjan-agarwal-7b0109168">Gunjan Agarwal</a></li>
          </ul>
        </section>
      
      </nav>
    </footer>
		);
}

export default Contact;