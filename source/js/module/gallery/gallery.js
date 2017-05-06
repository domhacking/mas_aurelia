/**
 * @module:   gallery
 * @scss:     ./source/css/module/gallery.scss
 * @html:     ./source/js/module/gallery/gallery.html
 */

 images = [
    //  REMEMBER: need to have image 0
    {name:"../img/mosaic-img0.jpg"},
    {name:"../img/mosaic-img1.jpg"},
    {name:"../img/mosaic-img2.jpg"},
    {name:"../img/mosaic-img3.jpg"},
    {name:"../img/mosaic-img4.jpg"},
    {name:"../img/mosaic-img5.jpg"},
    {name:"../img/mosaic-img6.jpg"},
    {name:"../img/mosaic-img7.jpg"},
    {name:"../img/mosaic-img9.jpg"},
    {name:"../img/mosaic-img9.jpg"},
    {name:"../img/mosaic-img10.jpg"},
    {name:"../img/mosaic-img11.jpg"},
    {name:"../img/mosaic-img12.jpg"},
    {name:"../img/mosaic-img13.jpg"},
    {name:"../img/mosaic-img14.jpg"},
    {name:"../img/mosaic-img15.jpg"},
    {name:"../img/mosaic-img16.jpg"},
    {name:"../img/mosaic-img17.jpg"},
    {name:"../img/mosaic-img18.jpg"},
    {name:"../img/mosaic-img19.jpg"},
    {name:"../img/mosaic-img20.jpg"},
    {name:"../img/mosaic-img21.jpg"},
    {name:"../img/mosaic-img22.jpg"},

    // {name:"../img/mosaic-1.jpg", imageNumber:"1", format: 'topleft'},
    // {name:"../img/mosaic-img18.jpg", imageNumber:"2", format: 'topright'},
    // {name:"../img/IMG_6572.jpg", imageNumber:"1", format: 'topleft'},
    // {name:"../img/IMG_6563-cropped.jpg", imageNumber:"1", format: 'topleft'},
    // {name:"../img/IMG_6555-cropped.jpg", imageNumber:"1", format: 'topleft'},
    // {name:"../img/IMG_6535-cropped.jpg", imageNumber:"1", format: 'topleft'},
    // {name:"../img/mosaic-img10.jpg", imageNumber:"11", format: 'topleft'},
    // {name:"../img/mosaic-img11.jpg", imageNumber:"12", format: 'topright'},
    // {name:"../img/mosaic-img12.jpg", imageNumber:"13", format: 'topright'},
    // {name:"../img/mosaic-img13.jpg", imageNumber:"14", format: 'middleRigt'},
    // {name:"../img/mosaic-img0.jpg", imageNumber:"1", format: 'topleft'},
    // {name:"../img/mosaic-img1.jpg", imageNumber:"2", format: 'topright'},
    // {name:"../img/mosaic-img5.jpg", imageNumber:"6", format: 'topleft'},
    // {name:"../img/mosaic-img6.jpg", imageNumber:"7", format: 'topleft'},
    // {name:"../img/mosaic-img2.jpg", imageNumber:"3", format: 'topleft'},
    // {name:"../img/mosaic-img15.jpg", imageNumber:"16", format: 'middle'},
    // {name:"../img/mosaic-img4.jpg", imageNumber:"5", format: 'topleft'},
    // {name:"../img/mosaic-img3.jpg", imageNumber:"4", format: 'topleft'},
    // {name:"../img/mosaic-img7.jpg", imageNumber:"8", format: 'topleft'},
    // {name:"../img/mosaic-img8.jpg", imageNumber:"9", format: 'topleft'},
    // {name:"../img/mosaic-img9.jpg", imageNumber:"10", format: 'topleft'},
    // {name:"../img/mosaic-img17.jpg", imageNumber:"18", format: 'bottom'},
    // {name:"../img/pano.jpg", imageNumber:"19", format: 'bottom'},

 ];

var Module = require('../abstract-module');

module.exports = Module.extend({

  	template: require('./gallery.html'),

	goto: function( imageNum ){
        var images = this.get('images');

        while (imageNum < 0 ) {
            imageNum += images.length;
        }

        imageNum %= images.length;

        this.set({
            image: images[imageNum],
            current: imageNum
        });
    },
    data: function () {
      return {
          images: images,
	     }
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
