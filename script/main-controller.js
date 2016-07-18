(function () {
    var app = angular.module("sampleApp");

    var mainCtrl = function ($scope) {
        $scope.message = 'Hello World';
        $scope.students = students;
    };

    var students = [
        {
            id: 1,
            name: 'Kamal',
            age: 23,
            address: 'Kandy',
            pass: false
        }, {
            id: 2,
            name: 'Nimal',
            age: 21,
            address: 'Mawanella',
            pass:true
        }, {
            id: 3,
            name: 'Ranil',
            age: 34,
            address: 'Mathara',
            pass:false
        }, {
            id: 4,
            name: 'Janith',
            age: 13,
            address: 'Rathnapura',
            pass:true
        }
    ];

    app.controller("mainController", mainCtrl);
}());
