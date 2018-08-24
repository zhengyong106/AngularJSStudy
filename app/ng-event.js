var myApp = angular.module("myApp", []);

myApp.controller("ParentController", function ($scope, $rootScope) {
    $scope.count = 0;
    $scope.$on("myEvent", function () {
        $scope.count += 1;
    });
}).controller("OneselfController", function ($scope, $rootScope) {
    $scope.count = 0;
    $scope.click = function () {
        $scope.count += 1;
    };
}).controller("ChildController", function ($scope, $rootScope) {
    $scope.count = 0;
    $scope.$on("myEvent", function () {
        $scope.count += 1;
    });
});