// Create angular app
var validationApp = angular.module('validationApp', []);
// Create angular controller
validationApp.controller('maincontroller', function ($scope){
    $scope.submitForm = function (isValid){
        if(isValid){
            alert('form is Valid');
        }
    };
});