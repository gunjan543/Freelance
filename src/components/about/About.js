import React from "react";
import "./about.css";


function About(){

	return(
		

		<div>	
		<section id = "about" className = "about-section">
		
		<div className = "inner-container" >
		<h2>Meet our Team</h2>
		<h2 style = {{color:"#3B945E" }}>What makes us different</h2>
		<p class = "text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis vitae nunc sed augue rhoncus dapibus. Nam lorem sapien, 
		condimentum non egestas vitae, volutpat ut ligula. Maecenas 
		velit risus, dapibus vel eros nec, euismod luctus sapien. 
		Pellentesque id erat a purus bibendum porttitor. 
		<br/>
		Nullam interdum nibh vitae erat aliquam facilisis. 
		Nunc fringilla sit amet nunc sed porttitor. 
		Etiam rhoncus diam a sapien pellentesque commodo sit amet non est.
		Nam blandit erat ante, quis commodo eros scelerisque at. Ut ac
		odio imperdiet, consequat justo sit amet, interdum purus. 
		Mauris id vestibulum tortor. Etiam velit leo, lobortis sit.</p>
	        		
		</div>
		</section>

		<div className = "profile-block">
		<div className = "profiles">
		<div className = "profile">
		<img src = "https://thumbs.dreamstime.com/b/female-programmer-person-icon-vector-illustration-167291602.jpg" className = "profile-img"/>
		<h3 className = "user-name">Gunjan</h3>
		<h5>Full Stack Developer</h5>
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

export default About;