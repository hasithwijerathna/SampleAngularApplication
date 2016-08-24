App.directive("mySelect2", function ($timeout, $parse) {
    return {
        restrict: 'AC',
        controller: 'mySelect2Controller',
        link: function (scope, element, attr) {
            scope.initSelect2('#' + attr.id);
        }
    };
});