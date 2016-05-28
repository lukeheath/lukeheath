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
			title: 'Microsoft',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Microsoft.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Microsoft.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Microsoft.jpg'
		},
		{
			title: 'La Madeleine',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Seedling-Promo.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Seedling-Promo.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Seedling-Promo.jpg'
		},
		{
			title: 'Unicorn',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Unicorn.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Unicorn.webm',
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
		posterType: 'none',
		bgColor: 'transparent'
	});

	var videoBg = $('#video-bg').data('vide').getVideoObject();

	console.log("videoBg: ", videoBg);

	videoBg.onplay = function(){
		console.log("Video playing");
	};

	videoBg.onloadstart = function(){
		console.log("Starting loading video");
	}

	videoBg.onended = function(){
		console.log("Video ended");
	}

	var loadSlide = function(slideIndex){

		var slideItem = slideItems[slideIndex];

		// Stop pending HTTP requests
		window.stop();

		// Add random string to video sources
		// to prevent caching (webkit bug)
		var randomNumber = Math.random().toString(36).substring(7);

		$('#video-bg').data('vide').destroy();

		$('#video-bg').vide({
		  mp4: slideItem.mp4,
		  webm: slideItem.webm,
		  poster: slideItem.poster
		}, {
			posterType: 'none',
			bgColor: 'transparent'
		});

		var videoBg = $('#video-bg').data('vide').getVideoObject();

		videoBg.onplay = function(){
			console.log("Playing video");
		};

	};

	// Get carousel element
	var $carousel = $('#carousel');

	// Initialize carousel
	$carousel.slick({
		dots: true
	});

	// On before slide change
	$carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  //loadSlide(currentSlide);
	});

	// On after slide change
	$carousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
	  loadSlide(currentSlide);
	});

});