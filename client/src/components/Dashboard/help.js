import React from 'react';
import './dashboard.css';
import Navbar from './Navbar';

const Help = () => {
    return ( 
        <div className="help">
        <div className="dash">
        <Navbar />
        </div>
        <h1>Contact our Developers</h1>
        <div className = "profile-block">
		<div className = "profiles">
		<div className = "profile">
		<img src = "https://thumbs.dreamstime.com/b/female-programmer-person-icon-vector-illustration-167291602.jpg" className = "profile-img"/>
		<h3 className = "user-name">Gunjan</h3>
		<h5 className = "user-role">Full Stack Developer</h5>
		<p>Nullam interdum nibh vitae erat aliquam facilisis. 
		Nunc fringilla sit amet nunc sed porttitor. 
		</p>
		</div>
		<div className = "profile">
		<img src = "https://thumbs.dreamstime.com/b/female-programmer-person-icon-vector-illustration-167291602.jpg"className = "profile-img"/>
		<h3 className = "user-name">Aditi</h3>
		<h5>Full Stack Developer</h5>
		<p>Nullam interdum nibh vitae erat aliquam facilisis. 
		Nunc fringilla sit amet nunc sed porttitor. 
		</p>    	
		</div>
		</div>
		</div>
        </div>
     );
}
 
export default Help;
