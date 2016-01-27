Meteor.users.before.insert(function (userId, doc) {
    var
    emails      = doc.emails,
    address     = emails && emails.length && emails[0].address,
    nickname    = address ? address.replace(/@[^@]+$/,'') : '';
    doc.profile = {username: nickname};
});

Meteor.users.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    }
});