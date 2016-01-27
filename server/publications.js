Meteor.publish("locations", function () {
    return Locations.find();
});

Meteor.publish(null, function() {
    return Meteor.users.find({_id: this.userId}, {fields: {place_id: 1, location_id: 1}});
});

Meteor.publish("messages", function () {
    return Messages.find();
});

Meteor.publish("users", function () {
    return Meteor.users.find({}, {fields: {profile: 1} });
});