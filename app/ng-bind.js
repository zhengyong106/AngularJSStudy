var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope) {
    $scope.email="please entry your eamil!";
    $scope.password="*******";
    $scope.autoLogin = true;
    $scope.getFormData = function () {
        $scope.email = "user@domain.com";
        $scope.password = "password";
    };
    $scope.resetFormData = function () {
        $scope.email = "";
        $scope.password = "";
    };
});