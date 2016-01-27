Meteor.users.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    }
});