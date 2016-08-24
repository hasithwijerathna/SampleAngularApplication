App.controller('mySelect2Controller', function ($scope) {

    $scope.initSelect2 = function (element) {
        $(element).select2({
            data: cities,
            placeholder: 'New Placeholder Text'
        });
    }

});

var cities = ['kandy', 'mathara', 'colombo'];