'use strict';

//control main tabs
App.controller('tabController',function($scope){
    var tab = 1;
    $scope.selectTab = function(value){
        tab = value;
    }
    $scope.isSelectedTab = function(value){
        return tab === value;
    }
});