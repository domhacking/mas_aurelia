/**
 * @module:   gallery
 * @scss:     ./source/css/module/gallery.scss
 * @html:     ./source/js/module/gallery/gallery.html
 */



var Module 		= require('../abstract-module');

  template: require('./gallery.html'),


  	oninit: function() {
      	this.on('image', this.onImage);
    },



    onImage: function(){
    	var images = document.querySelectorAll('.images');

    	images.classList.add('.active');

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


    }







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
=======
>>>>>>> development
