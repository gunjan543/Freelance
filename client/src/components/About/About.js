import React from "react";
import one from '../images/people/1.png';
import two from '../images/people/2.png';
import three from '../images/people/4.png';
import four from '../images/people/5.png';
import five from '../images/people/6.png';
import six from '../images/people/3.png';
import seven from '../images/people/7.png';
import eight from '../images/people/8.png';
import $ from 'jquery';






function About(){

	window.addEventListener('load', () => {
		var
			carousels = document.querySelectorAll('.carousel')
		;
	
		for (var i = 0; i < carousels.length; i++) {
			carousel(carousels[i]);
		}
	});
	
	function carousel(root) {
		var
			figure = root.querySelector('figure'),
			nav = root.querySelector('nav'),
			images = figure.children,
			n = images.length,
			gap = root.dataset.gap || 0,
			bfc = 'bfc' in root.dataset,
			
			theta =  2 * Math.PI / n,
			currImage = 0
		;
		
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
		window.addEventListener('resize', () => { 
			setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
		});
	
		setupNavigation();
	
		function setupCarousel(n, s) {
			var	
				apothem = s / (2 * Math.tan(Math.PI / n))
			;
			
			figure.style.transformOrigin = `50% 50% ${- apothem}px`;
	
			for (var i = 0; i < n; i++)
				images[i].style.padding = `${gap}px`;
			for (i = 1; i < n; i++) {
				images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
				images[i].style.transform = `rotateY(${i * theta}rad)`;
			}
			if (bfc)
				for (i = 0; i < n; i++)
					 images[i].style.backfaceVisibility = 'hidden';
			
			rotateCarousel(currImage);
		}
	
		function setupNavigation() {
			nav.addEventListener('click', onClick, true);
			
			function onClick(e) {
				e.stopPropagation();
				
				var t = e.target;
				if (t.tagName.toUpperCase() != 'BUTTON')
					return;
				
				if (t.classList.contains('next')) {
					currImage++;
				}
				else {
					currImage--;
				}
				
				rotateCarousel(currImage);
			}
				
		}
	
		function rotateCarousel(imageIndex) {
			figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
		}
		$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);

		
	}
	return(
	<div class = "features">
	<div className = "services-title-text ">
		<h1 className="services-head"> Our Services </h1>	
	</div>
	<div class="carousel" data-gap="20" data-bfc>
	<figure>
	<img src={four} alt=""></img>
	<img src={two} alt=""></img>
	<img src={three} alt=""></img>
	<img src={five} alt=""></img>
	<img src={six} alt=""></img>
	<img src={seven} alt=""></img>
	<img src={eight} alt=""></img>
	<img src={one} alt=""></img>

	
	{/* <img src="https://source.unsplash.com/1FWICvPQdkY/800x533" alt=""></img>
	<img src="https://source.unsplash.com/7mUXaBBrhoA/800x533" alt=""></img> */}
</figure>
	<nav>
		<button class="nav prev">&larr;</button>
		<button class="nav next">&rarr;</button>
	</nav>
</div>

</div>
	);
}

export default About;