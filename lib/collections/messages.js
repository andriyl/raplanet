Messages = new Mongo.Collection("messages");

Messages.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

Meteor.methods({
    insertPost: function(text) {
        var location = Locations.findOne({place_id: Meteor.user().place_id},{fields: {_id: 1}});

        if(!location){
            throw new Meteor.Error(500, 'Location not found');
        }

        Messages.insert({
            user_id     : Meteor.user()._id,
            location_id : location._id,
            text        : text,
            createdAt   : new Date()
        });
    }
});