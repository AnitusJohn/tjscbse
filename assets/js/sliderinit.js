/*
Author       : Theme-Family
Template Name: Akids - Kingdergarden School Website Template
Version      : 1.0.1
*/
(function($) {
    "use strict";
	
	/*--------------------------------------------------------------
      Main slider
      --------------------------------------------------------------*/		
	$('.slider-active').owlCarousel({
		loop:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		smartSpeed:450,
		autoplay:true,
		autoplayTimeout:6000,
		mouseDrag:true,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	
	
	/*--------------------------------------------------------------
      START SERVICE SLIDER
      --------------------------------------------------------------*/	
	$(".atf-kids-slider").owlCarousel({
		margin:3,
		nav:false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		smartSpeed:450,
		autoplay:true,
		autoplayTimeout:6000,
		loop:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	/*--------------------------------------------------------------
		CLASS SLIDER
      --------------------------------------------------------------*/	
	$('#atf-class-slider').owlCarousel({
		margin: 10,
		autoplay: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplayTimeout: 4000,
		nav: true,
		smartSpeed: 1000,
		dots: false,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 3
			}
		}
	});
	
	/*--------------------------------------------------------------
		GALLERY SLIDER
      --------------------------------------------------------------*/	
	$('#atf-gallery-slider').owlCarousel({
		margin: 10,
		autoplay: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplayTimeout: 4000,
		nav: true,
		smartSpeed: 1000,
		dots: false,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 3
			}
		}
	});
			
	/*--------------------------------------------------------------
		TESTIMONIAL SLIDER
	  --------------------------------------------------------------*/	
	$('#testimonial-slider').owlCarousel({
		margin: 10,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});

	/*END Testimonials LOGO*/
		
	/*--------------------------------------------------------------
		NEWS SLIDER
	  --------------------------------------------------------------*/	
	$('#blog-slider').owlCarousel({
		margin: 10,
		autoplay: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplayTimeout: 4000,
		nav: true,
		smartSpeed: 1000,
		dots: false,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	
	/*END NEWS SLIDER */
	
	
	
})(jQuery);

