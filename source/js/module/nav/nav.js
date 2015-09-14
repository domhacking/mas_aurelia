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
      this.on('burger', this.onBurgerClick);
      this.on('nav', this.onNavClick);
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

    onNavClick: function(){
          var hasClass = function (elem, className) {
            return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
        }

        var addClass = function (elem, className) {
            if (!hasClass(elem, className)) {
                elem.className += ' ' + className;
            }
        }

        var removeClass = function (elem, className) {
            var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
            if (hasClass(elem, className)) {
                while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                    newClass = newClass.replace(' ' + className + ' ', ' ');
                }
                elem.className = newClass.replace(/^\s+|\s+$/g, '');
            }
        }

        var activeTabs = document.querySelectorAll('.navbar--container');

            for (var i = 0, len = activeTabs.length; i < len; i++) {
            var activeTab = activeTabs[i];
            activeTab.addEventListener('click', function(e) {

                if ( hasClass(activeTab, 'active') ) {
                    removeClass(activeTab, 'active');
                }

                else {
                    addClass(activeTab, 'active');
                }
            });
        }
    },


    onBurgerClick: function(){

        if (el.style.display != 'none'){
                el.style.display = 'none'
        } else {
            el.style.display = 'block'
        }
        var el = document.getElementById("nav-tab")
    }
});


