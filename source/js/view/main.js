var Ractive     = require('ractive');
var page        = require('page');
var $           = require('jquery');
// var bootstrap   = require('bootstrap');

Ractive.components = require('../module');

module.exports = function() {

    return new Ractive({

        el: document.querySelector('.main'),

        template: require('./main.html'),

        data: {
        },

        computed: {
        },

        oninit: function() {
            this.setRouter();
        },

        onrender: function() {

        },

        setRouter: function(){
            var self = this;


            page('/', function () {
                self.set('view', 'home');
            });

            page('/gallery', function () {
                self.set('view', 'gallery');
            });

            page('/info', function () {
                self.set('view', 'info');
            });

            page('/localarea', function () {
                self.set('view', 'localArea');
            });

            page('/contact', function () {
                self.set('view', 'contact');
            });

            page({
                click: false,
                dispatch: true,
                hashbang: false,
            });
        }
    });
};


$(document).ready(function(){
   $(window).bind('scroll', function() {
   var navHeight = $( window ).height();
         if ($(window).scrollTop() > navHeight) {
             $('.nav').addClass('fixed');
             $(".stopthejump").css('display','block');

         }
         else {
             $('.nav').removeClass('fixed');
             $(".stopthejump").css('display','none');
         }
    });
});

