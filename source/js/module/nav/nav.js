/**
 * @module:   nav
 * @scss:     ./source/css/module/nav.scss
 * @html:     ./source/js/module/nav/nav.html
 */


var Module 	= require('../abstract-module');
var page 	  = require('page');
var $       = require('jquery');

module.exports = Module.extend({

  	template: require('./nav.html'),

  	oninit: function() {
  		this.on('goToHome', this.onGoHome);
  		this.on('goToGallery', this.onGoGallery);
  		this.on('goToInfo', this.onGoInfo);
  		this.on('goToLocalArea', this.onGoLocalArea);
  		this.on('goToContact', this.onGoContact);
    },


    onGoHome: function(){
        page('/');
    },

	onGoGallery: function(){
        page('/gallery');
    },

    onGoInfo: function(){
        page('/info');
    },

	onGoLocalArea: function(){
        page('/localarea');
    },

	onGoContact: function(){
        page('/contact');
    }

});



