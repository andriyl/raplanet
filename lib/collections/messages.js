Messages = new Mongo.Collection("messages");

Messages.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

Meteor.methods({
    insertPost: function(text) {
        var locationId = Locations.findOne({place_id: Meteor.user().place_id}) || null;

        if(!locationId){
            console.error('Location?');
            return false;
        }

        Messages.insert({
            user_id     : Meteor.user()._id,
            location_id : locationId,
            text        : text,
            createdAt   : new Date()
        });
    }
});