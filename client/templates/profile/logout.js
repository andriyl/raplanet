accountsUIBootstrap3.logoutCallback = function(error) {
    var routeName = Router.current().route.getName(),
        homePage = 'home';

    if(error) console.error("Error:" + error);
    if(routeName != homePage) Router.go(homePage);
}