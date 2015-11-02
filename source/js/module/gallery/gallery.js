/**
 * @module:   gallery
 * @scss:     ./source/css/module/gallery.scss
 * @html:     ./source/js/module/gallery/gallery.html
 */

 images = [
 	{name:"../img/mosaic-img0.jpg", imageNumber:"1"},
 	{name:"../img/mosaic-img1.jpg", imageNumber:"2"},
 	{name:"../img/mosaic-img2.jpg", imageNumber:"3"},
 	{name:"../img/mosaic-img3.jpg", imageNumber:"4"},
 	{name:"../img/mosaic-img4.jpg", imageNumber:"5"},
 	{name:"../img/mosaic-img5.jpg", imageNumber:"6"},
 	{name:"../img/mosaic-img6.jpg", imageNumber:"7"},
 	{name:"../img/mosaic-img7.jpg", imageNumber:"8"},
 	{name:"../img/mosaic-img8.jpg", imageNumber:"9"}
 ];

var Module = require('../abstract-module');

module.exports = Module.extend({

  	template: require('./gallery.html'),

	goto: function( imageNum ){
        var images = this.get('images');

		// console.log(images)

        while (imageNum < 0 ) {
            imageNum += images.length;
        }

        console.log(imageNum)

        imageNum %= images.length;

        this.set({
            image: images[imageNum],
            current: imageNum
        });
    },

	data: {
		images: images,
		function(){
			return {lightBox: false}
		},
	},

	oninit: function() {
        this.on('goto', function(event, index){
            this.goto(index);
        });
        this.goto(0);
		this.on('image', this.onImageClick);
    	this.on('close', this.onCloseClick);
    },

  	onImageClick: function(e, imageNum){
		var images = this.get('images');

		console.log(images)

        while (imageNum < 0 ) {
            imageNum += images.length;
        }

        console.log(imageNum)

        imageNum %= images.length;

        this.set({
            image: images[imageNum],
            current: imageNum
        });

		// console.log(imageNum[i])


  		this.set('lightBox', true);
		// this.set({
		// 	image: images[imageNum]
		// })
  		console.log(this.get('lightBox'));
  	},

  	onCloseClick: function(){
  		this.set('lightBox', false);
  	}
});
