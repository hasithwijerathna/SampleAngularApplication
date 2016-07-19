'use strict';

App.factory('weatherServices', function($http){
    var key = "ed6942a495670b717a1c04dfb6cbef1b";
    var base_weather_url = "http://api.openweathermap.org/data/2.5/weather?q=";

    var getWeather = function(city){
        return $http.get(base_weather_url+city+"&appid="+key).then(function(response){
            return response;
        }, function(){
            alert('error getting response');
        })
    };

    return {
        onGetWeather : getWeather
    }
});