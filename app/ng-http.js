var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'ng-http.json'
    }).success(function (data, status, headers, config) {
        console.log("success...");
        console.log(data);
        $scope.users = data;
    }).error(function () {
        console.log("error...");
    });
})