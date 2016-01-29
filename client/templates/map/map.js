Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {

        var geocoder = new google.maps.Geocoder;

        Locations.find().observe({
            added: function (document) {
                var isMessages = Messages.count({location_id: document._id}).count();

                if(document.place_id && isMessages) {
                    geocoder.geocode({'placeId': document.place_id}, function (results, status) {
                        if(results) {
                            new google.maps.Marker({
                                position: results[0].geometry.location,
                                map: map.instance
                            });
                        }
                    });
                }
            }
        });
    });
});

Template.map.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(30.8136, 10.9631),
                zoom: 3
            };
        }
    }
});