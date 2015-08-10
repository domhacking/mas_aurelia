var Ractive = require('ractive');
var page    = require('page');
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
