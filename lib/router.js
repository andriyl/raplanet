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

Router.onBeforeAction(function() {
    GoogleMaps.load({
        //key: 'YOUR API KEY',
        libraries: 'places'
    });
    this.next();
}, {only: ['home']});