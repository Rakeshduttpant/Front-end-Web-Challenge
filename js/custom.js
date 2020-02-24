// JavaScript Document
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
	loop: false,
	autoplay:false,
	margin: 10,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 1,
		nav: false
	  },
	  600: {
		items:1,
		nav: false
	  },
	  1000: {
		items: 1,
		nav: false,
		loop: false,
		margin: 20
	  }
	}
  })
})