var scriptLoad = require('./scriptLoad');

module.exports = function(key, cb) {

  window.map_temp = function(){

    cb()
    window.map_temp = undefined;

  }

  // load Google Maps script
  scriptLoad({
    id: 'google-maps-api',
    src: "https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=map_temp"
  });

}
