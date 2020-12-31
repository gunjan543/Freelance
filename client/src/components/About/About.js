import React from "react";
import "./about.css";
import aditi from "../images/aditi.jpg";
import gunjan from "../images/gunjan.jpg";

function About(){

	return(
		

<div>  

 
    
        <section id = "about" className = "about-us-section">
                <div className = "about-us-content">
                <h2 className = "about-us-heading hvr-underline-from-center">About Us</h2>
				<p>
					<h3 style = {{fontWeight:"bold"}}>BYOB:Be Your Own Boss</h3>
					<br></br>
					BYOB is developed with a vision of expanding the idea of freelancing from just hiring developers to day-to-day chores such as electrician, plumbing etcetra.
					We, at BYOB, aim to provide the easiest user interface; allowing users with minimal technical knowledge to work with ease.
					<br></br>
					<br></br>
					We provide an online portal, wherein, prospective employers can post jobs:temporary or permanent. The employers can expect a list of suitable
					employees who are just a call away. 
					<br></br>
					
					And for the employees, they can browse through a variety of jobs that match their skill-set. They will find a suitable work that interests them and also pays well, without much hassle.
					<br></br>
					
					<span style = {{fontWeight:"bold", fontSize:"1.5rem"}}>How BYOB works?</span>
					<br></br>
					The employers register and login on our portal, and post as many jobs as they wish to. The employers are required to give necessary details about the job.
					On posting the job, the employers will be notified about any interested applicants for all the jobs they posted.
					<br></br>
					The employees just need to sign up and scroll through a list of jobs that interest them and just simply apply and wait to hear from their employers! 
					<br></br>
					<br></br>
					<h5>BYOB is getting better everyday. Check out some of our amazing upcoming features <a href= "/future" style = {{fontWeight:"bold"}}>here.</a></h5>

				</p>
                </div>
           
         
        
          
  
        </section>
        
  
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

export default About;