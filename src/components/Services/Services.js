import React from "react";
import data from "./data"; 
import Service from "./Service";



function Services(){


	function createEntry(item){

		return(
			<Service
			key = {item.id}
			image = {item.image}
			description={item.description}
			/>	
		);
	}

	return(
		<section id = "services" className = "services">
		<div className = "container" >
		<h3>SERVICES</h3>
		<h1>Our Services</h1>
		<div className = "row flex justify-content-between">
		{data.map(createEntry)}
		</div>
		</div>
		</section>
	);
}

export default Services;