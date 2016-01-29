Router.configure({
    layoutTemplate  : 'layout',
    loadingTemplate : 'loading',
    notFoundTemplate: '404',
    waitOn: function() {
        Meteor.subscribe('users');
        return Meteor.subscribe('locations');
    }
});

Router.route('/', {
    name: 'home',
    data: function(){
        return Meteor.subscribe('messages');
    }
});

Router.route('/editProfile',{
    name: 'editProfile'
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        }else{
            this.render('403');
        }
    }else{
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {only: 'editProfile'});
Router.onBeforeAction(function() {
    GoogleMaps.load({
        //key: 'YOUR API KEY',
        libraries: 'places'
    });
    this.next();
}, {only: ['home']});