/**
 * @module:   gallery
 * @scss:     ./source/css/module/gallery.scss
 * @html:     ./source/js/module/gallery/gallery.html
 */


var Module 	= require('../abstract-module');
var $		= require('jquery');

module.exports = Module.extend({

  template: require('./gallery.html')

});


// $(".mosaic--element").hover(function(){
// 	$(this).addClass("hoverShadow");
// }, function(){
// 	$(this).removeClass("hoverShadow");
// });
