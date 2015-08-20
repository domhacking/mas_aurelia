/**
 * @module:   localArea
 * @scss:     ./source/css/module/localArea.scss
 * @html:     ./source/js/module/localArea/localArea.html
 */


var Module = require('../abstract-module');

module.exports = Module.extend({

  template: require('./localArea.html'),

    data: function(){
        return {area:"aix"}
    },

    oninit: function() {
        console.log("test")
        this.on("localTown", this.onTabClick)
    },

    onrender: function() {

    },

    onTabClick: function(event, area){
        this.set("area", area)
    }
});


