(function(){
    var app = angular.module("sampleApp", ["ngRoute"]);

    var routing = function ($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'welcome.html',
            controller: 'mainController'
        }).when('/welcome/:address', {
            templateUrl: 'details.html',
            controller: 'detailsController'
        }).when('/about', {
            templateUrl: 'about.html'
        }).when('/contactUs', {
            templateUrl: 'contact-us.html'
        }).otherwise({
            redirectTo: '/welcome'
        })
    };

    app.config(routing);
}())
