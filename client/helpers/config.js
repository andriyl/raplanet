Template.registerHelper('errorPages', function(page) {
    return Meteor.settings.public.errorPage[page];
});

Avatar.setOptions({
    customImageProperty: function() {
        var user        = this;
        user.username   = user.profile.username;
    }
});