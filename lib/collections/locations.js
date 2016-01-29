Locations = new Mongo.Collection("locations");

Locations.allow({
    insert: function(userId) {
        return !!userId;
    }
});

Meteor.methods({
    addLocation: function(placeId) {
        Locations.insert({place_id: placeId});
    }
});