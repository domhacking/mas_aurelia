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
    },

    onBurgerClick: function(){
        // name of attribute
        this.toggle('expanded')
        // console.log(this.get('expanded'))
    },

    // onNavClick: function(){
    //     var timeOut;
    //     if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    //         window.scrollBy(0,-50);
    //         timeOut=setTimeout('scrollToTop()',10);
    //     } else clearTimeout(timeOut);
    // }

});
