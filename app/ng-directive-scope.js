var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope) {
    $scope.liquor = "啤酒";
});

myApp.directive("liquorA", function () {
    return {
        scope: {
            name: "@"
        },
        restrict: "E",
        replace: true,
        template: "<input type='text' class='form-control' ng-model='name'>"
    }
});

myApp.directive("liquorB", function () {
    return {
        scope: {
            name: "="
        },
        restrict: "E",
        replace: true,
        template: "<input type='text' class='form-control' ng-model='name'>"
    }
});

myApp.directive("liquorC", function () {
    return {
        scope: {
            getLiquor: "&"
        },
        restrict: "E",
        replace: true,
        template: "<p>{{getLiquor()}}</p>"
    }
});