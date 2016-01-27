Router.configure({
    layoutTemplate  : 'layout',
    loadingTemplate : 'loading'
});

Router.route('/', {
    name: 'home'
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
},{only: ['home', 'editProfile']});