(function () {

    'use strict';

    var app = angular.module("app", ['osdForm']);

    //controller used to bind data and function from our form
    //form validation is handled by Osedea module
    //standard $http service is used here to start logon process

    app.controller('userCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.currentUser = {
            email: "",
            password: ""
        };
        $scope.logon = function() {
            $http.post('/logon', $scope.currentUser)
                .then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        };
    }])
})();
