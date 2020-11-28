import React from 'react';
import "./footer.css" ;
import logo from "./logo.png";

function Contact(){



	return(
    <footer id = "#footer">
      <nav className="footer-inner">
        <section className="footer-item">
          <img src={logo} alt = ""/>

          <h2>Become your own boss<br/>
            <b className="color">No 9 to 5</b>
          </h2>
        </section>

        <section className="footer-item">
          <h3>Explore</h3>
          <ul>
            <li><a href = "#">Home</a></li>
            <li><a href = "#">About</a></li>
            <li><a href = "#">Services</a></li>
          </ul>
        </section>

        <section className="footer-item">
          <h3>Visit</h3>
          
          <p>H. No. 123</p>
          <p>Mansarovar, Jaipur</p>
          <p>Rajasthan, India 302020</p>
          <h3 className="desktop">New Business</h3>
          <p className="desktop">engage@weareenvoy.com</p>
          <p className="desktop">949.333.3106</p>
        </section>

        <section className="footer-item">
          <h3>New Business</h3>
          <p>Email us: abc@gmail.com</p>
          <p>949.333.3106</p>
        </section>

        <section className="footer-item">
          <h3>Follow</h3>
          <ul>
            <li><a href = "#">Instagram</a></li>
            <li><a href = "#">Twitter</a></li>
            <li><a href = "#">LinkedIn</a></li>
          </ul>
        </section>
      
      </nav>
    </footer>
		);
}

export default Contact;