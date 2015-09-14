/**
 * @module:   localArea
 * @scss:     ./source/css/module/localArea.scss
 * @html:     ./source/js/module/localArea/localArea.html
 */


var Module = require('../abstract-module');

module.exports = Module.extend({

    template: require('./localArea.html'),

    data: function(){
        return {area:"aix",
        mapOptions:{
            center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        }
    },

    oninit: function() {
        this.on('localTown', this.onTabClick);
    },

    onrender: function() {
        var el = this.find('#map');
        var opts = this.get('mapOptions');
        var map = new google.maps.Map(el, opts);
    },

    onTabClick: function(event, area){
        this.set("area", area)
        console.log('test')
    }



});


