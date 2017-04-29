/**
 * @module:   localArea
 * @scss:     ./source/css/module/localArea.scss
 * @html:     ./source/js/module/localArea/localArea.html
 */


var Module = require('../abstract-module');

module.exports = Module.extend({

    template: require('./localArea.html'),

    data: function(){
        return {
            area:"aix",
            mapOptions:{
                center: new google.maps.LatLng(43.768741, 4.928654),
                zoom: 10,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    {
                        "featureType": "landscape",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 65
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 51
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 30
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 40
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": -25
                            },
                            {
                                "saturation": -100
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "hue": "#ffff00"
                            },
                            {
                                "lightness": -25
                            },
                            {
                                "saturation": -97
                            }
                        ]
                    }
                ]

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
        var marker = new google.maps.Marker({
                position: new google.maps.LatLng(43.768741, 4.928654),
                map: map,
                icon: '../img/g-house.png'
            });

    },

    onTabClick: function(event, area){
        this.set("area", area)
    }
});
