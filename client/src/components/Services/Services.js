import React from "react";

import "./services.css"
import find from "../images/find.png";
import findjob from "../images/findjob.png";
import help from "../images/help.png";
import variety from "../images/variety.png"


function Services(){



	return(
		  
	    
	<section className = "outer-section">
	
	<div className = "services-title-text">

		<h1>Our Services</h1>
		<div className="line"></div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

	</div>
	<div className="container services-section">
		<div className = "row">
			<div className = "col">
			<img src = {find} className = "service-icon"></img>
				<h2>
				
					Connect
				</h2>
				<p>Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.</p>
			</div>
			<div className = "col">
			<img src = {variety} className = "service-icon"></img>
				<h2>
				
					Connect
				</h2>
				<p>Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.</p>
			</div>
		</div>
		<div className = "row">
		<div className = "col">
			<img src = {findjob} className = "service-icon"></img>
				<h2>
				
					Connect
				</h2>
				<p>Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.</p>
			</div>
			<div className = "col">
			<img src = {help} className = "service-icon"></img>
				<h2>
				
					Connect
				</h2>
				<p>Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.</p>
			</div>
		</div>


	</div>

	</section>
	 
	  
	);
}

export default Services;



// <section id = "services" className = "services">
	
// <div className="section-padding">
// <div className="container">
// <div className="row">
// 	<div class = "col-lg-12">
// 		<div class = "section-header text-center">
// 			<h2> Our Services</h2>
// 			<p>What we do</p>
// 		</div>
// 	</div>
// </div>
// 	<div className = "row">
		
// 			{data.map(createEntry)}
			
// 		</div>
// 	</div>
// </div>



// </section>