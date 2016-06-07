'use strict';
const $ = window.jQuery;

$(function() {

	var isTouchDevice = checkTouch();

	var slideItems = [
		{
			title: 'Welcome',
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Welcome-v2.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Welcome-v2.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-Welcome-v2.jpg'
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
			mp4: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-About-v3.mp4',
		  webm: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-About-v3.webm',
		  poster: 'http://dgnqtfv2myuh4.cloudfront.net/Portfolio-About.jpg'
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

	var $videoCover = $('#video-cover');

	if(isTouchDevice){
		$videoCover.removeClass('full');
	}

	videoBg.onplay = function(){
		$videoCover.removeClass('full');
	};

	videoBg.onloadstart = function(){
		//console.log('Starting loading video');
	};

	var loadSlide = function(slideIndex){

		var slideItem = slideItems[slideIndex];

		// Stop pending HTTP requests
		window.stop();

		if(!isTouchDevice){
			$videoCover.addClass('full');
		}

		// Wait for cover to finish fading in
		setTimeout(function(){

			// Update video background
			$('#video-bg').vide({
			  mp4: slideItem.mp4,
			  webm: slideItem.webm,
			  poster: slideItem.poster
			}, {
				posterType: 'jpg',
				bgColor: 'transparent'
			});

			// Update media element object
			videoBg = $('#video-bg').data('vide').getVideoObject();

			videoBg.onplay = function(){
				$videoCover.removeClass('full');
			};

		}, 300);

	};

	// Get carousel element
	var $carousel = $('#carousel');

	// Initialize carousel
	$carousel.slick({

	});

	// On before slide change
	$carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		// Load slide data
	  loadSlide(nextSlide);
	});

	// On after slide change
	$carousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
		// Close any open descriptions
		if(!isTouchDevice){
			$('.desc-wrap').addClass('hide-desc');
		}
	});

	// Show/Hide click/tap handling

	if(isTouchDevice){
		$('.show-toggle').on('touchend', function(){
			if($(this).parent().hasClass('hide-desc')){
				$(this).parent().removeClass('hide-desc');
			}
			else{
				$(this).parent().addClass('hide-desc');
			}
		});
	}
	else{
		$('.show-toggle').on('click', function(){
			$(this).parent().toggleClass('hide-desc');
			if($(this).parent().hasClass('hide-desc')){
				videoBg.play();
			}
			else{
				videoBg.pause();
			}
		});
	}

	function checkTouch() {
	 return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
	}

});