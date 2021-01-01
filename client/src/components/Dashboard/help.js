import React from 'react';
import './dashboard.css';
import Navbar2 from './Navbar2';
import {Redirect} from "react-router-dom";
import {isAuth} from "../../helpers/auth"
import aditi from "../images/aditi.jpg";
import gunjan from "../images/gunjan.jpg";

const Help = () => {
    return ( 
		
        <div className="help">
		 {!isAuth()?<Redirect to='/login'/> :null}
        <div className="dash">
        <Navbar2 />
        </div>
        <h1 style = {{textAlign:"center", textTransform:'uppercase' , background:"#182628", color:'#f2f2f2', marginBottom:'0', paddingTop:'3rem'}}>Contact our Developers</h1>
        <div id = "team" className = "profile-block">
        
		<div className = "profiles">
        <h1 className = "horizontal-text">Meet Our Team</h1>
		<div className = "profile">
       
        <img src = {gunjan} className = "profile-img" alt = "profile"/>
		<h3 className = "user-name">Gunjan</h3>
		<h5 className = "user-role">Full Stack Developer</h5>
		<p>
		Class of 2022
		<br></br>
		Rajasthan Technical University, Kota
		<br></br>
		<h5 className = "profile-portfolio">Know More :  <a target="_blank" rel="noopener noreferrer" href = "https://gunjan543.github.io/Portfolio">gunjan543.github.io/Portfolio</a></h5> 
		</p>
		</div>

		
	
       
		<div className = "profile">
		<img src = {aditi} className = "profile-img" alt = "profile"/>
		<h3 className = "user-name">Aditi</h3>
		<h5>Full Stack Developer</h5>
		<p>
		Class of 2022
		<br></br>
		Rajasthan Technical University, Kota
		<br></br>
		
		<h5 className = "profile-portfolio">Know More :  <a target="_blank" rel="noopener noreferrer" href = "https://aditi-1400.github.io/Portfolio-Website/">aditi.github.io/Portfolio</a></h5> 
		</p> 	
		</div>
		</div>
		</div>
</div>
     );
}
 
export default Help;
