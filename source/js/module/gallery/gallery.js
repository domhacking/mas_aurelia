/**
 * @module:   gallery
 * @scss:     ./source/css/module/gallery.scss
 * @html:     ./source/js/module/gallery/gallery.html
 */


var ractive, images;


images =[
	{src:"../img/mosaic-img1.jpg", id:1, imageNumber:"1"},
	{src:"../img/mosaic-img2.jpg", id:2, imageNumber:"2"},
	{src:"../img/mosaic-img3.jpg", id:3, imageNumber:"3"},
	{src:"../img/mosaic-img4.jpg", id:4, imageNumber:"4"},
	{src:"../img/mosaic-img5.jpg", id:5, imageNumber:"5"},
	{src:"../img/mosaic-img6.jpg", id:6, imageNumber:"6"},
	{src:"../img/mosaic-img7.jpg", id:7, imageNumber:"7"},
	{src:"../img/mosaic-img8.jpg", id:8, imageNumber:"8"},
	{src:"../img/mosaic-img9.jpg", id:9, imageNumber:"9"},
];

var Module = require('../abstract-module');

module.exports = Module.extend({

  	template: require('./gallery.html'),

	data: {galleryImages: images,
		function(){
			return {lightBox: false}
		}

	},

	oninit: function() {
	        // this.on('next', this.onNextImage);
	        this.on('image', this.onImageClick);
	        this.on('close', this.onCloseClick);
  	},


  	onImageClick: function(){
  		this.set('active', true);
  		console.log(this.get('lightBox'));
  	},

  	onCloseClick: function(){
  		this.set('lightBox', false);
  	},

  	loop: function(images){
  		for(var i = 0; i < images.length; i++){
  			return i + 1
  		}
  	}

});





		// function ( options ) {
		//     this.on( 'goto', function ( event, index ) {
		//       this.goto( index );
		//     });

		//     this.goto( 0 );


 	// goto: function ( imageNum ) {
  // 	 	var images = this.get( 'images' );
  // 	 	console.log(imageNum);
  // 	 	// console.log(current);

  // 	 	while( imageNum < 0){
  // 	 		imageNum += images.length;
  // 	 		console.log(imageNum)
  // 	 	}
  // 	 	// ...and the maximum
		// imageNum %= images.length;

		// this.set({
	 //      	images: images[ imageNum ],
		//     current: imageNum
		// });

  // 	},





























