/**
 * @module:   gallery
 * @scss:     ./source/css/module/gallery.scss
 * @html:     ./source/js/module/gallery/gallery.html
 */


var Module 					= require('../abstract-module');
var $						= require('jquery');
var PhotoSwipe				= require('photoswipe');
var PhotoSwipeUI_Default	= require('photoswipe/dist/photoswipe-ui-default');




module.exports = Module.extend({

  	template: require('./gallery.html'),

  	onrender: function(){
	  	var pswpElement = document.querySelectorAll('.pswp')[0];

		// build items array
		var items = [
		    {
		        src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
		        w: 600,
		        h: 400
		    },
		    {
		        src: '/img/mosaic-img1.jpg',
		        w: 600,
		        h: 400
		    },
		    {
		        src: '/img/mosaic-img1.jpg',
		        w: 600,
		        h: 400
		    },
		    {
		        src: '/img/mosaic-img1.jpg',
		        w: 600,
		        h: 400
		    }
		];

		// define options (if needed)
		var options = {
		    // optionName: 'option value'
		    // for example:
		    index: 0,
		    // escKey: false // start at first slide
		};

		// Initializes and opens PhotoSwipe
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	},
});


