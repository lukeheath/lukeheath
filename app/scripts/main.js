'use strict';
const $ = window.jQuery;

$(function() {

	var slideItems = [
		{
			title: 'Welcome',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/portfolio-welcome.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/portfolio-welcome.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/portfolio-welcome.jpg'
		},
		{
			title: 'Seedling',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Seedling-Promo.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Seedling-Promo.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Seedling-Promo.jpg'
		},
		{
			title: 'Samsung',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Samsung.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Samsung.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Samsung.jpg'
		},
		{
			title: 'Draft',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Draft.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Draft.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Draft.jpg'
		},
		{
			title: 'La Madeleine',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-LaMad.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-LaMad.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-LaMad.jpg'
		},
		{
			title: 'Microsoft',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Microsoft.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Microsoft.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Microsoft.jpg'
		},
		{
			title: 'Unicorn',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Unicorn-v2.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Unicorn-v2.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Unicorn.jpg'
		},
		{
			title: 'About',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/portfolio-welcome.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/portfolio-welcome.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/portfolio-welcome.jpg'
		}
	];

	// Intialize background video
	$('#video-bg').vide({
	  mp4: slideItems[0].mp4,
	  webm: slideItems[0].webm,
	  poster: slideItems[0].poster
	}, {
		posterType: 'jpg',
		bgColor: 'transparent'
	});

	var videoBg = $('#video-bg').data('vide').getVideoObject();

	videoBg.onplay = function(){
		console.log('Video playing');
	};

	videoBg.onloadstart = function(){
		console.log('Starting loading video');
	}

	videoBg.onended = function(){
		console.log('Video ended');
	}

	var loadSlide = function(slideIndex){

		var slideItem = slideItems[slideIndex];

		// Stop pending HTTP requests
		window.stop();

		// Destroy previous video
		$('#video-bg').data('vide').destroy();

		// Create new background video
		$('#video-bg').vide({
		  mp4: slideItem.mp4,
		  webm: slideItem.webm,
		  poster: slideItem.poster
		}, {
			posterType: 'none',
			bgColor: 'transparent'
		});

		// Get media element object
		videoBg = $('#video-bg').data('vide').getVideoObject();

	};

	// Get carousel element
	var $carousel = $('#carousel');

	// Initialize carousel
	$carousel.slick({
		dots: false
	});

	// On after slide change
	$carousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
		// Close any open descriptions
		$('.desc-wrap').addClass('hide-desc');

		// Load slide data
	  loadSlide(currentSlide);
	});

	// Show/Hide click handling
	$('.show-toggle').on('click', function(){
		$(this).parent().toggleClass('hide-desc');
		if($(this).parent().hasClass('hide-desc')){
			videoBg.play();
		}
		else{
			videoBg.pause();
		}
	});

});