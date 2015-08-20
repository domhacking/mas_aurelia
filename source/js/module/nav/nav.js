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


document.addEventListener('DOMContentLoaded', function(){
    function onActiveTab(event){
        var actives = document.querySelectorAll('.active');

        // deactivate existing active tab and panel
        for (var i=0; i < actives.length; i++){
          actives[i].className = actives[i].className.replace('active', '');
        }

        // activate new tab and panel
        event.target.parentElement.className += ' active';
        // document.getElementById(event.target.href.split('#')[1]).className += ' active';
    }

    var el = document.getElementById('nav-tab');

    el.addEventListener('click', onActiveTab, false);
});

