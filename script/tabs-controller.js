'use strict';

App.controller('tabController', function($scope){
    $scope.tab = 1;

    $scope.selectTab = function(setTab){
        $scope.tab = setTab;
    }

    $scope.isSelectedTab = function(checkTab){
        return $scope.tab === checkTab;
    }
});

//we have to use tabPanels in the html page element like <tab-panels>
//tabPanels --> <tab-panels>
//if not it will not working.
App.directive('tabPanels', function(){
    return {
        restrict : 'E', //can use as a Element.
        templateUrl : 'tab-panels.html',
        controller : 'tabController'
    };
});