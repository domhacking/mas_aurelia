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


    // $(".navButton").on("click", function( e ) {
    //     console.log('test');
    //     var navContainter = document.getElementById('nav-tab');
    //     e.preventDefault();

    //     $("body, html").animate({
    //         scrollTop: navContainter.offset().top}, 700);

    // });
});


// var carousel = (function(){

//  var box     = document.querySelector('.carouselBox');
//  var next    = box.querySelector('.next');
//  var prev    = box.querySelector('.prev');
//  var items   = box.querySelector('.content li');
//  var counter = 0;
//  var amount  = items.length;
//  var current = items[0];
//  box.classList.add('active');

//  function navigate(direction){
//      current.classList.remove('current');
//      counter = counter + direction;

//      if (direction === -1 && counter < 0){
//          counter = amount -1;
//      }

//      if (direction === 1 && !items[counter]){
//          counter = 0
//      }

//      current = items[counter];
//      current.classList.add('current');
//  }

//  next.addEventListener('click', function(ev){
//      navigate(1);
//  });
//  prev.addEventListener('click', function(ev){
//      navigate(-1);
//  });
//  navigate(0);
// })();

