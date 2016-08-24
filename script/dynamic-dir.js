App.directive('dynamicDir', function () {
    return {
        templateUrl: function (elem, attr) {
            return 'customer-' + attr.type + '.html';
        },
        controller: function ($scope) {
            $scope.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatre'
            };
        }
    }
})