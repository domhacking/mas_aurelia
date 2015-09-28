/**
 * @module:   gallery
 * @scss:     ./source/css/module/gallery.scss
 * @html:     ./source/js/module/gallery/gallery.html
 */


var Module = require('../abstract-module');

module.exports = Module.extend({

  template: require('./gallery.html'),

  data: function(){
  	return { lightBox: false}
  },

  oninit: function(){
  	this.on('image1', this.onImageClick);
  	this.on('image2', this.onImageClick);
  	this.on('image3', this.onImageClick);
  	// this.on('image4', this.onImageClick);
  	// this.on('image5', this.onImageClick);
  	// this.on('image6', this.onImageClick);
  	// this.on('image7', this.onImageClick);
  	// this.on('image8', this.onImageClick);
  	this.on('close', this.onCloseClick);
  },

  onImageClick: function(){
  	this.set('lightBox', true);
  	console.log(this.get('lightBox'))
  },

  onCloseClick: function(){
  	this.set('lightBox', false);
  }

});








// module.exports = Module.extend({

//   	template: require('./nav.html'),

//     data: function(){
//         return {expanded: false}
//     },

//   	oninit: function() {
//   		this.on('goToHome', this.onGoHome);
//   		this.on('goToGallery', this.onGoGallery);
//   		this.on('goToInfo', this.onGoInfo);
//   		this.on('goToLocalArea', this.onGoLocalArea);
//   		this.on('goToContact', this.onGoContact);
//         this.on('burger', this.onBurgerClick);
//         this.observe('view', function(newValue, old){
//             console.log(old, newValue);
//         });
//         // this.on('nav', this.onNavClick);
//     },

//     onGoHome: function(){
//         page('/');
//     },

//   	onGoGallery: function(){
//           page('/gallery');
//     },

//     onGoInfo: function(){
//         page('/info');
//     },

// 	onGoLocalArea: function(){
//         page('/localarea');
//     },

// 	onGoContact: function(){
//         page('/contact');
//     },

//     onBurgerClick: function(){
//         // name of attribute
//         this.toggle('expanded')
//         console.log(this.get('expanded'))
//     }
// });




































  	// oninit: function() {
   //    	this.on('image', this.onImage);
   //  },



    // onImage: function(){
    // 	var images = document.querySelectorAll('.images');

    // 	images.classList.add('.active');
    // }

  //  		var hasClass = function (elem, className) {
		//     return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
		// }

		// var addClass = function (elem, className) {
		//     if (!hasClass(elem, className)) {
		//         elem.className += ' ' + className;
		//     }
		// }

		// var removeClass = function (elem, className) {
		//     var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
		//     if (hasClass(elem, className)) {
		//         while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
		//             newClass = newClass.replace(' ' + className + ' ', ' ');
		//         }
		//         elem.className = newClass.replace(/^\s+|\s+$/g, '');
		//     }
		// }


		// // if ( 'querySelector' in document && 'addEventListener' in window ) {

		// var images = document.querySelectorAll('.images');

		//     for (var i = 0, len = images.length; i < len; i++) {
		//         var image = images[i];
		//         image.addEventListener('click', function(e) {

		//             if ( hasClass(image, 'lightBox') ) {
		//                 removeClass(image, 'lightBox');
		//             }

		//             else {
		//                 addClass(image, 'lightBox');
		//             }
		//         });
		// 	}
  


  //  		var images = document.querySelectorAll('.images').classList;

		// console.log(images)









// carousel = (function(){
 //  	onrender: function(){
 //  		console.log('test')

	// 	var box 	= document.querySelector('.carouselBox');
	// 	var next 	= box.querySelector('.next');
	// 	var prev 	= box.querySelector('.prev');
	// 	var items	= box.querySelector('.content li');
	// 	var counter	= 0;
	// 	var amount 	= items.length;
	// 	var current	= items[0];
	// 	box.classList.add('active');

	// 	function navigate(direction){
	// 		current.classList.remove('current');
	// 		counter = counter + direction;

	// 		if (direction === -1 && counter < 0){
	// 			counter = amount -1;
	// 		}

	// 		if (direction === 1 && !items[counter]){
	// 			counter = 0
	// 		}

	// 		current = items[counter];
	// 		current.classList.add('current');
	// 	}

	// 	next.addEventListener('click', function(ev){
	// 		navigate(1);
	// 	});
	// 	prev.addEventListener('click', function(ev){
	// 		navigate(-1);
	// 	});
	// 	navigate(0);
	// }

// 	var box 	= document.querySelector('.carouselBox');
// 	var next 	= box.querySelector('.next');
// 	var prev 	= box.querySelector('.prev');
// 	var items	= box.querySelector('.content li');
// 	var counter	= 0;
// 	var amount 	= items.length;
// 	var current	= items[0];
// 	box.classList.add('active');

// 	function navigate(direction){
// 		current.classList.remove('current');
// 		counter = counter + direction;

// 		if (direction === -1 && counter < 0){
// 			counter = amount -1;
// 		}

// 		if (direction === 1 && !items[counter]){
// 			counter = 0
// 		}

// 		current = items[counter];
// 		current.classList.add('current');
// 	}

// 	next.addEventListener('click', function(ev){
// 		navigate(1);
// 	});
// 	prev.addEventListener('click', function(ev){
// 		navigate(-1);
// 	});
// 	navigate(0);
// })();

