/**
 * @module:   nav
 * @scss:     ./source/css/module/nav.scss
 * @html:     ./source/js/module/nav/nav.html
 */


var Module 	= require('../abstract-module');
var page 	= require('page');

module.exports = Module.extend({

  	template: require('./nav.html'),

    data: function(){
        return {expanded: false}
    },

  	oninit: function() {
  		this.on('goToHome', this.onGoHome);
  		this.on('goToGallery', this.onGoGallery);
  		this.on('goToInfo', this.onGoInfo);
  		this.on('goToLocalArea', this.onGoLocalArea);
  		this.on('goToContact', this.onGoContact);
        this.on('burger', this.onBurgerClick);
        // this.observe('view', function(newValue, old){
        //     // console.log(old, newValue);
        // });
        // this.on('nav', this.onNavClick);
    },

    onGoHome: function(){
        page('/');
        this.toggle('expanded')
    },

  	onGoGallery: function(){
          page('/gallery');
          this.toggle('expanded')
    },

    onGoInfo: function(){
        page('/info');
        this.toggle('expanded')
    },

	onGoLocalArea: function(){
        page('/localarea');
        this.toggle('expanded')
    },

	onGoContact: function(){
        page('/contact');
        this.toggle('expanded')
    },

    onBurgerClick: function(){
        this.toggle('expanded');
    }

});
