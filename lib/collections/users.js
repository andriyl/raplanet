Meteor.users.before.insert(function (userId, doc) {
    var
    emails      = doc.emails,
    address     = emails && emails.length && emails[0].address,
    nickname    = address ? address.replace(/@[^@]+$/,'') : '';
    doc.profile = {username: nickname};
});

if (Meteor.isServer) {
    Meteor.users.after.update(function (userId, doc, fieldNames, modifier, options) {
        var
        placeId  = doc.place_id,
        location = Locations.findOne({place_id: placeId});

        if(!location) {
            Meteor.call('addLocation', placeId, function (error, result) {
                if (error) return console.error(error.reason);
            });
        }

    },{fetchPrevious: false});
}

Meteor.methods({
    addLocation: function(placeId) {
        Locations.insert({place_id: placeId});
    }
});

Meteor.users.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    }
});