import React from 'react';
import logo from '../images/logo.png';
import './logo.css';

const Logo = () => {
    return ( 
        <div className="logo">
       <a href="/"> <img src={logo} alt = "logo"></img> </a>
        </div>
     );
}
 
export default Logo;