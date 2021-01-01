import React from "react";

import "./services.css"
import find from "../images/find.png";
import findjob from "../images/findjob.png";
import help from "../images/help.png";
import variety from "../images/variety.png"


function Services(){



	return(
	<div id = "services" className = "outer-section">
	<div className = "services-title-text ">
		<h1 className="hvr-underline-from-center2">Our Services</h1>
		
	</div>
	
		<div className = "row">
			<div className = "col">
			<img src = {find} alt = "find" className = "service-icon"></img>
				<h4>
				Find suitable employees.
					
				</h4>
				<p>Simply post a job and find best person to finish your task.</p>
			</div>
			<div className = "col">
			<img src = {variety} alt = "variety" className = "service-icon"></img>
				<h4>
				Variety of Services
				</h4>
				<p>We provide a large range of services for all working classes from developers to house workers.</p>
</div>
		<div className = "col">
			<img src = {findjob} alt= "find job" className = "service-icon"></img>
				<h4>
				
					Find Job
				</h4>
				<p>Find the perfect job for you depending as per your skillset.</p>
			</div>
			<div className = "col">
			<img src = {help} alt = "help" className = "service-icon"></img>
				<h4>
					Help
				</h4>
				<p> Contact our developers any time and receive instant support. </p>
			</div>
		


 </div>

	</div>
	 
	  
	);
}

export default Services;


