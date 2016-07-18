(function(){
    var app = angular.module('sampleApp');

    app.controller('detailsController', function($scope, $routeParams, weatherServices){
        $scope.city = $routeParams.address;

        weatherServices.onGetWeather($scope.city).then(function(response){
            $scope.weather = response.data.coord.lon;
        });
    })

}());