var domready  = require('domready');
var loadMaps  = require('./util/loadMaps');
var config    = require('./config');


var app = {

  /**
   * Setup and configs
   */
  init: function() {
    loadMaps(config.api, app.render);
  },


  /**
   * Renders a Ractive instance
   */
  render: require('./view/main.js')

};


domready(function() {
  app.init();
});
