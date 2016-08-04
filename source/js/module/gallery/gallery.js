/**
 * @module:   gallery
 * @scss:     ./source/css/module/gallery.scss
 * @html:     ./source/js/module/gallery/gallery.html
 */

 images = [
 	{name:"../img/mosaic-img0.jpg", imageNumber:"1", format: 'topleft'},
 	{name:"../img/mosaic-img1.jpg", imageNumber:"2", format: 'topright'},
 	{name:"../img/mosaic-img2.jpg", imageNumber:"3", format: 'topright'},
 	{name:"../img/mosaic-img3.jpg", imageNumber:"4", format: 'middleRigt'},
 	{name:"../img/mosaic-img4.jpg", imageNumber:"5", format: 'middle'},
 	{name:"../img/mosaic-img5.jpg", imageNumber:"6", format: 'middle'},
 	{name:"../img/mosaic-img6.jpg", imageNumber:"7", format: 'middle'},
 	{name:"../img/mosaic-img7.jpg", imageNumber:"8", format: 'bottom'},
 	{name:"../img/mosaic-img8.jpg", imageNumber:"9", format: 'bottom'}
 ];

var Module = require('../abstract-module');

module.exports = Module.extend({

  	template: require('./gallery.html'),

	goto: function( imageNum ){
        var images = this.get('images');

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

        imageNum %= images.length;

        this.set({
            image: images[imageNum],
            current: imageNum
        });

  		this.set('lightBox', true);
  	},

  	onCloseClick: function(){
  		this.set('lightBox', false);
  	}
});
