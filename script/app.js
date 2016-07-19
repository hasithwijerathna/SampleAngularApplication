'use strict';

var App = angular.module("sampleApp", ["ngRoute"]);

/**
 * This is the way to keep a Global variable.
 */
App.value('testValue', 1);

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

App.config(routing);