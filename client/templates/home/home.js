Template.home.helpers({
    type: function() {
        return Meteor.user() ? "messages" : "map";
    }
});