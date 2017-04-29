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
            this.observe('view', this.scrollingPoint);
            $(window).bind('scroll', function() {
                var navHeight = $(window ).height();
                 if ($(window).scrollTop() > navHeight) {
                     $('.nav').addClass('fixed');
                     $(".stopthejump").css('display','block');

                 } else {
                     $('.nav').removeClass('fixed');
                     $(".stopthejump").css('display', 'none');
                 }
            });

            $('.arrow').on('click', function(e) {
                e.preventDefault();
                var target = $(this).attr('href');
                $('html, body').animate({

                    scrollTop: $(window ).height()
                }, 800)
            })
        },



        scrollingPoint: function(newValue, old){
            console.log(old, newValue);
            if(!old){
                return;
            }
            var navpoint = this.find('.homescreen');

            var navpointHeight = navpoint.scrollHeight;

            window.scrollTo(0, navpointHeight)

            // var endPoint = navpoint.offsetTop;
            // var inc = 30;
            // var scrollY = window.scrollY;
            // console.log(endPoint);
            //
            // function step(ts){
            //
            //     var scrollY = window.scrollY;
            //     window.scroll(0, scrollY - inc);
            //
            //     if(scrollY > endPoint){
            //         window.requestAnimationFrame(step);
            //     }
            // }
            //
            // if(scrollY > endPoint){
            //     window.requestAnimationFrame(step);
            // }
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
