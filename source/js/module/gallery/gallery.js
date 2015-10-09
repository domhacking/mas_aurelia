/**
 * @module:   gallery
 * @scss:     ./source/css/module/gallery.scss
 * @html:     ./source/js/module/gallery/gallery.html
 */


var ractive, images;

// images = [
// 	{word: "this"},
// 	{word: "is"},
// 	{word: "next"},
// 	{word: "picture"},
// 	{word: "please"},
// 	{word: "maybe"},
// 	{word: "work"}
// ]; 

// images =[
// 	{src:"../img/mosaic-img1.jpg", id:1},
// 	{src:"../img/mosaic-img2.jpg", id:2},
// 	{src:"../img/mosaic-img3.jpg", id:3},
// 	{src:"../img/mosaic-img4.jpg", id:4},
// 	{src:"../img/mosaic-img5.jpg", id:5},
// 	{src:"../img/mosaic-img6.jpg", id:6},
// 	{src:"../img/mosaic-img7.jpg", id:7},
// 	{src:"../img/mosaic-img8.jpg", id:8},
// 	{src:"../img/mosaic-img9.jpg", id:9},
// ];

var Module = require('../abstract-module');

module.exports = Module.extend({

  	template: require('./gallery.html'),

	data: {
		galleryImages: [
			{src:"../img/mosaic-img1.jpg", id:"image1"},
			{src:"../img/mosaic-img2.jpg", id:"image2"},
			{src:"../img/mosaic-img3.jpg", id:"image3"},
			{src:"../img/mosaic-img4.jpg", id:"image4"},
			{src:"../img/mosaic-img5.jpg", id:"image5"},
			{src:"../img/mosaic-img6.jpg", id:"image6"},
			{src:"../img/mosaic-img7.jpg", id:"image7"},
			{src:"../img/mosaic-img8.jpg", id:"image8"},
			{src:"../img/mosaic-img9.jpg", id:"image9"},
		],
		function(){
			return {lightBox: false}
		},
		function(){
			return {active: false}
		}
	},

	oninit: function() {
	        // this.on('next', this.onNextImage);
	        this.on('image0', this.onImageClick); 
	        this.on('image1', this.onImageClick); 
	        this.on('image2', this.onImageClick); 
	        this.on('image3', this.onImageClick); 
	        this.on('image4', this.onImageClick); 
	        this.on('image5', this.onImageClick); 
	        this.on('image6', this.onImageClick); 
	        this.on('image7', this.onImageClick);
	        this.on('close', this.onCloseClick);
  	},


  	onImageClick: function(){
  		console.log('test')
  		this.set('lightBox', true);
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





























