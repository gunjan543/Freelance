import React from "react";
import teacher from '../images/teacher.png'
import photographer from '../images/photographer.png'
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
		
	}
	return(
		<div>

<div class="carousel" data-gap="20" data-bfc>
	<figure>
    <img src={teacher} alt=""></img>
		<img src={photographer} alt=""></img>
		<img src="https://source.unsplash.com/kG38b7CFzTY/800x533" alt=""></img>
		<img src="https://source.unsplash.com/nvzvOPQW0gc/800x533" alt=""></img>
		<img src="https://source.unsplash.com/mCg0ZgD7BgU/800x533" alt=""></img>
		<img src="https://source.unsplash.com/VkwRmha1_tI/800x533" alt=""></img>
		<img src="https://source.unsplash.com/1FWICvPQdkY/800x533" alt=""></img>
		<img src="https://source.unsplash.com/7mUXaBBrhoA/800x533" alt=""></img>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

</div>
	);
}

export default About;