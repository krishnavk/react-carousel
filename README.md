# React-Carousel
	A simple carousel implmentation using reactjs. 

# Components

	The react-carousel is split into three components. All the three components has only one job to perform.
	Also, container pattern is followed to keep data access and presentation logic separately and for the reusablity.

	1. carouselContainer - fetch images from the given API. 
	
	2. carousel - handles the presentation logic and the operations associated to it. This component takes two props 
			1) list of images and 
			2) number of images to show in the viewBox of the carousel.	
					
	3. ImageSlide - display the given images.
	
# Todo

	1. Improve performance by implmenting lazy loading
	2. Can make it run slides in infinite mode by passing the required props.
	
	
	
