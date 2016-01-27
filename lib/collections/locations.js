Locations = new Mongo.Collection("locations");

Locations.allow({
    insert: function(userId) {
        return !!userId;
    }
});