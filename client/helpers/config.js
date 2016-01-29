Template.registerHelper('errorPages', function(page) {
    return Meteor.settings.public.errorPage[page];
});