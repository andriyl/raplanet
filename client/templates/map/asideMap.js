Template.asideMap.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(30.8136, 10.9631),
                zoom: 4
            };
        }
    }
});

Template.asideMap.onCreated(function() {
    GoogleMaps.ready('asideMap', function(map) {
        var geocoder = new google.maps.Geocoder;

        geocoder.geocode({'placeId': Meteor.user().place_id}, function (results, status) {
            if(results) {
                var location = results[0].geometry.location;

                new google.maps.Marker({
                    position: location,
                    map: map.instance
                });

                map.instance.setCenter(location);
            }
        });
    });
});